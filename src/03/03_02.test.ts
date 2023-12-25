import {CityType} from "../02/02";
import {addMoneyToBudget, createMessage, repairHouse, toFireStuff, toHireStuff} from "./03"

let city: CityType

beforeEach(() => {
    city = {
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
})

test("Budget should be changed for HOSPITAL", () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);

    expect(city.governmentBuildings[0].budget).toBe(300000)
})

test("Budget should be changed for FIRE-STATION", () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000)

    expect(city.governmentBuildings[1].budget).toBe(400000)
})

test("Houses should be repaired", () => {
    repairHouse(city.houses[1], "Happy street")

    expect(city.houses[1].repaired).toBe(true)
})

test("Stuff should be increased", () => {
    toFireStuff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test("Stuff should be fired", () => {
    toFireStuff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test("Stuff should be hired", () => {
    toHireStuff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(220)
})

test("Greeting should be correct", () => {
    expect(createMessage(city)).toBe("Hello New Castle citizens! In our city live 10000000")
})