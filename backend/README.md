# Art Voting Backend

A Node.js/Express backend service for handling art voting functionality with Supabase integration.

## Features

### User Management
- Create new users with Ethereum wallet addresses
- Track user statistics (total votes, artcoins earned)
- View leaderboard of top voters

### Artwork Management
- Add new artworks to the database
- Each artwork has a unique identifier and image URL

### Voting System
- Submit votes (upvote/downvote) for artworks
- Each vote includes:
  - User's Ethereum address
  - Artwork ID
  - Vote type (true/false)
  - Reward amount (10-100 artcoins)

## API Endpoints

### Users
```
POST /api/votes/user
{
    "userAddress": "0x..."  // Ethereum address
}
```

### Artworks
```
POST /api/votes/artwork
{
    "imageUrl": "path/to/image"
}
```

### Votes
```
POST /api/votes
{
    "userAddress": "0x...",
    "artworkId": "uuid",
    "voteType": true/false,
    "rewardAmount": 50
}
```

### Leaderboard
```
GET /api/votes/leaderboard
```

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables in `.env`:
```
PORT=3001
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_KEY=your_supabase_service_key
FRONTEND_URL=http://localhost:5173
```

4. Run the development server:
```bash
npm run dev
```

## Database Structure

### Users Table
- address (primary key, Ethereum address)
- total_votes
- total_artcoins
- last_vote_at
- username (optional)

### Artworks Table
- id (uuid, primary key)
- image_url
- created_at

### Votes Table
- id (uuid, primary key)
- user_address (foreign key → users)
- artwork_id (foreign key → artworks)
- vote_type (boolean)
- reward_amount
- created_at

## Security
- Service role authentication for database operations
- Public read access for leaderboard and artwork viewing
- Protected write operations through backend API only

Would you like me to add any additional sections or details to the README?