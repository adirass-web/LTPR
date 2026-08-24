# Visual tokens

The canonical design direction is in [`REDESIGN_BRIEF.md`](REDESIGN_BRIEF.md). Keep this token list deliberately small.

| Token | Value | Use |
| --- | --- | --- |
| Canvas | `#f7f6f3` | Warm near-white global ground |
| Ink | `#141612` | Primary type and high-contrast UI |
| Muted ink | `#62645f` | Metadata and secondary text |
| Accent | `#02291f` | Functional focus, active state and restrained emphasis |
| Subtle line | `color-mix(in srgb, var(--ink) 16%, transparent)` | Dense archive/resource rows only where scanning benefits |

Whitespace is the default separator. Do not rebuild section boundaries with rules, cards or decorative background changes.
