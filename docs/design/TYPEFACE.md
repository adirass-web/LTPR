# Typeface decision

## Selection

- Family: Heebo
- Weights: Regular `400` and Medium `500`
- Delivery: self-hosted through `@fontsource/heebo`
- Fallback: Arial, then the operating system sans-serif

## Rules

- No external font request.
- Use Medium only for compact navigation and labels. Keep display and body typography Regular.
- English heading tracking is controlled through the layout stylesheet.
- Hebrew receives normal tracking and no uppercase transformation.
- Directional arrows are mirrored only in RTL; names and brand marks are not.
