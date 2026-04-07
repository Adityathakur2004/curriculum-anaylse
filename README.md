# EdGE

EdGE is a modern EdTech SaaS concept focused on closing the education-to-industry gap for students, universities, and placement teams.

This project is built as a polished Next.js website and product demo with:

- A branded landing page for the EdGE platform
- Role-based dashboard previews for Admin, University, and Student users
- An AI chatbot section powered through a free-model OpenRouter integration
- Career intelligence features such as outcome simulation, skill-gap analysis, ROI views, market insights, and decision scoring

## Product Vision

EdGE helps students make smarter career decisions and helps universities understand how their curriculum compares to real job-market demand.

The platform highlights:

- Curriculum vs industry gap analysis
- Career outcome simulation
- AI-based career and course recommendations
- Real-time market trends
- Course ROI comparison
- Global vs local education comparisons
- Micro-internship and project marketplace concepts
- Mentor and alumni guidance
- Future risk and automation exposure signals
- Personalized student decision dashboards

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Recharts
- Lucide React

## Current App Structure

- `/` landing page
- `/dashboard/admin` admin preview
- `/dashboard/university` university preview
- `/dashboard/student` student intelligence dashboard
- `/api/chat` chatbot API route

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create a local environment file:

```bash
cp .env.example .env.local
```

On Windows PowerShell, you can use:

```powershell
Copy-Item .env.example .env.local
```

3. Add your OpenRouter API key in `.env.local`:

```env
OPENROUTER_API_KEY=your_openrouter_api_key_here
OPENROUTER_MODEL=openrouter/free
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. Start the development server:

```bash
npm run dev
```

5. Open:

```txt
http://localhost:3000
```

If port `3000` is already in use, Next.js may automatically move to `3001`.

## Available Scripts

- `npm run dev` starts the local dev server
- `npm run build` creates a production build
- `npm run start` runs the production build
- `npm run lint` runs linting

## Chatbot Setup

The chatbot is connected through OpenRouter using a free-model route by default.

Files involved:

- `app/api/chat/route.ts`
- `components/sections/chatbot-section.tsx`
- `.env.example`

Important note:

- Free AI models can still make mistakes
- The current prompt is tuned for practical, careful education and career guidance
- For production use, you should add stronger grounding, moderation, rate limiting, and source-backed retrieval

## Main Feature Areas Implemented

### Landing Experience

- Hero section
- Feature overview
- Curriculum gap analysis section
- Intelligence suite section
- Decision score section
- AI chatbot section
- Dashboard previews

### Student Dashboard

- Skill momentum chart
- Career outcome simulator
- Skill gap analyzer
- Market demand dashboard
- ROI cards
- Micro-internship marketplace preview
- Curriculum intelligence comparison
- Personalized workspace
- Final decision engine

### Admin and University Dashboards

- KPI cards
- Readiness and growth charts
- System and placement insight panels

## Build Status

This project has been verified with:

```bash
npm run build
```

## Roadmap

Good next steps for turning this into a full production platform:

- Add Prisma + PostgreSQL
- Add authentication and RBAC
- Add real data ingestion pipelines
- Add live job-market connectors
- Add saved user profiles and progress persistence
- Add source-backed AI recommendations
- Add mentor booking and marketplace workflows

## Repository

GitHub repository:

[https://github.com/Adityathakur2004/curriculum-anaylse.git](https://github.com/Adityathakur2004/curriculum-anaylse.git)
