/* Три состояния промиса
* 1. Pending. Пока промис находится в этом состоянии интерпретатор js не обращает на него внимание
* 2. Fulfilled. Если все ок
* 3. Rejected. Если произошла ошибка
* */

// Пример реализации промиса внутри какой-то библиотеки
// const server = {
//     getData() {
//         // В промис закидываем callback, который принимает две функции в качестве параметров. Логика этих функции инкапсулирована внутри промиса и направлена на работу с объектом, который он возвращает
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve('success')
//             }, 2000)
//
//         })
//     }
// }

// Использование промиса в реальном проекте. Просто вызываем метод, который вернет нам объект промис
// const promise = server.getData()

// метод then() срабатывает, когда зарезолвится наш промис
// promise
//     .then((data) => {
//         console.log('Then1 ', data)
//         return 10
//     })
//     .then((data, dara) => {
//         console.log('Then2 ', data)
//         throw new Error("Oops error")
//     })
//     .then((data) => {
//         console.log('Then3 ', data)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log('Finally ')
//     })

// метод catсh() срабатывает, после срабатывания метода reject()
// promise.catch((error) => {
//     console.log('Catch', error)
// })

// Отрабатывает всегда. Используется, если нужна одна и та же логика, которая выполняется и в случае resolve(), и в случае reject()
// promise.finally('Finaly')


// Пример собственной реализации промиса
function NewPromise(callback) {
    // если все окей вызываем resolve()
    const resolve = (result) => {
        return {
            state: 'fulfilled',
            result: result
        }
    }

    // в случае ошибки вызываем reject()
    const reject = (error) => {
        return {
            state: 'rejected',
            result: error
        }
    }

    callback(resolve, reject)
}


// Пример реализации логики чтения файла с диска
/*
const fs = require('fs')

const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (error, file) => {
            if (error) {
                reject(error)
            } else {
                resolve(file)
            }
        })
    })
}

// Предположим разработчик пользуется нашей библиотекой. Он импортирует функцию, которая возвращает промис
const promise_2 = readFile('./index.js')
*/

// Написать функцию delay(ms), которая возвращает promise,
// переходящий в состояние "resolved" через ms миллисекунд.

// function delay(time) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, time)
//     })
// }
//
// delay(1000).then(() => alert("Hello"))

function go() {
    // showCircle(150, 150, 100, div => {
    //     div.classList.add('message-ball');
    //     div.append("Привет, мир!");
    // });

    showCircle(150, 150, 100).then( div => {
        div.classList.add('message-ball');
        div.append("Привет, мир!");
    });
}

function showCircle (cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    return new Promise((resolve) => {
        setTimeout(() => {
            div.style.width = radius * 2 + 'px';
            div.style.height = radius * 2 + 'px';

            div.addEventListener('transitionend', function handler() {
                div.removeEventListener('transitionend', handler);
                resolve(div);
            });
        }, 0);
    })
}
