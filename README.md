# Steadfast Cleaning Co. — steadfastcleanco.com

The live marketing site for [Steadfast Cleaning Co.](https://steadfastcleanco.com), a residential cleaning company in Tampa, FL. It is a real site for a real business, not a portfolio exercise. It books actual jobs.

I built and maintain it with [Claude Code](https://www.anthropic.com/claude-code) on a Git based deployment workflow. This README is here because the interesting part is not the HTML, it is how the thing gets built and shipped.

## What's here

| | |
|---|---|
| **Stack** | Hand written HTML and CSS. No framework, no build step, no JS dependencies. |
| **Hosting** | Netlify, continuous deployment from `main`. Push to deploy. |
| **Forms** | Netlify Forms on the contact page, piped through to a Google Sheets intake pipeline via Zapier so new leads land without manual entry. |
| **SEO** | `sitemap.xml`, `robots.txt`, extensionless URLs via `_redirects` (301s), and dedicated neighborhood pages for South Tampa, Westchase, and Carrollwood. |

Notable pages:

- **Instant estimate calculator** (`index.html`) — visitors size their home and get a real price range before they ever talk to us, which cuts the back and forth on inbound leads.
- **Sweep It Clean** (`play/index.html`) — a small browser game built into the site. Pseudo 3D voxel kitchen, physics, roaches, coffee spills. It exists to be shared, and its end screen routes players to the estimator. Roughly 2,500 lines of hand tuned canvas work and the most technically involved thing in the repo.

## How it gets built

The workflow, honestly described:

1. I decide what the site needs. A price change, a new landing page, a CTA that isn't converting.
2. I direct Claude Code to implement it, in plain language, reviewing what it writes.
3. I test it locally, catch what's wrong, and iterate. This is most of the work.
4. Commit and push. Netlify builds and deploys.

The commit history is the record of that loop. Nearly every commit is co-authored with Claude, and they are real changes to a live site rather than a demo.

### What I've learned running this way

Claude is fast at generating a plausible first version and unreliable about whether that version actually does what you asked. The game is the clearest example: the roach hit test, the board coverage, and the banner position all shipped wrong the first time and took a dedicated pass to fix (see `db29b44`). Left alone it will also happily rewrite something you did not ask it to touch.

So the value is not in the generation. It is in knowing what "done" looks like, checking against that, and being specific about what to change. The person in the loop is doing the judgment, not the typing.

## Structure

```
steadfast-v2/
├── index.html                     # home + instant estimate calculator
├── services.html                  # services and pricing
├── contact.html                   # Netlify form, feeds the lead pipeline
├── play/index.html                # Sweep It Clean
├── house-cleaning-{south-tampa,westchase,carrollwood}.html
├── css/main.css
├── _redirects, sitemap.xml, robots.txt, 404.html
└── images/
```

The repo tracks only `steadfast-v2/`. Business records, archives, and planning notes stay local by design (see `.gitignore`).

---

Built by [Greg Tucker](https://linkedin.com/in/gregorytucker92).
