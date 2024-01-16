import React, {useState} from "react";

export type ManType = {
    name: string
    age: number
    lessons: Array<{title: string; name?: string}>
    address: {
        street: {title: string}
    }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

function useStateCustom(value: string) {
    return [value, function () {}]
}

export const Destraction: React.FC<PropsType> = ({title, man, ... props}) => {

    const [value, setValue] = useState('value')

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}</div>
        <div>
            {props.car.model}
        </div>
    </div>
}