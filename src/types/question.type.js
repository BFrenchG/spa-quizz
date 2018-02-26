//@flow
export type Question = {
    title: string,
    options: Array<{id: number, option: string}>,
    answerId: number,
    selected: number
}