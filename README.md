# The Web Guy

This is the official library and portal for my ultimate portfolio.

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

## How to use scripts?

- `npm run format`: Runs Prettier on all files in your project directory and its subdirectories matching the extensions .ts, .tsx, and .md. Also overwrite the file with the proper format (--write flag).
- `npm run lint`: Runs Eslint on all files in your project directory and its subdirectories. Also overwrite the file with the proper format (--fix flag).

### Apps and Packages

- `web-guy-portal`: another [Next.js](https://nextjs.org/) app
- `library-sb`: a stub React component library (storybook) shared by both `web-guy-portal` application
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

## Install packages

From root directory

- Add dependency package globally: `pnpm add -w <package>`
- Add devDependency package globally: `pnpm add -Dw <package>`
- Add devDependency package to specific project: `pnpm add -D <package> --filter <project>`

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

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm run build
```

### Develop

To develop all apps, run the following command:

```
cd my-turborepo
pnpm run dev
```

### Storybook Library

To open the storybook library, run the following commands:

```
cd my-turborepo > cd packages > cd library-sb
npm run storybook
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
pnpm dlx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
pnpm dlx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
