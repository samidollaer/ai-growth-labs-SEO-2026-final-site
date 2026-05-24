# Free DNA Audit — Complete Roadmap & Flow

> Yeh document batata hai ke jab koi client Free Audit form fill karta hai to:
> Data kahan save hota hai, kisko dikhta hai, kaun complete karta hai, kaun report banata hai, aur kaun client ko bhejta hai.

---

## COMPLETE FLOW DIAGRAM

```
STEP 1: CLIENT FILLS FORM (Frontend)
═══════════════════════════════════════
    Client visits: /pages/free-audit.html
    Fills form:
    ┌─────────────────────────────────┐
    │  Business Name *                │
    │  Full Name *                    │
    │  Email *                        │
    │  Phone *                        │
    │  Website URL *                  │
    │  Business Type (dropdown)       │
    │  City                           │
    │                                 │
    │  [🔍 Analyze My Website Now]    │
    └─────────────────────────────────┘
         │
         ▼
STEP 2: REAL-TIME WEBSITE CRAWL (Backend — Automatic)
═══════════════════════════════════════
    POST /api/public/free-audit
         │
         ├── Backend receives form data
         ├── Crawls the actual website (HTTP request)
         ├── Analyzes HTML: title, meta, headings, images,
         │   links, schema, SSL, robots.txt, sitemap, etc.
         ├── Scores 16 DNA pillars (0-100 each)
         ├── Calculates overall score + grade (A/B/C/D/F)
         ├── Generates AI/Human/Credential task separation
         │
         └── ⚡ AI DOES THIS AUTOMATICALLY — NO HUMAN NEEDED
              (Takes 5-15 seconds)
         │
         ▼
STEP 3: TWO THINGS HAPPEN SIMULTANEOUSLY
═══════════════════════════════════════

    ┌─────────────────────────────────────────────┐
    │  A) CLIENT SEES RESULTS INSTANTLY            │
    │     - 16 pillar score cards                  │
    │     - Overall score + grade                  │
    │     - Detailed findings & recommendations    │
    │     - AI tasks vs Human tasks breakdown      │
    │     - Can download PDF                       │
    │     - Can email report to anyone             │
    └─────────────────────────────────────────────┘

    ┌─────────────────────────────────────────────┐
    │  B) LEAD SAVED IN DATABASE                   │
    │     Table: sales_leads                       │
    │     Fields saved:                            │
    │     - business_name                          │
    │     - contact_name                           │
    │     - email                                  │
    │     - phone                                  │
    │     - website                                │
    │     - industry                               │
    │     - city                                   │
    │     - source = "free_audit"                  │
    │     - status = "new"                         │
    │     - notes = {audit_score, audit_date}      │
    └─────────────────────────────────────────────┘
         │
         ▼
STEP 4: LEAD APPEARS IN BACKEND
═══════════════════════════════════════

    ┌─────────────────────────────────────────────┐
    │  WHO SEES IT:                                │
    │                                              │
    │  👑 SUPER ADMIN (admin / admin123)           │
    │     Dashboard → Activity section             │
    │     Can see all leads + assign to sales team │
    │                                              │
    │  💼 SALES TEAM (lisa_c / password123)        │
    │     Dashboard → Lead Pipeline section        │
    │     Shows as: NEW LEAD with green badge      │
    │     Sees: business name, contact, phone,     │
    │           email, website, audit score         │
    └─────────────────────────────────────────────┘
         │
         ▼
STEP 5: SALES TEAM WORKS THE LEAD
═══════════════════════════════════════

    Sales Dashboard → Lead Pipeline:

    ┌──────┐   ┌───────────┐   ┌───────────┐   ┌──────────┐   ┌─────┐
    │ NEW  │ → │ CONTACTED │ → │ QUALIFIED │ → │ PROPOSAL │ → │ WON │
    └──────┘   └───────────┘   └───────────┘   └──────────┘   └─────┘
       │                                                          │
       │   Lisa (sales) calls the client                          │
       │   using the phone/email from the lead                    │
       │                                                          │
       │   "Hi! I see you ran a free SEO audit on               │
       │    your website. Your score was 52/100.                  │
       │    I'd love to show you how we can improve it."          │
       │                                                          │
       └──── If client says NO → Status: LOST ───────────────────┘
                                                                  │
                                                          Client says YES
                                                                  │
                                                                  ▼
STEP 6: CONVERT LEAD TO CLIENT
═══════════════════════════════════════

    Admin Dashboard → Create Client:
    ┌─────────────────────────────────────────────┐
    │  Admin creates new CLIENT from the lead      │
    │  - Business name (from lead)                │
    │  - Contact info (from lead)                 │
    │  - Assigns package: Starter/Growth/Pro      │
    │  - Sets monthly payment                     │
    └─────────────────────────────────────────────┘
         │
         ▼
STEP 7: CREATE PROJECT & ASSIGN WORKERS
═══════════════════════════════════════

    Admin Dashboard → Create Project:
    ┌─────────────────────────────────────────────┐
    │  Title: "SEO Campaign — [Business Name]"    │
    │  Client: [Select from dropdown]              │
    │  Service: Local SEO / AI SEO / Full         │
    │  Assigned Worker: sarah_k (Tech SEO)        │
    │  Team Leader: ops_manager                    │
    │  Priority: High                              │
    │  Due Date: [set date]                        │
    └─────────────────────────────────────────────┘
         │
         ▼
STEP 8: WORKERS EXECUTE TASKS
═══════════════════════════════════════

    ┌─────────────────────────────────────────────┐
    │  TECH SEO WORKER (sarah_k / password123)    │
    │  Worker Dashboard → Kanban Board:            │
    │                                              │
    │  TO-DO          IN PROGRESS      DONE       │
    │  ┌─────────┐   ┌─────────┐   ┌─────────┐  │
    │  │Fix title│   │Schema   │   │SSL check│  │
    │  │tag      │   │markup   │   │done     │  │
    │  │         │   │adding   │   │         │  │
    │  └─────────┘   └─────────┘   └─────────┘  │
    │                                              │
    │  Uses audit report recommendations as        │
    │  task checklist                               │
    └─────────────────────────────────────────────┘
         │
         ▼
STEP 9: GENERATE & SEND CLIENT REPORT
═══════════════════════════════════════

    WHO GENERATES: Admin or Finance

    ┌─────────────────────────────────────────────┐
    │  Admin Dashboard → Client Detail Page        │
    │  Click "Generate Report" button              │
    │                                              │
    │  OR                                          │
    │                                              │
    │  Finance Dashboard (rachel_g)                │
    │  → Click "Report" button next to client      │
    │  → Full report opens in new tab              │
    │                                              │
    │  Report includes:                            │
    │  - Progress on all tasks                    │
    │  - SEO improvements made                    │
    │  - Rankings data                            │
    │  - Before/After comparison                  │
    │  - Next month's plan                        │
    └─────────────────────────────────────────────┘
         │
         ▼
STEP 10: CLIENT VIEWS IN PORTAL
═══════════════════════════════════════

    ┌─────────────────────────────────────────────┐
    │  CLIENT PORTAL (client_chen / password123)   │
    │                                              │
    │  Client logs in → sees:                      │
    │  - Their projects with progress bars        │
    │  - Task completion status                   │
    │  - Keyword rankings (if tracked)            │
    │  - Reports shared by team                   │
    │  - Can download reports                     │
    └─────────────────────────────────────────────┘
```

