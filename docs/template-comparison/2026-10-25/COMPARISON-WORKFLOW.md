# Controlled template comparison

1. Choose one page and freeze a content subset by block IDs plus asset IDs. For the media page, agree how the later reported exclusions affect the baseline before scoring candidates. Use exactly the same subset in every candidate.
2. Make three temporary static prototypes outside the production source tree. Suggested starting points: Bootstrap examples, daisyUI components, and shadcn/ui blocks. Choose only components actually needed; avoid adding a framework just to render a static card.
3. Change grid, spacing, type scale, colors, image proportions and navigation treatment. Keep words, factual hierarchy, links, image identity and approval labels constant. List any suggested copy change separately, with exact before/after text.
4. Capture matching 1440×900 and 390×844 views. Check text wrapping, image crops, source-link usability, keyboard focus, overflow and missing images. Use static imagery until motion is explicitly approved.
5. Compare authority, distinctiveness, evidence clarity, reading comfort and mobile usability. Record owner preference and reasons. Avoid choosing by visual novelty alone.
6. Only after selection, map the preferred design into the Astro project and review production changes separately.

# Free tools, components and limits

License checks for the four repositories below were read through GitHub's license API on 25 October 2026. Preserve license notices; verify the exact version used. No third-party template or model was downloaded into this pack.

| Option | Suitable use | License/cost boundary |
| --- | --- | --- |
| [Bootstrap examples](https://getbootstrap.com/docs/5.3/examples/) / [repository](https://github.com/twbs/bootstrap) | Fast static page layouts and grids | Core code MIT, verified via repo license API. Example code comes from that project; separately sourced images, documentation and external themes can have different terms. Commercial marketplace themes are not included. |
| [daisyUI](https://github.com/saadeghi/daisyui) | Tailwind component and theme comparisons | Core repository MIT, verified. Premium templates/products are separate; do not assume every item on its website is free. |
| [shadcn/ui](https://github.com/shadcn-ui/ui) | Editable component/block compositions | Repository MIT, verified. Third-party block collections can have separate licenses. React tooling adds setup cost; use only if it benefits the comparison. |
| [Ollama](https://github.com/ollama/ollama) | Run a locally available model to rearrange fixed content | Runner MIT, verified. Model weights have their own licenses and hardware requirements. No hosted inference credits included; this cloud machine's model capacity has not been checked. |

LLM choices: use the existing Codex account for the first comparison to avoid another integration; its plan/usage limits apply and it is not represented as a free service. ChatGPT or Gemini consumer free tiers may be alternatives when offered to the user, but availability, quotas and upload limits change by account/region. Their APIs are separate products; do not assume free API credits. A local model through Ollama avoids per-request hosted charges but uses hardware and remains subject to its model license. Use the same prompt and frozen pack across models. No paid subscriptions, API calls, model downloads or account changes are required by this workflow.
