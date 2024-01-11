import {
    addNewBooks, addNewCompany,
    changeUserHouse,
    madeHairstyle,
    moveUser, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeLaptopToMacbook,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from './10_01'

test('reference type test', () => {
    let user: UserType = {
        name: "Alex",
        hair: 38,
        address: {city: 'Izhevsk', house: 25},
    }

    const awesomeUser = madeHairstyle(user, 2)

    expect(user.hair).toBe(38)
    expect(awesomeUser.hair).toBe(19)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: "Alex",
        hair: 38,
        address: {city: 'Izhevsk', house: 25},
        laptop: {title: "Asus"}
    }

    const movedUser = moveUser(user, 'Alaniya')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Alaniya')
})

test("upgrade laptop to macbook", () => {
    let user: UserWithLaptopType = {
        name: "Alex",
        hair: 38,
        address: {city: 'Izhevsk', house: 25},
        laptop: {title: "Asus"}
    }

    const userWidthMacbook = upgradeLaptopToMacbook(user, 'MacBook Pro')

    expect(user).not.toBe(userWidthMacbook)
    expect(user.address).toBe(userWidthMacbook.address)
    expect(user.laptop).not.toBe(userWidthMacbook.laptop)
    expect(userWidthMacbook.laptop.title).toBe('MacBook Pro')
    expect(user.laptop.title).toBe('Asus')
})

test("change house", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Alex",
        hair: 38,
        address: {city: 'Izhevsk', house: 25},
        laptop: {title: "Asus"},
        books: ['Html', 'Css', 'JS']
    }

    const userCopy = changeUserHouse(user, 34)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(34)
})

test("add new books to user", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Alex",
        hair: 38,
        address: {city: 'Izhevsk', house: 25},
        laptop: {title: "Asus"},
        books: ['Html', 'Css', 'JS']
    }

    const userCopy = addNewBooks(user, ['TS', 'Node JS'])

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[3]).toBe('TS')
    expect(userCopy.books[4]).toBe('Node JS')
    expect(user.books.length).toBe(3)
})

test("update book", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Alex",
        hair: 38,
        address: {city: 'Izhevsk', house: 25},
        laptop: {title: "Asus"},
        books: ['Html', 'Css', 'JS']
    }

    const userCopy = updateBook(user, 'JS', 'TS')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('TS')
})

test("remove book", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Alex",
        hair: 38,
        address: {city: 'Izhevsk', house: 25},
        laptop: {title: "Asus"},
        books: ['HTML', 'CSS', 'JS']
    }

    const userCopy = removeBook(user, 'HTML')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[0]).toBe('CSS')
})

test("add new company", () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: "Alex",
        hair: 38,
        address: {city: 'Izhevsk', house: 25},
        laptop: {title: "Asus"},
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'Coca-Cola'}]
    }

    const userCopy = addNewCompany(user, {id: 3, title: 'Unisender'})

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.companies.length).toBe(3)
    expect(userCopy.companies[userCopy.companies.length - 1].id).toBe(3)
    expect(userCopy.companies[userCopy.companies.length - 1].title).toBe('Unisender')
})

test("update company title", () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: "Alex",
        hair: 38,
        address: {city: 'Izhevsk', house: 25},
        laptop: {title: "Asus"},
        companies: [{id: 1, title: 'Епам'}, {id: 2, title: 'Coca-Cola'}]
    }

    const userCopy = updateCompanyTitle(user, 1, 'EPAM')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('EPAM')
})

test("update company", () => {
    let companies = {
        'Alex': [{id: 1, title: 'Епам'}, {id: 2, title: 'Coca-Cola'}],
        'Mathew': [{id: 1, title: 'Roblox'}, {id: 2, title: 'School'}]
    }

    const copy = updateCompanyTitle2(companies, 'Alex', 1, 'EPAM')

    expect(copy).not.toBe(companies)
    expect(copy['Alex']).not.toBe(companies['Alex'])
    expect(copy['Alex'][0].title).toBe('EPAM')
})