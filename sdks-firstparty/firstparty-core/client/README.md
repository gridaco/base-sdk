# Client Instance

## How to use

```ts
// wrapped function to initialize client
import { initClient } from "@base-sdk-fp/core";
const tokenclient = createClient({
    accessToken: "...",
});

const browserclient = createClient();

// to use browser secure cookie based client. - works only on dedicated domains. (grida.co, app.grida.co, ..)
import {
    BrowserClient,
    checkIfSecureGridaEnvironment,
} from "@base-sdk-fp/core";
const client = new BrowserClient();

// to use client with issued access token.
import { Client } from "@base-sdk-fp/core";
const client = new Client({
    accessToken: "...",
});
```
