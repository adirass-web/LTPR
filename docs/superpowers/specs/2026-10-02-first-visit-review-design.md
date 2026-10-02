# Four-reviewer first-visit pilot

Date: 2 October 2026

Status: owner approved the two-pass AI pilot. This is a research protocol, not a release gate or a substitute for human user testing.

## Question and scope

Evaluate the current integrated editorial profile at the Cloudflare review URL, not production. Ask whether a first-time visitor independently infers intellectual authority **and** demonstrated practical success, then assess the supporting design character, clarity, evidence, and navigation. Keep the deeper `/en/media/` archive separate. Do not make code changes or merge the draft PR as part of the pilot.

The four reviewers are fresh-context AI agents. They are not external human participants, cannot reproduce lived experience or meaningful timed first impressions, and cannot establish user-population percentages or accessibility conformance. Their value is an independent, structured editorial/usability critique that helps calibrate a later human study.

## Reviewer independence and audience lenses

Run four agents in isolated turns with no inherited project conversation. Do not show them the site brief, previous critiques, repository, or other reviewers' notes before the cold pass. Each sees only the same opening screenshot and the neutral questions below. After recording that response, provide the live preview and one lens:

1. Public-sector or institutional decision-maker considering strategic advice.
2. Critical-infrastructure or international-development programme lead seeking implementation evidence.
3. International editor or communications professional testing claims and public credibility.
4. Informed non-specialist visitor testing whether the story is intelligible without cyber-sector vocabulary.

These are analytic lenses, not claims that the agents are real people in those roles. Use the same core tasks and rubric for all four. Any lens-specific observations are additional notes, not a different scorecard.

## Two-pass guide

### Pass 1 — unprimed opening

Show only the opening screenshot at a phone width. Ask, without hints:

- Who do you think this person is, and what kind of work do they do?
- What, if anything, suggests that they have made something work in the real world?
- What three words describe the impression, and what is your first doubt or unanswered question?
- What would you expect to find if you continued, and what would you try next?

Capture their wording before sharing the full page, audience lens, or brief. Do not force a five-second claim: AI reading time is not human exposure time.

### Pass 2 — live page and realistic goals

Give the preview URL. Ask each reviewer to inspect it independently, preferably at a mobile width and then a wider viewport. Use these neutral goals, not click instructions:

1. Find one example of applied work. State what was done and what evidence supports its outcome; distinguish the work from a media appearance.
2. Explain, in one sentence, the approach to consequential technology decisions.
3. Find a public interview or article on a relevant topic, then find where a visitor can explore the fuller media record.
4. Decide what question or project you would contact this person about and find how to do so.

Record success, wrong turns, hesitation, unsupported inference, and the page element that caused each. Ask neutral probes such as “What made you think that?” or “What did you expect there?” Do not teach the intended message during a task.

## Rating instrument

Only after the tasks, reveal the site brief. For each dimension, ask for **1–5 or N/A**, one concrete page cue, and one reason. Anchors: **1** absent or contradictory; **2** weak; **3** mixed/partly clear; **4** clear and supported; **5** unmistakable without being overstated. Ratings are prompts for explanation, not measurements to average into a quality score.

| Dimension | What to rate |
| --- | --- |
| Intellectual authority | Does the thinking show command of difficult systems rather than generic expertise claims? |
| Practical success | Can the reviewer identify documented application and a credible result, not just commentary? |
| Strategic clarity | Are cyber, AI and critical systems connected to decisions, institutions and execution? |
| Evidence integrity | Are work, research, interviews and commentary distinguishable, with claims appropriately supported? |
| International experience | Is cross-border work or participation apparent without a logo wall or inflated endorsement? |
| Israel/cyber/innovation provenance | Is the connection credible and present as subtext, without visual cliché or nationalism? |
| Character and tone | Modern, premium, restrained, editorial, warm and confident; precise and discreet rather than boastful, corporate, SaaS-like, influencer-like or overtly military. Ask which two traits are strongest and which are weakest. |
| Narrative use of media | Do images and articles advance the story, or make the page feel like a scattered press gallery? No image-count target. |
| Visitor orientation | Is it clear what the person does, why to trust them, where to find fuller evidence, and how to make contact? |

Additional open question: “What feels slightly enigmatic in a useful way, and what is simply unclear?” This distinguishes intended mystique from missing information.

## Synthesis and decision rule

Publish four individual readouts first, with pass-1 wording, task observations, ratings and cited page cues. Then create a cross-review table of convergences and disagreements. Report counts as “N of 4 AI reviewers in this pilot,” never population percentages. Do not average ratings or treat consensus among agents as validation by real visitors.

Prioritize a revision if at least two reviewers independently miss the central combination of intellectual authority **and** practical application, if a reviewer makes a consequential false inference about client work, or if a task-critical route to evidence/contact fails. A single credible factual or accessibility concern also deserves investigation. Preserve dissenting observations rather than smoothing them into a score.

Recommend a subsequent round with four real prospective visitors if the pilot identifies a promising direction: at least two likely institutional buyers, one international/interdisciplinary peer, and one informed non-specialist or relevant access-needs participant. Recruit for relevant variation, obtain consent, use familiar assistive technology where applicable, and pair sessions with standards-based accessibility checks.

## Method basis

- [GOV.UK: plan user research](https://www.gov.uk/service-manual/user-research/plan-user-research-for-your-service) and [find participants](https://www.gov.uk/service-manual/user-research/find-user-research-participants): small qualitative rounds and relevant participant variation.
- [GOV.UK: moderated usability testing](https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing): realistic tasks and neutral observation.
- [NN/g: testing visual design](https://www.nngroup.com/articles/testing-visual-design/) and [leading questions](https://www.nngroup.com/articles/leading-questions/): separate immediate impressions from prompted judgments.
- [NN/g: qualitative sample sizes](https://www.nngroup.com/articles/how-many-test-users/): do not infer population percentages from four sessions.
- [W3C WAI: involving users](https://www.w3.org/WAI/test-evaluate/involving-users/): include users with access needs; user observation does not establish WCAG conformance.

The fuller source summary is `docs/research/2026-10-02-four-person-first-visit-review.md`.
