# FrameRights Landing Page

A minimal, documentation-first landing page for FrameRights, built with Next.js 14+ (App Router), Tailwind CSS, and Prisma.

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start Supabase (local Postgres):

   ```bash
   npx supabase start
   ```

   *Note: Uses custom ports (DB: 54342, Studio: 54343) to avoid conflicts.*

3. Run migrations:

   ```bash
   npx prisma migrate dev
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Environment Variables

Copy `.env.example` to `.env` (already done for local if set up by script).

```bash
# Database
DATABASE_URL="postgresql://postgres:postgres@127.0.0.1:54342/postgres"

# Admin Export Auth
ADMIN_USER="admin"
ADMIN_PASS="your_secure_password"
```

## Deployment (VPS)

1. **Build the application**:

   ```bash
   npm run build
   ```

2. **Start production server**:

   ```bash
   npm start
   ```

3. **Database**:
   - For production, set `DATABASE_URL` to your production Postgres instance.
   - Run `npx prisma migrate deploy` to apply migrations.

## Daily Reports (Cron Setup)

To receive the 6 AM daily email report, you need to trigger the `/api/cron/daily-report` endpoint.

**Option 1: Using Vercel Cron (Recommended for Vercel)**

1. Add a `vercel.json` file to the root:

   ```json
   {
     "crons": [
       {
         "path": "/api/cron/daily-report",
         "schedule": "0 11 * * *" // 11:00 UTC = 6:00 AM EST
       }
     ]
   }
   ```

**Option 2: Using GitHub Actions**
Create `.github/workflows/daily-report.yml` that runs a `curl` request:

```yaml
name: Trigger Daily Report
on:
  schedule:
    - cron: '0 11 * * *' # 6 AM EST
jobs:
  ping:
    runs-on: ubuntu-latest
    steps:
      - run: |
          curl -X GET ${{ secrets.APP_URL }}/api/cron/daily-report \
          -H "Authorization: Bearer ${{ secrets.REPORT_SECRET }}"
```

**Option 3: Using a VPS (crontab)**
Run `crontab -e` and add:

```bash
0 6 * * * curl -X GET http://localhost:3000/api/cron/daily-report -H "Authorization: Bearer your_secure_token"
```

### Nginx Example (Reverse Proxy)

Map port 3000 to your domain:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Features

- **Waitlist**: Captures email + optional survey data. Honeypot protected.
- **Admin Export**: protected CSV export at `/api/admin/export` (Basic Auth).
- **Design**: Clean, "calm" aesthetic using Tailwind.
