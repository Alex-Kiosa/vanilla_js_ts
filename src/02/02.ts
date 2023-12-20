export type DateBirthType = {
    year: number
    month: string
    day: number
}
export type PlayerMainInfoType = {
    id: number
    firstName: string
    lastName: string
    dateBirth: DateBirthType
    position: string
}
export type TransferGoalsType = [PlayerMainInfoType]
export type ClubType = {
    name: string
    founded: number
    isChampion: boolean
    coach: any // refactor
    transferGoals: TransferGoalsType

}
export const club = {
    name: "Liverpool",
    founded: 1892,
    isChampion: false,
    coach: {
        name: "Jurgen Klopp",
        isMain: true,
        "last clubs": [
            {
                id: 0,
                name: "FSV Mainz 05",
            },
            {
                id: 1,
                name: "Dortmund",
            }
        ]
    },
    transferGoals: [
        {
            id: 1,
            firstName: 'Mane',
            lastName: "Sadio",
            dateBirth: {
                year: 1992,
                month: "April",
                day: 10
            },
            position: 'CF'
        },
    ]
}
export const makeClubChampion = (club: ClubType) => {club.isChampion = true}
export const isFoundedBefore1900 = (club: ClubType) => club.founded < 1900

export type StreetType = {title: string}
export type AddressType = {
    number: number
    street: StreetType
}
export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}
export type GovernmentBuilding = {
    type: string,
    budget: number
    staffCount: number
    address: {street: StreetType}
}
export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuilding>
    citizensNumber: number
}

export const city = {
    title: "New Castle",
    houses: [
        {
            buildedAt: 2012,
            repaired: false,
            address: {
               number: 100,
               street: {title: "White street"}
            }

        },
        {
            buildedAt: 2008,
            repaired: false,
            address: {
                number: 100,
                street: {title: "Happy street"}
            }

        },
        {
            buildedAt: 2020,
            repaired: false,
            address: {
                number: 101,
                street: {title: "White street"}
            }

        }
    ],
    governmentBuildings: [
        {
            type: "HOSPITAL",
            budget: 200000,
            staffCount: 200,
            address: {
                street: {title: "Central street"}
            }
        },
        {
            type: "FIRE-STATION",
            budget: 500000,
            staffCount: 1000,
            address: {
                street: {title: "South street"}
            }
        }
    ],
    citizensNumber: 10000000
}