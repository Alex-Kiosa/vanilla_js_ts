import {ClubType, isFoundedBefore1900, makeClubChampion, TransferGoalType} from "../02/02";
import {addTransferGoal} from "./03";

// start data
let club: ClubType
let club2: ClubType
let transferCoal: TransferGoalType

beforeEach(() => {
    club = {
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
            {
                id: 1,
                firstName: 'Owen',
                lastName: "Michael",
                dateBirth: {
                    year: 1979,
                    month: "December",
                    day: 14
                },
                position: 'ST'
            }
        ]
    }
    club2 = {
        name: "Lokomotiv",
        founded: 1942,
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

    transferCoal = {
        id: new Date().getTime(),
        firstName: "Piero Martín",
        lastName: "Hincapié",
        dateBirth: {
            year: 2002,
            month: "January",
            day: 9
        },
        position: "CB"
    }
})

test("new transfer goal should be added", () => {
    // action
    addTransferGoal(club, transferCoal)

    // expect result
    expect(club.transferGoals.length).toBe(3)
    expect(club.transferGoals[2].firstName).toBe("Piero Martín")
    expect(club.transferGoals[2].dateBirth.day).toBe(9)
    expect(club.transferGoals[2].id).toBeDefined()
})

test("club should be made champion", () => {
    expect(club.isChampion).toBe(false)

    makeClubChampion(club)

    expect(club.isChampion).toBe(true)
})

test("club was founded early then 1900 year", ()=> {
    expect(isFoundedBefore1900(club)).toBe(true)
    expect(isFoundedBefore1900(club2)).toBe(false)
})