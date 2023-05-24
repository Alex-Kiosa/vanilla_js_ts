import {log} from "util";

const student = {
    name: "John",
    age: 34,
    height: 182,
    weight: 78,
    isActive: true,
}

const club = {
    name: "Liverpool",
    "date of birth": 1892,
    isActive: true,
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
    }
}

console.log(club.name)
console.log(club["date of birth"])
console.log(club.coach["last clubs"][1].name)