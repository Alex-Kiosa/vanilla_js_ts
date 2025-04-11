// Function constructors, Class.
// Функции конструкторы используют для создания однотипных объектов

// const car1 = {
//     brand: 'bmw',
//     maxSpeed: 200,
//     startEngine() {
//         console.log(`${this.brand} engine is started`)
//     },
// }
//
// const car2 = {
//     brand: 'audi',
//     maxSpeed: 220,
//     startEngine() {
//         console.log(`${this.brand} engine is started`)
//     },
// }


// Method 1

function createCar(brand, maxSpeed) {
    const car = {
        brand,
        maxSpeed,
        startEngine() {
            console.log(`${this.brand} engine is started`)
        }
    }

    return car
}


// Имя функции конструктора должно начинаться с большой буквы. Общепринятая практика, чтобы было понятно, что данную функцию нужно вызывать с помощью оператора new
// function CarCreator(brand, maxSpeed) {
//     this.brand = brand
//     this.maxSpeed = maxSpeed
//     this.startEngine = function () {
//         console.log(`${this.brand} engine is started`)
//     }
// }
//
// // Создание экземпляров класса
// const bmw = new (CarCreator)('bmw', 200)
// const fiat = new (CarCreator)('fiat', 180)
//
// console.log(bmw)
// console.log(fiat)

/*
Когда функция вызывается как new CarCreator(...), происходит следующее:

Создаётся новый пустой объект, и он присваивается this.
Выполняется тело функции. Обычно оно модифицирует this, добавляя туда новые свойства.
Возвращается значение this.
Другими словами, new CarCreator(...) делает что-то вроде:

function CarCreator(brand, maxSpeed) {
    // this = {};  (неявно)

    // добавляет свойства к this
    this.name = brand;
    this.maxSpeed = maxSpeed;
    this.statEngine = function () {
        console.log(`${this.brand} engine is started`)
    }

    // return this;  (неявно)
}


но если мы так напишем - то проблема сохранится, каждый экземпляр, создаваемый с помощью нашей функции конструктора - будем иметь свою, собственную, функцию startEngine(), чтобы решить данную проблему - мы должны записывать эту функцию, в prototype функции конструктора:

*/

// function Calculator(){
//     this.read = function () {
//         // @ts-ignore
//         this.num1 = +prompt("первое число", 0)
//         // @ts-ignore
//         this.num2 = +prompt("второе число", 0)
//     }
//
//     // @ts-ignore
//     this.sum = function () {
//         return this.num1 + this.num2
//     }
//
//     // @ts-ignore
//     this.mul = function () {
//         return this.num1 * this.num2
//     }
// }

//
// let calculator = new Calculator();
// calculator.read()
//
// alert("Sum=" + calculator.sum())
// alert("Mul=" + calculator.mul())

// function Accumulator(startingValue) {
//     this.value = startingValue
//     this.read = function () {
//        this.value += +prompt("Сколько нужно добавить", 0)
//     }
// }
//
// let accumulator = new Accumulator(1)
// accumulator.read()
// accumulator.read()
// alert(accumulator.value)