# Typeface decision

## Selection

- Family: Heebo
- Weight: Regular `400` only
- Delivery: self-hosted through `@fontsource/heebo`
- Fallback: Arial, then the operating system sans-serif

## Rules

- No external font request.
- No additional weights or synthetic bolding.
- English heading tracking is controlled through the layout stylesheet.
- Hebrew receives normal tracking and no uppercase transformation.
- Directional arrows are mirrored only in RTL; names and brand marks are not.
