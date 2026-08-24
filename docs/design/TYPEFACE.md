# Typeface decision

## Selection

- English: **IBM Plex Sans**
- Hebrew: **IBM Plex Sans Hebrew**
- Weights: Regular `400` and Medium `500`
- Delivery: self-hosted through Fontsource packages
- Fallback: Arial, then the operating-system sans-serif

## Rules

- No external runtime font request.
- Do not add weights unless a demonstrated design need survives review.
- Do not use synthetic bolding.
- Latin display tracking is modest; do not recreate the previous extreme negative tracking.
- Hebrew receives natural tracking and uses the dedicated Hebrew family.
- Shared components use logical properties and semantic DOM order.
- Directional indicators mirror only when their meaning is directional; names, images and brand marks do not.
- Mixed-script strings use appropriate language/direction markup or bidi isolation where necessary.
