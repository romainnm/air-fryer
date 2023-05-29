export interface ICookingCard {
    id?: number,
    name: string,
    time: number,
    temperature: number,
    rack: boolean,
    mode: string,
    numbBasket: number,
    showList?: boolean
}