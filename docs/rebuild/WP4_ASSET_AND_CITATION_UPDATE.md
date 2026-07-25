# WP4 — color portrait and citation update

Date: 2026-07-25
Base checkpoint: `f86254c` (`rebuild/astrowind`)

## Decision record

The owner superseded the 2026-07-25 monochrome-portrait requirement. The site now uses the retained color portrait derivatives without modification:

| Page | Component | Ratio | Formats | Loading |
| --- | --- | --- | --- | --- |
| `/en/` | `ColorPortrait.astro` | 2:3 | AVIF, WebP, JPEG | eager/high priority |
| `/en/about/` | `ColorPortrait.astro` | 1:1 | AVIF, WebP, JPEG | lazy |

The color originals and their derived assets are retained. No new portrait asset was generated, edited, recolored, re-encoded, or deleted.

## Google Scholar retrieval

Profile requested: <https://scholar.google.com/citations?user=PnonZSkAAAAJ&hl=en>

Google Scholar’s direct page presented a robot/JavaScript block to the research client. Its indexed profile identifies the author as Lior Tabansky. Publication URLs were cross-checked with the cited publisher, institutional, or author-hosted sources below; Scholar itself is not used as the final outbound destination.

## Verified source map

| Work or source | Final URL | Current use |
| --- | --- | --- |
| *Towards a Theory of Cyber Power* | <https://ccdcoe.org/uploads/2018/10/Art-04-Towards-a-Theory-of-Cyber-Power-the-Israeli-Experience-with-Innovation-and-Strategy.pdf> | Linked on Writing; supports the cyber-power references on Home and About. |
| IEEE Xplore record for *Towards a Theory of Cyber Power* | <https://ieeexplore.ieee.org/document/7529426/> | Retained as the bibliographic record. |
| *Cybersecurity in Israel* | <https://link.springer.com/book/10.1007/978-3-319-18986-4> | Linked as the Writing book link; supports Home and About. |
| World Bank SCMM | <https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099062623085028392> | Linked on Writing; supports the PROGRESS linkage. |
| *PROGRESS: the sectoral approach to cyber resilience* | <https://doi.org/10.1007/s10207-024-00910-3> | Linked on Writing. |
| *Making PROGRESS* | <https://doi.org/10.1080/23738871.2025.2451779> | Linked on Writing. |
| *Incorporating Systems Thinking Into a Cyber Resilience Maturity Model* | <https://doi.org/10.1109/EMR.2020.3046533> | Linked under selected publications. |
| *Can Cyber Intelligence Collection Support Human Rights?* | <https://nationalinterest.org/blog/techland/can-cyber-intelligence-collection> | Linked under selected publications. |
| *Israel Defense Forces and National Cyber Defense* | <https://connections-qj.org/article/israel-defense-forces-and-national-cyber-defense> | Retained in the verified source map. |
| SC Magazine: Israeli cyber-firm funding | <https://insight.scmagazineuk.com/israeli-cyber-firms-raised-billions-in-funding-last-year> | Retained for future Israel-industry writing; not used for a new claim in locked v3 copy. |
| RSAC: Israeli cyber-industry review | <https://www.rsaconference.com/library/blog/the-battle-for-your-computer-israel-and-the-growth-of-the-global-cybersecurity-industry> | Retained for future Israel-industry writing; not used for a new claim in locked v3 copy. |
| Stiennon: Israeli cybersecurity vendors | <https://stiennon.substack.com/p/how-many-cybersecurity-vendors-are> | Retained for future Israel-industry writing; not used for a new claim in locked v3 copy. |

The World Bank’s 2023 SCMM workshop material explicitly describes SCMM as based on TAU’s PROGRESS methodology. The SC Magazine, IEEE, and *Connections* pages blocked automated content retrieval, but the owner supplied their direct URLs; they are retained without extrapolating claims from inaccessible text.

## Release status

This update closes the portrait and citation-URL gates. Native-reviewed Hebrew v3 copy remains the only recorded content gate before production merge and deployment.
