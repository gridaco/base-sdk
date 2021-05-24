
export interface IImageRepository<A> {
    images: Map<string, A>

    makeTransportable: () => {}
}