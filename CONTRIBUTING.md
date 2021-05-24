# Contributing

> This is a 1:1 mapping of BASE - Bridged app services from [bridgedxyz/base](https://github.com/bridgedxyz/base).

## Packages directory pattern

we use `_` prefix for excluding from workspace. all other than starting with `_` will be included.

_from root workspace package.json_

```json
...
  "workspaces": [
    "./[!_]*"
  ],
...
```
