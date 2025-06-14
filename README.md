# Taptide Check-in System

A modern check-in system built with Next.js, Prisma, and PostgreSQL, featuring NFC tag integration for seamless merchant check-ins and reward tracking.

## Features

- **NFC Tag Integration**: Easy check-ins using NFC tags
- **Merchant Management**: Add and manage merchants with custom reward goals
- **User Check-ins**: Track user visits and progress towards rewards
- **Reward System**: Automatic reward tracking and claiming
- **Real-time Updates**: Instant feedback on check-in status and reward progress
- **Mobile-First Design**: Optimized for mobile devices
- **Responsive UI**: Beautiful and intuitive user interface

## Tech Stack

- **Frontend**: Next.js 14.1.0, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Phone number-based authentication
- **Styling**: Tailwind CSS, Shadcn UI components
- **Development**: TypeScript, ESLint, Prettier

## Prerequisites

- Node.js 18.0.0 or higher
- PostgreSQL 12 or higher
- NFC tag reader (for physical testing)

## Environment Setup

1. Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/taptide_checkin?schema=public"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

2. Update the database connection string with your PostgreSQL credentials

## Database Schema

The application uses the following database schema:

### User
- `id`: String (Primary Key)
- `name`: String
- `phoneNumber`: String (Unique)
- `birthday`: DateTime (Optional)
- `createdAt`: DateTime
- `updatedAt`: DateTime

### Merchant
- `id`: String (Primary Key)
- `name`: String
- `location`: String
- `nfcTagId`: String (Unique)
- `rewardGoal`: Int
- `rewardDescription`: String
- `activePromos`: String[]
- `createdAt`: DateTime
- `updatedAt`: DateTime

### Checkin
- `id`: String (Primary Key)
- `timestamp`: DateTime
- `userId`: String (Foreign Key)
- `merchantId`: String (Foreign Key)

### Reward
- `id`: String (Primary Key)
- `progress`: Int
- `rewardClaimed`: Boolean
- `userId`: String (Foreign Key)
- `merchantId`: String (Foreign Key)
- `createdAt`: DateTime
- `updatedAt`: DateTime

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd taptide-checkin-v3
```

2. Install dependencies:
```bash
npm install
```

3. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

4. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Check-in Endpoints

#### POST /api/checkin
Create a new check-in for a user at a merchant location.

Request body:
```json
{
  "name": "string",
  "phoneNumber": "string",
  "birthday": "string (optional)",
  "nfcTagId": "string"
}
```

Response:
```json
{
  "success": true,
  "message": "Check-in successful",
  "data": {
    "checkin": {
      "id": "string",
      "timestamp": "string",
      "userId": "string",
      "merchantId": "string"
    },
    "reward": {
      "id": "string",
      "progress": "number",
      "rewardClaimed": "boolean",
      "merchant": {
        "name": "string",
        "rewardGoal": "number",
        "rewardDescription": "string"
      }
    }
  }
}
```

### Merchant Endpoints

#### GET /api/merchants
Get all merchants.

Response:
```json
{
  "merchants": [
    {
      "id": "string",
      "name": "string",
      "location": "string",
      "nfcTagId": "string",
      "rewardGoal": "number",
      "rewardDescription": "string",
      "activePromos": "string[]"
    }
  ]
}
```

#### POST /api/merchants
Create a new merchant.

Request body:
```json
{
  "name": "string",
  "location": "string",
  "nfcTagId": "string",
  "rewardGoal": "number",
  "rewardDescription": "string",
  "activePromos": "string[]"
}
```

## Project Structure

```
taptide-checkin-v3/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── checkin/
│   │   │   └── merchants/
│   │   ├── checkin/
│   │   └── merchants/
│   ├── components/
│   │   ├── ui/
│   │   ├── checkin-form.tsx
│   │   └── merchant-card.tsx
│   ├── lib/
│   │   ├── prisma.ts
│   │   └── utils.ts
│   └── types/
├── prisma/
│   └── schema.prisma
├── public/
├── .env
├── next.config.js
└── package.json
```

## Troubleshooting

### Common Issues

1. **Database Connection Issues**
   - Ensure PostgreSQL is running
   - Verify DATABASE_URL in .env is correct
   - Check if the database exists

2. **Prisma Client Issues**
   - Run `npx prisma generate` after schema changes
   - Clear Next.js cache: `rm -rf .next`
   - Restart the development server

3. **Port Conflicts**
   - The application will automatically try ports 3000-3007
   - Kill existing Node.js processes: `pkill -f "node.*next"`
   - Or specify a custom port: `npm run dev -- -p 3000`

4. **NFC Tag Issues**
   - Ensure the NFC tag ID matches a merchant in the database
   - Check if the merchant is active
   - Verify the NFC reader is properly connected

### Development Commands

```bash
# Start development server
npm run dev

# Generate Prisma client
npx prisma generate

# Push database changes
npx prisma db push

# Open Prisma Studio
npx prisma studio

# Build for production
npm run build

# Start production server
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
