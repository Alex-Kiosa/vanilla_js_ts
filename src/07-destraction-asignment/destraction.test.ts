import {ManType} from "./Destraction";

let props: ManType

beforeEach(()=>{
    props= {
        name: "Alex",
        age: 35,
        lessons: [{title: "1"}, {title: "2"}, {title: "3", name: "react"}],
        address: {
            street: {
                title: "Free"
            }
        }
    }
})

test("", () => {
    const {age, lessons, ...restProps} = props
    // Движок js пробежится по верхнему уровню свойств объекта props (не полезет внутрь). Деструктурирует этот объект и найдет там свойства с ключами, которые мы указали в фигурных скобках и присвоит значения этих свойств переменным age и lessons

    expect(age).toBe(35)
    expect(lessons[0].title).toBe("1")
})

test("", () => {
    // const l1 = props.lessons[0];
    // const l2 = props.lessons[1];

    const [,l2] = props.lessons
    // деструктурирующее присваивание в массиве подходит только для тех случаев, когда мы точно знаем количество и порядок элементом массива

    const [l1, ...restLessons] = props.lessons

    // expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")
    expect(l1.title).toBe("1")
    expect(restLessons.length).toBe(2)
    expect(restLessons[1].name).toBe('react')

    expect(restLessons[1]).toStrictEqual({name: "react", title: "3"})
})
