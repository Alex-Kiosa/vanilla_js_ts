let numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9
]

function binarySearch(numList: Array<number>, targetNum: number) {
    let foundIndex = -1
    if (targetNum > numList.length - 1) {
        return foundIndex
    }

    let mid = Math.floor(numList.length - 1 / 2)
    if (targetNum === numList[mid]) {
        return
    }
}

function linearSearch(numList: Array<number>, targetNum: number) {
    for (let i = 0; i < numList.length; i++) {
        if (targetNum === i) {
            return i;
        }
    }

    return -1;
}

// console.log(linearSearch(numbers, 8))
// console.log(binarySearch(numbers, 5))

function compareEmails(emailsArray: Array<string>, email: string) {
    return emailsArray.find((i) => i.toLowerCase() === email.toLowerCase())
}

const emailsBase = ['centr-psihologii@yandex.ru','evgeniya291080@mail.ru','dariro@mail.ru','oliakrav4uk@yandex.ru','larina_olya@mail.ru','iriina77@inbox.ru','pmv-75@ya.ru','askovrigas@gmail.com','lelya.ivanova.66@mail.ru','mishei.net@yandex.ru','nowistheknowing@yandex.ru','golodovaalmira@mail.ru','contcerita@mail.ru','al-vic@mail.ru','yusik3377@mail.ru','ponomareva_eka@mail.ru','psyhelp11@gmail.com','afina.x@mail.ru','Pilik70@mail.ru','angri86@mail.ru','mirasana97@gmail.com','angelok8909@mail.ru','natah2004@mail.ru','salnalex2016@gmail.com','Stepankina.marina@yandex.ru','aktiv.arenda@yandex.ru','elt-ui@mail.ru','rdubenchuk25@mail.ru','2069800@mail.ru','romanyk-pochta@mail.ru','ev.ps2019@gmail.com','kravsve@gmail.com','tv-kazakova55@mail.ru','volgaftv@mail.ru','ampleeva-v@mail.ru','bernador@rambler.ru','olga-stremilova@yandex.ru','Lena.bogatyreva@mail.ru','lelya.ivanova.66@mail.ru','inneskanikiforova@mail.ru','kovala.anna@yandex.ru','Anna-values@yandex.ru','elina.batyrina1000@mail.ru','Mukhtarova.karina.cursos@gmail.com','89272450412@mail.ru','kalinu-anna@yandex.ru','evgeniyaal87@mail.ru','Zlatoust17@mail.ru','krasotka_nf@bk.ru','Kalashnicova_mv@mail.ru','elenalub1969@gmail.com','4578858@mail.ru','lihaay.info@gmail.com','olgabekasova73@gmail.com','oles332278@mail.ru','Remizova130412@gmail.com','papatyared@gmail.com','al_imanova@mail.ru','bgoamoscow@yandex.ru','oliakrav4uk@yandex.ru','natalja.granko@yandex.ru','tanka79_79@mail.ru','Burduk-E-L@yandex.ru','Larionovanata@mail.ru','yuliatatarnikowa@yandex.ru','korolewata65@mail.ru','n-tatvik@mail.ru','lapinett@mail.ru','me@strunkova.ru','Kissarnn@mail.ru','Natal-Greeg@mail.ru']

const emailsForChecking = [
    'burduk-e-l@yandex.ru',
    '89272450412@mail.ru',
    'evgeniyaal87@mail.ru',
    'kalinu-anna@yandex.ru',
    'lapinett@mail.ru',
    'inneskanikiforova@mail.ru',
    'korolewata65@mail.ru',
    'oles332278@mail.ru',
    'lelya.ivanova.66@mail.ru',
    'kovala.anna@yandex.ru',
    'anna-values@yandex.ru',
    'tanka79_79@mail.ru',
    'ell-sav@mail.ru',
    'papatyared@gmail.com',
    'remizova130412@gmail.com',
    'yuliatatarnikowa@yandex.ru',
    'bgoamoscow@yandex.ru',
    'oliakrav4uk@yandex.ru',
    'kati.happyday@xmail.ru',
    'natalja.granko@yandex.ru',
    'zlatoust17@mail.ru',
    'olgabekasova73@gmail.com',
    'larionovanata@mail.ru',
    'n-tatvik@mail.ru',
    'me@strunkova.ru',
    'natal-greeg@mail.ru',
    'lfyz01@mail.ru',
]

emailsForChecking.map(e => {
    console.log(compareEmails(emailsBase, e))
})
