# 2. User Flows & 3. Information Architecture

## 2. User Flows

### Candidate Flow
1.  **Welcome / Onboarding**: Landing page explains the "No Resume" philosophy.
2.  **Sign Up**: Basic email/password or OAuth (Demo credentials: `hire-me@anshumat.org`).
3.  **AI Profile Builder**:
    *   **Phase 1**: "Tell me about yourself" (Raw text input).
    *   **AI Interpretation**: System structures input on-the-fly.
4.  **Experience Input**: Refine structured roles, companies, and dates.
5.  **Skills Input**: AI suggests skills based on input; candidate accepts or adds manually.
6.  **Project Input**: Link GitHub/Figma or describe impact (AI extracts themes).
7.  **Review Profile**: Beautiful, interactive preview (Non-standard card layout).
8.  **Submit Profile**: Finalize data for the RecruitAI talent pool.

### Recruiter Flow
1.  **Dashboard**: High-level overview of matched candidates (Match Scores).
2.  **Candidate Detail View**: Deep dive into structured data (Skills, Impact, Metrics).
3.  **Compare Candidates**: Side-by-side view highlighting top differences.
4.  **Shortlist / Action**: One-click "Shortlist" or "Request Interview" button.

---

## 3. Information Architecture

### Candidate Profile Schema
```json
{
  "profileId": "String (UUID)",
  "candidateInfo": {
    "name": "String",
    "email": "String",
    "bio_summary": "String (AI-Generated)"
  },
  "experiences": [
    {
      "role": "String",
      "company": "String",
      "duration": "String",
      "impact": "String (Structured)",
      "skills_used": ["String"]
    }
  ],
  "skills": [
    {
      "name": "String",
      "level": "Enum (Beginner, Intermediate, Expert)",
      "verified": "Boolean"
    }
  ],
  "projects": [
    {
      "title": "String",
      "description": "String",
      "link": "String (URL)",
      "impact_summary": "String (AI-Extracted)"
    }
  ],
  "match_score": "Number (0-100%)"
}
```

### Recruiter Dashboard State
- `activeCandidates`: Array of Candidate Objects.
- `selectedForComparison`: Array of Candidate IDs.
- `filterState`: { "minimumMatch": 80, "skills": [], "roles": [] }
- `hiringActionState`: { "candidateId": "id", "action": "SHORTLIST" }
