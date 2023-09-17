# The Web Guy

This is the official library and portal for my ultimate portfolio.

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

## How to use it?

1. Create an account in [Contentful](https://www.contentful.com/) 
2. Go to Setting > API Keys and create one
3. Create an .env file in the root of your app `./app/<APP_PORTAL_NAME>/`
4. Add these three variables from your Contentful APY Keys:
```
VITE_CONTENTFUL_ENV=
VITE_CONTENTFUL_SPACE_ID=
VITE_CONTENTFUL_DELIVERY_TOKEN=
```
### Storybook

- If you want to develop your components in isolation, take the Button.stories.ts file as an example.

### Versioning (CI)

- Go to your repository settings > Actions > General
- In Workflow permissions check Read and write permissions (in case your pipe creates some file)
- Also check Allow Github Actions to create and approve pull requests
- Create an NPM Account
- Verify your account with 2FA
- Go to Access Token and create a new one and select the type Publish
- In your repository add a secret NPM_TOKEN and add the access token created
- Before you add changes to your main branch run the following command:
```
npx changeset
```
- Commit your changes and the release workflow detect when the main branch is being pushed
- After that it will create a PR that you need to confirm if everything is alright
## How to use scripts?

- `npm run build`: Runs the build script in every package or app that you have in your monorepo.
- `npm run dev`: Runs the dev script in every package or app that you have in your monorepo.
- `npm run lint`: Runs Eslint on all files in your project directory and its subdirectories. Also overwrite the file with the proper format (--fix flag).
- `npm run format`: Runs Prettier on all files in your project directory and its subdirectories matching the extensions .ts, .tsx, and .md. Also overwrite the file with the proper format (--write flag).
- `publish-packages`: It run when the workflow release-version trigger

## Apps and Packages

- `web-guy-portal`: another [Next.js](https://nextjs.org/) app
- `library-sb`: a stub React component library (storybook) shared by both `web-guy-portal` application
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

## Commands
### Install packages

From root directory

- Add dependency package globally: `pnpm add -w <package>`
- Add devDependency package globally: `pnpm add -Dw <package>`
- Add devDependency package to specific project: `pnpm add -D <package> --filter <project>`

### Usefull Commands

- `contentful space export --environment-id <env_source> --content-file migrate-file.json`: Runs contentful-cli to export environment's data into a json file.
- `contentful space import --environment-id <env_target> --content-file migrate-file.json`: Runs contentful-cli to import environment's data from json file into contenful environment.

### Storybook Library

To open the storybook library, run the following commands:

```
cd <ROOT_FOLDER_NAME> > cd packages > cd library-sb
npm run storybook
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd <ROOT_FOLDER_NAME>
pnpm dlx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
pnpm dlx turbo link
```

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Storybook](https://storybook.js.org/) for components building
- [CommitLint](https://commitlint.js.org/#/) for add a commit convention
- [Prettier](https://prettier.io/) for formatting the code
- [Husky](https://typicode.github.io/husky/#/) for adding hooks
- [Tailwind](https://tailwindcss.com/) utility-first CSS framework

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
- [Use react-router-dom with Storybook](https://storybook.js.org/addons/storybook-addon-react-router-v6)
- [Workflow example repository changesets](https://github.com/changesets/changesets/actions/runs/5387436747/workflow)
