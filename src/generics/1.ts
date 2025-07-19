const filterArray = <T>(arr: Array<T>, predicate: (el: T) => boolean): Array<T> => {
    let result: T[] = []

    // variant with classic for
    // for (let i = 0; i < arr.length; i++) {
    //     if (predicate(arr[i])) {
    //         result.push(arr[i])
    //     }
    // }

    // variant with for of
    // For of cycle allows us to work not only with arrays but also with iterable objects
    for (let item of arr) {
        // debugger
        if(predicate(item)) {
            result.push(item)
        }
    }

    return result
}

function isEven(el: number) {
    return el % 2 === 0
}

function hasItemString(el: any[]) {
    let res = el.some((item: any) => typeof item === "string")

    return res
}

console.log(filterArray([1,2,3,4], isEven))
console.log(filterArray([5,7,3,9], isEven))
console.log(filterArray([[1, 2], [null, true, "3"], [4, "", undefined]],
    hasItemString))
