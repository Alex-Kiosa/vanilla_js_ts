export type UserType = {
    name: string
    hair: number
    address: {
        city: string,
        house: number
    }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & { laptop: LaptopType }
export type UserWithBooksType = UserType & {
    books: Array<string>
}
export type CompanyType = {
    id: number
    title: string
}
export type WithCompaniesType = {
    companies: Array<{id: number, title: string}>
}

export function madeHairstyle(u: UserType, power: number) {
    const uCopy = {
        ...u,
        hair: u.hair / power
    }

    return uCopy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
}

export function upgradeLaptopToMacbook(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export function changeUserHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house
        }
    }
}

export function addNewBooks(u: UserWithLaptopType & UserWithBooksType, newBooks: Array<string>) {

    return {
        ...u,
        books: u.books.concat(newBooks)
    }
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return {
        ...u,
        books: u.books.map(b => b === oldBook ? newBook : b)
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, removedBook: string) {
    return {
        ...u,
        books: u.books.filter(b => b !== removedBook)
    }
}

export function addNewCompany(u: UserWithLaptopType & WithCompaniesType, newCompany: CompanyType) {
    return {
        ...u,
        companies: [
            ...u.companies,
            newCompany
        ]
    }
}

export function updateCompanyTitle(u: UserWithLaptopType & WithCompaniesType, companyId: number, newTitle: string) {
    return {
        ...u,
        companies: u.companies.map(c => c.id === companyId ? {...c, title: newTitle} : c)
    }
}

export function updateCompanyTitle2(companies: { [key: string]: Array<CompanyType> },
                                    userName: string,
                                    companyId: number,
                                    newTitle: string) {
    let companiesCopy = {...companies}
    companiesCopy[userName] = [...companiesCopy[userName]].map(c => c.id === companyId ? {...c, title: newTitle} : c)


    return companiesCopy
}