type UsersType = {
    [key: string]: { id: number, name: string }
}

// ассоциативный массив
export const users: UsersType = {
    '101': {id: 101, name: 'Alex'},
    '134502': {id: 134502, name: 'Dan'},
    '21': {id: 21, name: 'Felix'},
    '4545': {id: 4545, name: 'Ivan'},
}

const user ={id: 1000, name: "Mathew"}
users[user.id] = user
delete users[user.id] // удаляет моментально быстро, просто затирается ячейка памяти. Сложность алгоритмов O(1)
users[user.id].name = "Zheka"

// обычный массив
export let usersArray = [
    {id: 101, name: 'Alex'},
    {id: 134502, name: 'Dan'},
    {id: 21, name: 'Felix'},
    {id: 4545, name: 'Ivan'},
]

const usersArrayCopy = [...usersArray.filter(e => e.id !== user.id),user]
usersArrayCopy.splice(usersArrayCopy.indexOf(user), 1)