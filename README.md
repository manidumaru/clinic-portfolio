# Care 32 Dental

One-page website for Care 32 Dental, Duwakot Mod, Bhaktapur. Next.js 16 · TypeScript · Tailwind CSS v4.

```bash
npm install
npm run dev            # http://localhost:3000
npm run build          # runs check:assets first
npm run lint
npm run format
```

## Where to edit content

Components contain no copy. Change the files below and the page updates.

| What                                                       | File                             |
| ---------------------------------------------------------- | -------------------------------- |
| Clinic name, tagline, address, phones, email, socials, map | `src/constants/clinic.ts`        |
| Navigation links                                           | `src/constants/navigation.ts`    |
| Hero (both variants)                                       | `src/constants/hero.ts`          |
| About                                                      | `src/constants/about.ts`         |
| Services                                                   | `src/constants/services.ts`      |
| Team                                                       | `src/constants/team.ts`          |
| Testimonials                                               | `src/constants/testimonials.ts`  |
| Contact section and form messages                          | `src/constants/contact.ts`       |
| Footer                                                     | `src/constants/footer.ts`        |
| Hero variant, animations on/off                            | `src/config/site.config.ts`      |
| Colours, font, animations                                  | `src/app/globals.css` (`@theme`) |

- **Social icons** only show when their `href` is filled in.
- **Map**: set `mapEmbedUrl` to swap the placeholder card for an embedded Google Map.
- **Sample badges**: set `isSample: false` in `team.ts` / `testimonials.ts` once real profiles and reviews are in.

## Adding images

1. Put the file under `public/images/…` (`hero/`, `about/`, `team/` already exist).
2. Register it in `src/constants/assets.ts` with its real width and height (commented examples are there).
3. Point the content at it, e.g. `photo: ASSETS.team.aaratiShrestha` in `team.ts`, or `photo: ASSETS.hero` in `hero.ts`.

Until an image is set, the design's labelled placeholder is shown. `npm run check:assets` (run automatically before every build) fails if a registered path doesn't exist in `public/`.

## Contact form (EmailJS)

The form sends through [EmailJS](https://www.emailjs.com) straight from the browser (`src/lib/send-message.ts`); validation rules are in `src/lib/contact-schema.ts`.

1. In the EmailJS dashboard, connect an email service (e.g. the clinic's Gmail) and create a template using `{{fullName}}`, `{{phoneNumber}}`, `{{email}}` and `{{message}}`. Set the template's **Reply-To** to `{{email}}` so replies go to the patient.
2. `cp .env.example .env.local` and fill in the service ID, template ID and public key.
3. Restart `npm run dev` (env values are read at build/start time). Set the same variables on your hosting provider.
4. Recommended: under Account → Security, restrict requests to the site's domain.

Without the variables, submitting shows the "something went wrong" message and logs a console error.
