interface View {
    id: string
    name: string
    path: string
    cachedImage: string
}


interface Asset<T> {
    type: "image" | "text" | "illust" | "icon" | "font"
    locales: Array<LocaleAsset<T>>
}

interface LocaleAsset<T> {
    locale: string

    // db -> json
    data: T
}