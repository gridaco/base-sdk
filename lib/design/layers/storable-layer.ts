
export interface StorableLayer<T> {
    id: string
    name: string
    path: string
    index: number
    data: T
    x: number
    y: number
    width: number
    height: number
}