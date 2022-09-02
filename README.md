# Vite + React + TypeScript

This is a template to quickly create a browser project with [Vite](https://vitejs.dev/) + [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/).

## Description

This template is based on the official Vite template for react-ts, the motivation is to avoid creating common configurations for the project.

Right now, the template includes:

- [x] [Vite](https://vitejs.dev/): The next generation front-end tooling.
- [x] [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [x] [TypeScript](https://www.typescriptlang.org/): TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
- [x] [ESLint](https://eslint.org/): The linting utility for JavaScript and JSX.
- [x] [Prettier](https://prettier.io/): An opinionated code formatter.
- [x] [i18Next](https://www.i18next.com/): Internationalization-framework written in and for JavaScript.
- [x] [React i18Next](https://react.i18next.com/): Hooks and components for i18Next built for ReactJs.

## Usage

clone and do `node install` and `npm run dev` to start the development server.

## Configurations

### Vite

No special configuration to vite performed. See [Vite documentation](https://vitejs.dev/config/) for more information.

### React

No special configuration to react performed. See [React documentation](https://reactjs.org/docs/getting-started.html) for more information.

### TypeScript

No special configuration to tsconfig.json performed. See [TypeScript documentation](https://www.typescriptlang.org/docs/home.html) for more information.

### ESLint

See .eslintrc.yml to take a look to the current configuration, also see the [ESLint documentation](https://eslint.org/docs/user-guide/configuring) for customize according to your style.

Prettier takes precedence over ESLint, so if you want to change the rules of Prettier, see the .prettierrc.yml file.

Run `npm run lint` to check the code style.

The eslint verified extension for VSCode is recommended.

### Prettier

See .prettierrc.yml to take a look to the current configuration, also see the [Prettier documentation](https://prettier.io/docs/en/configuration.html) for customize according to your style.

Run `npm run format` to format the code.

The prettier verified extension for VSCode is recommended.

> **Warning**
> eslint-config-prettier is used to avoid conflicts between eslint and prettier. With this approach ESLint won't report style issues that are taken care of by Prettier.

### i18Next and React i18Next

The folder `src/translations` contains the translations files, the default language is Spanish, all the configuration to i18Next and React i18Next is in the file `src/translations/i18next.tsx`.

Each file in `src/translations` except `src/translations/i18next.tsx` represents a component text, see `src/translations/AppText.tsx` to see the translations for the App component located in `src/components/App.tsx`.

## Futures

- [ ] Add React Router

## Contributing

Contributions are welcome, feel free to open an issue or a pull request.

## License

[MIT](https://choosealicense.com/licenses/mit/)
