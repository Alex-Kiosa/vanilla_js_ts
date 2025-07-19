const mapArray = <T, U>(arr: T[], transform: (el: T) => U): U[] => {
    let result: U[] = []

    for (const item of arr) {
        result.push(transform(item))
    }

    return result
}

// Пример 1: Преобразование чисел в строки
const numbers_2 = [1, 2, 3, 4]
const transformNumberToString = (num: number) => `Number: ${num}`

const result = mapArray(numbers_2, transformNumberToString)
console.log(result)

// Пример 2: Преобразование строк в их длины
const words = ['hello', 'world', 'typescript']
const getLength = (word: string) => word.length

const lengthResults = mapArray(words, getLength)
console.log(lengthResults)

// Пример 3: Преобразование объектов в строки
type Person = { name: string; age: number }
const people: Person[] = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
]
const toDescription = (person: Person) => `${person.name} is ${person.age} years old`

const descriptions = mapArray(people, toDescription)
console.log(descriptions)