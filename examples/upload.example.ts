import { upload } from "../lib/hosting";
import * as fs from "fs"
// const file = fs.createReadStream('../example/example-file.txt')
try {
    upload({
        file: {
            buffer: Buffer.from('content'),
            originalname: "test.txt"
        },
        name: "test.txt",
    }).then((d) => {
        console.log(d)
    })
} catch (e) {
    console.log(e)
}
