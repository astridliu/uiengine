# UIengine

A pattern library generator that gets out of your way.

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Documentation

- [Configuration](./docs/config.md)
- [Adapters](./docs/adapters.md)
- [Component](./docs/component.md)
- [Variation](./docs/variation.md)
- [Theme](./docs/theme.md)
- [YAML](./docs/yaml.md)

## Development

### Setup

```bash
yarn install
```

### Tests

```bash
yarn test
```

With coverage info:

```bash
yarn run cover
```

Basic linting:

```bash
yarn run lint
```

### Build

```bash
yarn run build
```

### Release

```bash
yarn run test && yarn run build
npm version VERSION
npm publish
```

### Public functions

- Are always `async`
- First argument is always the state

## Alternatives

- http://fractal.build/
- https://fbrctr.github.io/
