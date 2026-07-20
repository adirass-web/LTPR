# Art Direction — Field Notes

**Status:** Approved for implementation baseline  
**Date:** 2026-07-20  
**Applies to:** `cyberdrtabansky.com` EN and HE

## The choice

This is a personal authority site for a strategist working at the intersection of defense innovation, AI, and cybersecurity capacity building. Its audience needs to recognize judgement and evidence before it encounters biography or conversion.

The page's job is therefore to make the identity line feel like a considered position, then let institutions, media, and applied work substantiate it. The visual language is a **field-notes register**: calm, exact, and evidence-led. It avoids both consultancy gloss and familiar cyber tropes.

## Direction

### Field Notes

An ink-blue masthead and hero establish gravity without a military aesthetic. The body becomes a cool mineral paper field in which each section is separated by fine, functional rules. A muted brass signal is reserved for the inquiry path, focus states, and a few proof markers. The three real pillars form a numbered register: their order is meaningful and their layout is intentionally not a card grid.

**Signature:** the Home hero reads as the cover of a strategic field note. Its narrow metadata rail and indexed pillar register make the page memorable while keeping the media and institutional proof in charge.

## Token system

| Role | Token | Value | Use |
|---|---|---:|---|
| Ink | `--ink` | `#0c1b29` | Masthead, hero, primary dark surfaces |
| Mineral paper | `--paper` | `#eef0eb` | Main background |
| Warm white | `--paper-bright` | `#f8f8f5` | Reading surfaces and footer text |
| Field line | `--line` | `#c8d0cc` | Dividers and structural rules |
| Slate | `--muted` | `#5f6c75` | Captions and utility text |
| Signal brass | `--signal` | `#b9904d` | Quiet emphasis, focus, and inquiry links |
| Evidence blue | `--evidence` | `#2e6176` | Secondary links and media labels |

Typography uses the platform's editorial serif stack for display and a system sans stack for reading and utility. This intentionally avoids adding a third-party font request or a new dependency before the privacy/deployment decision is made. It remains legible in Hebrew through the existing browser-selected Hebrew fallbacks.

## Layout rules

- The content column is narrow enough to read as analysis, not marketing copy; wide screens gain a restrained metadata rail rather than wider prose.
- Section rules, labels, and captions encode real structure: section type, provenance, and the three ordered pillars.
- Portrait and video remain explicit production slots. The temporary `LT` monogram is a layout stand-in, never a substitute for an approved portrait.
- Logos and press proof remain quiet grayscale evidence. They do not become badges, cards, or a carousel.
- Motion is limited to color/underline feedback. Reduced-motion users receive the same hierarchy without transition effects.
- The system uses logical CSS properties and remains directionally neutral so the Hebrew implementation can inherit it without mirrored physical offsets.

## What this direction excludes

- neon/circuit-board cyber imagery, shields, locks, code rain, and stock military photography;
- sales-site gradients, rounded-card grids, counters, testimonials, and appointment funnels;
- decorative numbering that does not express a real sequence;
- copied press clippings or third-party PDFs;
- visual claims that outpace the factual and rights register.

## Implementation scope

This direction may be implemented now with text and layout placeholders. It does not clear the asset, link, rights, copy-parity, or deployment rows in the source-and-dependency register.
