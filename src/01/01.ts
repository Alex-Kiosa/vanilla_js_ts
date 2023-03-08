export const sum = (a: number, b: number) => {
    return a + b;
}

export const mult = (a: number, b: number) => {
    return a * b;
}

export const splitIntoWords = (sentence: string) => {
    const result = sentence.toLowerCase().split(" ")
        .filter(w => w !== '')
        .map(w => w
            .replace('!', '')
            .replace(',', '')
        )

    return result
}