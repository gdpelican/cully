This is an example app for a technical interview.

It's my first time using TypeScript, Next.js and Konva, please be nice! <3

To install dependencies:
```
npm install
```

To run locally:
```
npm run dev
```

To deploy:
```
vercel
```

In order to set up the app to run locally, you'll need to add a `.env.local` file with the following values:

- *NEXT_PUBLIC_API_URL*: The url from which to fetch images from. For this exercise, `https://cully-api.herokuapp.com` was used.
- *NEXT_PUBLIC_PROXY_URL*: In order to compress images clientside, they [must have their CORS origins set](https://stackoverflow.com/questions/9972049/cross-origin-data-in-html5-canvas) to allow cross-domain fetching; we accomplish this by fetching those images through a proxy. For development, I recommend cloning [cors-anywhere](https://github.com/Rob--W/cors-anywhere) and running it locally at `http://localhost:8080`
