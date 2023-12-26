type UsersType = {
    [key: string]: { id: number, name: string }
}

export let users: UsersType = {}

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Alex'},
        '134502': {id: 134502, name: 'Dan'},
        '21': {id: 21, name: 'Felix'},
        '4545': {id: 4545, name: 'Ivan'},
    }
})

test("Should update corresponding user", () => {
    // users[134502].name = 'Tanya'
    users[21] = {id: 21, name: 'Felix'}

    // expect(users[134502].name).toBe('Tanya')
    expect(users[21]).toEqual({id: 21, name: 'Felix'})
})

test("Should delete corresponding user", () => {
    delete users[21]

    expect(users[21]).toBe(undefined)
})