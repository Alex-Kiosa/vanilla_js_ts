export const sum = (a: number, b: number) => {
    return a + b;
}

export const multiply = (a: number, b: number) => {
    return a * b;
}

export const splitIntoWords = (sentence: string) => {
    const reg = new RegExp('[.,:;?!-]')

    return sentence.split(" ")
        .filter(w => w !== "")
        .map(w => {
            return w.toLowerCase().replace(reg, "")
        })
}