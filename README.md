# ⚡ OmniScout — Autonomous Competitive & Pricing Intelligence Platform
### Real-world Enterprise Intelligence Platform Powered by TinyFish Web Agent Mesh

**OmniScout** is a production-grade market intelligence workstation. Enter any company or website (e.g. Stripe, Linear, Notion, Vercel), and OmniScout dispatches an autonomous TinyFish agent pipeline in the backend to crawl pricing models, extract core capabilities, search live market signals, and generate executive dossiers.

---

## 🏗️ Architecture: How TinyFish Powers the Backend

```
[User Query / Company Domain]
           │
           ▼
[OmniScout Backend (server.mjs)]
           │
     ┌─────┴─────────────────────────┐
     ▼                               ▼
[1. TinySearch]               [2. TinyFetch]
Live News & Pricing Queries   Renders Chromium SPA &
from Web Agent Index          Strips Ads/Scripts to Markdown
     │                               │
     └─────────────┬─────────────────┘
                   ▼
            [3. TinyAgent]
      Navigates Pricing DOM &
      Extracts Tier Matrix & Limits
                   │
                   ▼
     [Synthesized Executive Dossier]
     • Threat Index Score (1-100)
     • Tiered Pricing Breakdown
     • Competitive Moats vs Vulnerabilities
     • Live Web Signals with Direct Citations
     • Full Agent Execution Trace
```

---

## 🎨 UI/UX Design System (Linear / Raycast Standard)

- **Color Palette**: Deep Zinc base (`#09090b`), elevated panels (`#111114`, `#16161a`), hairline borders (`#27272f`), and crisp indigo/emerald accents.
- **Clean Typography**: Inter typography with balanced weight hierarchy and JetBrains Mono for metrics and telemetry.
- **Zero AI Slop**: No cartoon dragons or emojis as icons. Clean, accessible SVG Lucide icons throughout.
- **Productivity Workflows**:
  - Global Search with keyboard shortcuts (`/` to focus, `Enter` to audit).
  - Multi-tab deep dive: Overview, Pricing Breakdown, Feature Gap Analysis, Live Signals, and Raw Agent Telemetry.
  - Active Watchlist management.
  - Instant One-Click Export to Markdown & Clipboard.

---

## 🚀 Quick Start

1. Start the platform:
   ```bash
   cd C:\Users\HP\.gemini\antigravity\scratch\tinyfish-showcase
   node server.mjs
   ```
2. Open **`http://localhost:3000`** in your browser.
3. Type any company or URL into the top search bar and press `Enter` to run a live autonomous audit.
