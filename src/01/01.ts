export const sum = (a: number, b: number) => {
    return a + b;
}

export const mult = (a: number, b: number) => {
    return a * b;
}

export const splitIntoWords = (sentence: string) => {
    const result = sentence
        .toLowerCase()
        .replace(/[^a-za-яё0-9\s]/, '')
        .split(" ")
        .filter(w => w !== '')

    return result
}