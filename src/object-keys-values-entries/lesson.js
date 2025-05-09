// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4,
// };
//
// let doublePrices = Object.fromEntries(
//     // Преобразуем объект в массив, затем мэпимся, и преобразуем полученный мэпом массив обратно в объект
//     Object.entries(prices).map(([key, value]) => [key, value * 2])
// )


/* Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.*/

// function sumSalaries(obj) {
//     let sum = 0
//     for(let value of Object.values(obj)) {
//         sum += value
//     }
//
//     return sum
// }

/*function sumSalaries(obj) {
    return Object.values(obj).reduce((sum,el) => sum + el, 0)
}*/

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}

function count(obj) {
    return Object.entries(obj).length
}

console.log(count(salaries))