---

## SUMMARY: KAUN KYA KARTA HAI

| Step | Kaun | Kya Karta Hai | Dashboard |
|------|------|---------------|-----------|
| 1 | Client (website visitor) | Free audit form fill karta hai | Frontend — free-audit.html |
| 2 | AI (automatic) | Website crawl + 16 pillar analysis + scoring | Backend — automatic |
| 3a | Client | Results dekhta hai + PDF download + email | Frontend — results page |
| 3b | System (automatic) | Lead save karta hai database mein | Database — sales_leads table |
| 4 | Admin + Sales | Lead dekhte hain dashboard mein | Admin Dashboard + Sales Dashboard |
| 5 | Sales (lisa_c) | Client ko call/email karta hai, pipeline manage karta hai | Sales Dashboard → Lead Pipeline |
| 6 | Admin (admin) | Lead ko client mein convert karta hai, package assign karta hai | Admin Dashboard → Create Client |
| 7 | Admin (admin) | Project create karta hai, workers assign karta hai | Admin Dashboard → Create Project |
| 8 | Workers (sarah_k) | SEO tasks execute karta hai (audit recommendations follow karta hai) | Worker Dashboard → Kanban Board |
| 9 | Admin / Finance | Client report generate karta hai | Admin → Client Detail / Finance Dashboard |
| 10 | Client | Portal mein login karke progress dekhta hai, reports download karta hai | Client Portal |

