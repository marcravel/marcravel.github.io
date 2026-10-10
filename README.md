# Engineering Portfolio

Personal engineering portfolio for Marc Ravelontsalama, focused on embedded
systems, firmware, electronics, PCB design, robotics, and control.

Live site: <https://marcravel.github.io/>

## Tech stack

- Astro 5 static site
- TypeScript and Astro components
- Plain CSS with Bootstrap-inspired utility classes
- `@astrojs/sitemap`
- GitHub Pages deployment through GitHub Actions

## Repository structure

```text
src/
  assets/                 Source assets processed by Astro
  components/             Reusable cards and page sections
  data/projects.json      Localized project records
  i18n/ui.ts              Shared language names, translations, and routes
  layouts/BaseLayout.astro Shared document shell and SEO metadata
  pages/                  EN, FR, and TR route entrypoints
  styles/global.css       Global styles and utility classes
  types/project.ts        Project and locale types
public/
  docs/                   CV and localized project descriptions
  img/projects/           Project images
  robots.txt              Sitemap discovery for crawlers
  social-preview.jpg      Local Open Graph/Twitter preview image
.github/workflows/        GitHub Pages deployment workflow
astro.config.mjs          Root URL, locales, and sitemap configuration
package.json              Scripts and dependencies
```

## Commands

```sh
npm install
npm run dev
npm run build
npm run preview
```

`npm run dev` starts the local development server. `npm run build` creates the
static site in `dist/`, and `npm run preview` serves that build locally.

## Deployment

The `Deploy to GitHub Pages` workflow runs on pushes to `main` and on manual
dispatch. It uses `withastro/action` to build the site and
`actions/deploy-pages` to publish it.

This is the `marcravel.github.io` user site, so `astro.config.mjs` sets
`site` to `https://marcravel.github.io` and does not define a `base` path.

## Internationalization

English is the default locale and has no URL prefix:

```text
/             English
/fr/          French
/tr/          Turkish
```

Shared navigation translations and locale-aware path helpers live in
`src/i18n/ui.ts`. Page-specific EN/FR/TR copy lives beside each page component
in `src/components/pages/`.

## Editing content

- `src/data/home.json` contains the localized home hero copy.
- `src/data/about.json` contains the localized bio, skills, education,
  experience, courses, community entries, and spoken languages.
- Every editable field in these files must include `en`, `fr`, and `tr`.
- Add an experience, course, or skill by appending its object or name while
  preserving the existing order and field shape.
- Projects remain in `src/data/projects.json`; see the Projects section below.

## Projects

Projects are defined in `src/data/projects.json`. To add or edit one:

- Set `active` to `1` to publish it, or `0` to keep it hidden.
- Keep `slug` unique; it becomes the detail-page URL.
- Keep local image paths without a leading slash, for example
  `img/projects/example/hero.jpg`. Files belong under `public/`.
- Keep the source path in `projects.json`; active project images are served
  from generated `.webp` derivatives, with `-thumb.webp` files used for
  gallery thumbnails.
- Provide localized `category`, `title`, and `description` fields for `en`,
  `fr`, and `tr`.
- Add an optional localized `achievements` object, `gallery` array,
  `youtubeId`, and `image` as needed.
- For long localized descriptions, use `.txt` files under `public/docs` and
  reference them without a leading slash, for example
  `docs/example_fr.txt`.

Active projects are rendered on the home and projects pages and receive
localized detail routes. Inactive records remain available for later
publication.

## SEO

`src/layouts/BaseLayout.astro` renders page titles, descriptions, canonical
URLs, Open Graph and Twitter metadata, locale alternates, and the document
language. `@astrojs/sitemap` generates the sitemap during the build.
`public/robots.txt` points crawlers to the sitemap, and the homepage includes
Person JSON-LD structured data. `public/social-preview.jpg` is the local
social-preview image used by Open Graph and Twitter metadata.

## Conventions

- Keep local public asset paths relative and without a leading slash.
- Add copy in all three supported locales when editing localized content.
- Prefer existing project data and shared helpers over duplicated route logic.
- Keep inactive projects at `active: 0` until their detail content is ready.
- Run `npm run build` before deployment.
