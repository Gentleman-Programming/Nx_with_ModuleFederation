# Micro Frontend Project with NX and Module Federation

Welcome to this example project that uses nx and module federation to create a micro frontend architecture. in this readme, we will guide you step by step so you can understand how everything works and replicate it in your own projects.

## requirements

- node.js (version 14 or higher)
- bun (installed globally)
- nx (installed globally)

## installation

First, clone the repository and navigate to the project directory:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

then, install the dependencies:

```bash
bun install
```

## project creation

Below are the steps taken to create this project from scratch:

```bash
bunx create-nx-workspace --pm bun hagamos-un-microfront
✔ Which stack do you want to use? · react
✔ What framework would you like to use? · none
✔ Integrated monorepo, or standalone project? · integrated
✔ Application name · first
✔ Which bundler would you like to use? · rspack
✔ Test runner to use for end to end (E2E) tests · none
✔ Default stylesheet format · scss
✔ Which CI provider would you like to use? · skip
✔ Would you like remote caching to make your build faster? · yes
✔ Will you be using GitHub as your git hosting provider? · No

cd hagamos-un-microfront
bun add @nx/react
nx g @nx/react:host apps/shell --remotes=characters
nx g @nx/react:lib libs/shared
nx show project @hagamos-un-microfront
```

## project structure

the project is organized as follows:

```text
.
├── apps/
│   ├── characters/
│   └── shell/
├── libs/
│   └── shared/
├── tools/
├── nx.json
├── package.json
└── tsconfig.base.json
```

- `apps/characters`: micro frontend application that displays a list of characters.
- `apps/shell`: container application that loads the micro frontends.
- `libs/shared`: library shared between the applications.

## module federation configuration

Module federation allows applications to share modules with each other. in this project, we configure module federation in the `module-federation.config.ts` files of each application.

### configuration example

Here's an example of how we configure module federation in `apps/characters/module-federation.config.ts`:

```typescript
import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'characters',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
```

and in `apps/shell/module-federation.config.ts`:

```typescript
import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'shell',
  remotes: ['characters'],
};

export default config;
```

## available scripts

In the `package.json` file, you will find several useful scripts:

- `dev`: starts the shell application.
- `build`: builds both applications and `shared` lib for production.

to start the applications in development mode, run:

```bash
bun run dev
```

## conclusion

I hope this readme has been helpful in understanding how nx and module federation work in creating micro frontends. if you have any questions or suggestions, feel free to open an issue or a pull request.

Happy Coding!

Gentleman
