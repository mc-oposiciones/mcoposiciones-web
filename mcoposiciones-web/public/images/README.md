# Image Placeholders

Required dimensions for production assets:

- `maria-carmen.jpg`: 400x400 px. Professional square portrait. Hero/profile image uses `loading="eager"` and `fetchpriority="high"`.
- `og-default.jpg`: 1200x630 px. Default Open Graph image. Also copied to `/og-default.jpg` because `BaseLayout` uses that public URL.
- `logo.png`: 300x80 px. Main logo, stored at `/logo.png`, loaded eagerly in the navbar.

Use Astro's native `astro:assets` `Image` component for local optimized images stored in `src/assets/images/`.
Example:

```astro
---
import { Image } from 'astro:assets';
import mariaCarmenImage from '../assets/images/maria-carmen.jpg';
---

<Image
  src={mariaCarmenImage}
  alt="Mª Carmen, preparadora de oposiciones"
  width={400}
  height={400}
  loading="eager"
  fetchpriority="high"
  format="webp"
/>
```
