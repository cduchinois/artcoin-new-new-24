// backend/src/types/index.ts
import { Request } from "express";

export interface VoteRequest {
  userAddress: string;
  artworkId: string;
  voteType: boolean;
  rewardAmount: number;
}

export interface Vote {
  id: string;
  user_address: string;
  artwork_id: string;
  vote_type: boolean;
  reward_amount: number;
  created_at: string;
}

export interface CreateArtworkRequest {
  imageUrl: string;
}

export interface CreateUserRequest {
  userAddress: string;
}

export interface User {
  address: string;
  total_votes: number;
  total_artcoins: number;
  last_vote_at: string;
  username?: string;
}

export interface TypedRequestBody<T> extends Request {
  body: T;
}
