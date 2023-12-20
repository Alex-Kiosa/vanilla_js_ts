import {ClubType, GovernmentBuilding, HouseType, PlayerMainInfoType} from "../02/02";

export const sum = (a: number, b: number) => {
    return a+b
}

export const addTransferGoal = (club: ClubType, transferCoal: PlayerMainInfoType) => {
    club.transferGoals.push(transferCoal)
}

/*
1. Функция нужна нам для выполнения однотипных действий с разным набором данных. Набор этих данных мы можем передавать в функцию через параметры
2. Функция возвращает undefined, если return не указан явно
*/

export const addMoneyToBudget = (building: GovernmentBuilding, budget: number) => {
    building.budget += budget
}

export const repairHouse = (house: HouseType, happyStreet: string) => {
    house.repaired = true
}

export const toFireStuff = (building: GovernmentBuilding, stuffCountToFire: number) => {
    building.staffCount -= stuffCountToFire
}

export const toHireStuff = (building: GovernmentBuilding, stuffCountToFire: number) => {
    building.staffCount += stuffCountToFire
}