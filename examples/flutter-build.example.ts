import { buildAndHostSimpleApp } from "../lib/build/flutter";

buildAndHostSimpleApp({
    dart: "main(){}",
    id: "test-example"
}).then((d) => {
    console.log(d)
})