---

## ROLE RESPONSIBILITIES

### 👑 Super Admin (admin)
- Sab kuch dekhta hai
- Leads assign karta hai
- Clients create karta hai
- Projects banata hai
- Workers ko tasks deta hai
- Reports approve karta hai
- API keys manage karta hai

### 💼 Sales (lisa_c)
- Naye leads dekhti hai (including free audit leads)
- Clients ko call karti hai
- Lead status update karti hai (New → Contacted → Qualified → Proposal → Won/Lost)
- Proposals bhejti hai

### 🔧 Tech SEO Worker (sarah_k)
- Assigned tasks karta hai
- Audit recommendations implement karti hai
- Kanban board pe tasks move karti hai
- Time log karti hai

### 📊 Ops Manager (ops_manager)
- Team ka kaam monitor karta hai
- Projects ka progress dekhta hai
- Workload balance karta hai

### 💰 Finance (rachel_g)
- Payments track karti hai
- Invoices banati hai
- Client reports generate karti hai
- Financial summaries dekhti hai

### 👤 Client (client_chen)
- Apne projects ka progress dekhta hai
- Reports download karta hai
- Rankings check karta hai

---

## DATABASE FLOW

```
Free Audit Form
    │
    ▼
┌──────────────┐         ┌──────────────┐
│ sales_leads  │ ──────→ │   clients    │
│ (auto-save)  │ convert │ (admin creates)│
│ source:      │         │ package:     │
│ "free_audit" │         │ Starter/     │
│ status:      │         │ Growth/Pro   │
│ "new"        │         └──────┬───────┘
└──────────────┘                │
                                ▼
                         ┌──────────────┐
                         │   projects   │
                         │ (admin creates)│
                         │ assigned to  │
                         │ worker       │
                         └──────┬───────┘
                                │
                                ▼
                         ┌──────────────┐
                         │    tasks     │
                         │ (auto from   │
                         │  package or  │
                         │  manual)     │
                         └──────┬───────┘
                                │
                                ▼
                    ┌───────────┴───────────┐
                    │                       │
             ┌──────────────┐       ┌──────────────┐
             │  seo_audits  │       │client_reports│
             │ (AI-generated)│       │ (generated   │
             │ 16 pillar    │       │  by admin/   │
             │ scores       │       │  finance)    │
             └──────────────┘       └──────────────┘
```

---

## CURRENT STATUS

| Feature | Working? | Details |
|---------|----------|---------|
| Free audit form on frontend | ✓ Yes | Real crawl, 16 pillars, instant results |
| Lead auto-save to database | ✓ Yes | Saves to sales_leads with source="free_audit" |
| Lead shows in Sales dashboard | ✓ Yes | lisa_c can see in Lead Pipeline |
| Lead shows in Admin dashboard | ✓ Yes | admin can see all leads |
| Lead pipeline management | ✓ Yes | Move through: New → Contacted → Qualified → Proposal → Won/Lost |
| Create client from lead | ✓ Yes | Admin creates client manually |
| Create project for client | ✓ Yes | Admin creates project, assigns worker |
| Worker sees tasks | ✓ Yes | Kanban board with drag & drop |
| Generate client report | ✓ Yes | Admin/Finance clicks Report button |
| Client portal access | ✓ Yes | Client logs in, sees their projects |
| Email notification on new lead | ⚠ Needs SMTP | Configure SMTP in Settings to enable |
| PDF report auto-send | ⚠ Needs SMTP | Configure SMTP in Settings to enable |
