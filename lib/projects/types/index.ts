interface Project {
    id: string
    name: string
    screens: Screen[]
    thumbnail: string
}

interface View {
    id: string
    name: string
    preview: string
    cacheImage: string
}


interface Screen extends View {
    id: string
    name: string
    route: string
}


interface Component extends View {

}