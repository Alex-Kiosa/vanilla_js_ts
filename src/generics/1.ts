const filterArray = <T>(arr: Array<any>, predicate: (el: T) => boolean): Array<T> => {
    let result: T[] = []

    // variant with classic for
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i])) {
            result.push(arr[i])
        }
    }

    // variant with for of
    // For of cycle allows us to work not only with arrays but also with iterable objects
    for (let num of arr) {
        if(predicate(num)) {
            result.push(num)
        }
    }

    return result
}

function isEven(el: number) {
    return el % 2 === 0
}

function isString(el: any) {
    return true
}

console.log(filterArray([1,2,3,4], isEven))
console.log(filterArray([5,7,3,9], isEven))
console.log(filterArray([[],[],[]], isString))
