// backend/src/routes/votes.ts
import { Router, Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";
import { supabase } from "../index";
import { ethers } from "ethers";
import { VoteRequest } from "../types";

const router = Router();

// Define validation middleware
const validateVoteRules = [
  body("userAddress")
    .custom((value) => ethers.isAddress(value))
    .withMessage("Invalid Ethereum address"),
  body("artworkId").notEmpty().isUUID(),
  body("voteType").isBoolean(),
  body("rewardAmount").isInt({ min: 10, max: 100 }),
];

// Type-safe request handler
type RequestHandler = (
  req: Request<{}, {}, VoteRequest>,
  res: Response,
  next: NextFunction
) => Promise<void>;

// POST /api/votes
const handleVote: RequestHandler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const { userAddress, artworkId, voteType, rewardAmount } = req.body;

  try {
    const { data: vote, error: voteError } = await supabase
      .from("votes")
      .insert({
        user_address: userAddress,
        artwork_id: artworkId,
        vote_type: voteType,
        reward_amount: rewardAmount,
      })
      .select()
      .single();

    if (voteError) throw voteError;

    const { data: user, error: userError } = await supabase
      .from("users")
      .upsert(
        {
          address: userAddress,
          total_votes: 1,
          total_artcoins: rewardAmount,
          last_vote_at: new Date().toISOString(),
        },
        {
          onConflict: "address",
          count: "exact",
        }
      );

    if (userError) throw userError;

    res.json({ success: true, data: { vote, user } });
  } catch (error) {
    console.error("Vote error:", error);
    res.status(500).json({
      error: "Failed to process vote",
      details: process.env.NODE_ENV === "development" ? error : undefined,
    });
  }
};

// GET /api/votes/leaderboard
const getLeaderboard = async (req: Request, res: Response): Promise<void> => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("address, total_votes, total_artcoins, username")
      .order("total_votes", { ascending: false })
      .limit(10);

    if (error) throw error;
    res.json({ data });
  } catch (error) {
    console.error("Leaderboard error:", error);
    res.status(500).json({ error: "Failed to fetch leaderboard" });
  }
};

// Routes
router.post('/', validateVoteRules, handleVote);
router.get('/leaderboard', getLeaderboard);

export { router as votesRouter };
