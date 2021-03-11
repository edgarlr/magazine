# Online Magazine Starter Kit

#### Live demo: [https://magazine-starter.vercel.app](https://magazine-starter.vercel.app)

This starter allows you to clone and deploy a fully customizable Online Magazine in just a few clicks.

<p align="center">
  <img src="https://res.cloudinary.com/dliiwavlg/image/upload/v1615423117/magazine_he7vqh.png" width="450px" />
</p>

## Features

- Great performance
- SEO and Social Media friendly
- Responsive
- UI Components
- Dark and light theme
- Offline support
- Save articles to read offline
- PWA Optimized (installable)
- Preview unpublished content.
- Search module and hooks.
- Static Site Generated with Next.js
- Dynamically generated sitemap
- Content creation and managment from Strapi CMS (No code necessary).

## Built with:

- Framework: [Next.js](https://nextjs.org)
  - [TypeScript](https://nextjs.org/docs/basic-features/typescript)
  - [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support)
  - [Tailwind](https://tailwindcss.com/docs)
- CMS: [Strapi](https://strapi.com)
- Other features
  - [Service Worker](https://developers.google.com/web/fundamentals/primers/service-workers) for offline support.
  - [IndexedDB](https://developers.google.com/web/ilt/pwa/working-with-indexeddb) for save articles.

## Integrations

This project integrates out-of-the-box with [Magazine Strapi CMS](https://github.com/edgarlr/magazine-api).

## Getting started

Create your own copy of this project by clicking the ["Use this template"](https://github.com/edgarlr/magazine/generate) button and filling the form.

### Running locally

First, you'll need to have the [Magazine Strapi CMS](https://github.com/edgarlr/magazine-api) running at [http://localhost:1337](http://localhost:1337). You can follow the instructions on that repo to set it up and get it running.

Then, create a folder and `git clone` from your copy of this repository.

Install the dependencies and start the dev server.

```bash
  yarn install
  yarn dev
```

The dev server will run on [http://localhost:3000](http://localhost:3000). If it doesn't work make shure that:

- You've added sample data to Strapi (Contributors, categories and articles are necessary)
- You've set the Roles & Permissions to `find`on Contributors, Categories, articles and pages. (More info on [Magazine Strapi CMS](https://github.com/edgarlr/magazine-api) running locally instructions.)
- You've set the `status` of each article and page to be `published`

### Preview mode

To try it, create another post but before you set the status to published:

- Set each variable from the `.env.example` into a new file called `.env.local`:
  - `PREVIEW_SECRET`: can be any string (avoiding spaces). You're are gonna use it later on your CMS too.
  - `API_URL`: should be set as `http://localhost:1337`(no trailing slash).
- On your Strapi admin panel go to "Settings" > "Preview Content"
- Fill the input with your info, the URL should look like this. `http://localhost:1337/api/:contentType-preview?secret=<your-secret>&id=:id`
- Last, go to any article or page and click the "Preview" button

## Deployment

You'll need to deploy your Strapi CMS first and have your api URL.

Click this button below to clone and deploy this project on [vercel](https://vercel.com).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fedgarlr%2Fmagazine&env=API_URL,PREVIEW_SECRET&envDescription=API%20Keys%20needed%20for%20your%20app%20and%20the%20preview%20mode&envLink=https%3A%2F%2Fgithub.com%2Fedgarlr%2Fmagazine%23preview-mode&project-name=magazine&repo-name=magazine&demo-title=Magazine&demo-description=Online%20Magazine%20Starter%20Kit%20using%20Next.js%20and%20Strapi%20CMS&demo-url=https%3A%2F%2Fmagazine-starter.vercel.app&demo-image=https%3A%2F%2Fres.cloudinary.com%2Fdliiwavlg%2Fimage%2Fupload%2Fv1613284152%2FScreen_Shot_2021-02-14_at_0.27.57_s3ohzu.png)

Or you can check the docs to [deploy Next.js](https://nextjs.org/docs/deployment).

Don't forget to update your environment variables:

- `PREVIEW_SECRET`: Can be any string (avoiding spaces). It must be same as on your CMS.
- `API_URL`: URL of your strapi backend. (No trailing slash).

## Customize

### Constants and default SEO

`lib/constants.ts` contains a list of variables you should customize

### Icons and favicon

`public/static/favicon` contains all the icons and favicons. I generated the icons on [https://realfavicongenerator.net](https://realfavicongenerator.net). Generate your own and replace the old ones.

You need to generate the dark mode icons too and name them as `dark-16x16.png` and `dark-32x32.png`

### Sitemap

The sitemap will be generated dynamically using the `lib/constants` info but you need to also configure the site URL on `public/robots.txt`

### Search caveats

Due heroku sleep problem the search hook is really slow. If you're gonna deploy the strapi cms to any platform other than heroku you can uncomment the seach hook and it should work fine. Otherwise, to prevent a slow search, the page will be statically genarated with **ALL** the published articles and run a local search instead.

## License

[MIT License](https://github.com/edgarlr/magazine/blob/main/LICENSE).
