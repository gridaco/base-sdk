![base-sdk](../.branding/cover.png)

# BASE SDK `scene-store`

## Installation

```sh
yarn add @base-sdk/scene-store
```

## Usage

```ts
import { SceneStoreService, SceneRecord } from "@base-sdk/scene-store";

const service = new SceneStoreService();

// when authenticated
service.list();
service.register({
    /* ... */
});

const sharedSceneInfo: SceneRecord = await service.getShared("shared-scene-id");
```

## What is BASE?

Base is an opensource firebase alternative for building enterprise level applications. the backend runs on lambda as MSA, and you can self-host it if you want. the backend is available at [gridaco/base](https://github.com/gridaco/base)

## Follow us & Learn more

-   [Grida homepage](https://grida.co)
-   [Grida github](https://github.com/gridaco)
-   [BASE backend](https://github.com/gridaco/base)
-   [Grida on facebook](https://www.facebook.com/grida.co)
-   [Grida on twitter](https://twitter.com/grida_co)
