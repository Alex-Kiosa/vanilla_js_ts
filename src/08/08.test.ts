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
    users['4545'].name = 'Taras'

    expect(users["4545"].name).toBe('Taras')
})

test("Should delete corresponding user", () => {
    delete users['4545']

    expect(users["4545"]).toBe(undefined)
})