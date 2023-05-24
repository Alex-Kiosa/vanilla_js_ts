type UsersType = {
    [key: string]: { id: number, name: string }
}

export const users: UsersType = {
    '101': {id: 101, name: 'Alex'},
    '134502': {id: 134502, name: 'Dan'},
    '21': {id: 21, name: 'Felix'},
    '4545': {id: 4545, name: 'Ivan'},
}

const user = {id: 1000500, name: 'Liza'}

users[user.id] = user
delete users[user.id]
users[user.id].name = 'Tanya'

export let usersArray = [
    {id: 101, name: 'Alex'},
    {id: 134502, name: 'Dan'},
    {id: 21, name: 'Felix'},
    {id: 4545, name: 'Ivan'},
]

// usersArray.push(user)
const usersCopy = [...usersArray.filter(e => e !== user), user]
let usersDel = usersArray.filter(e => e !== user)