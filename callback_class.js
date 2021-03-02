// // =============================================
// // =============================================
// // =============КЛАССНАЯ РАБОТА=================
// // =============================================
// // =============================================


// let cars = [{ producer: "subaru", model: "wrx", year: 2010, color: "blue", type: "sedan", engine: "ej204x", volume: 2, power: 400 },
//     { producer: "subaru", model: "legacy", year: 2007, color: "silver", type: "sedan", engine: "ez30", volume: 3, power: 250 },
//     { producer: "subaru", model: "tribeca", year: 2011, color: "white", type: "jeep", engine: "ej20", volume: 2, power: 300 },
//     { producer: "subaru", model: "leone", year: 1998, color: "yellow", type: "sedan", engine: "ez20x", volume: 2, power: 140 },
//     { producer: "subaru", model: "impreza", year: 2014, color: "red", type: "sedan", engine: "ej204x", volume: 2, power: 200 },
//     { producer: "subaru", model: "outback", year: 2014, color: "red", type: "hachback", engine: "ej204", volume: 2, power: 165 },
//     { producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120 },
//     { producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120 },
//     { producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350 },
//     { producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180 },
//     { producer: "mercedes", model: "e200", year: 1990, color: "silver", type: "sedan", engine: "eng200", volume: 2, power: 180 },
//     { producer: "mercedes", model: "e63", year: 2017, color: "yellow", type: "sedan", engine: "amg63", volume: 3, power: 400 },
//     { producer: "mercedes", model: "c250", year: 2017, color: "red", type: "sedan", engine: "eng25", volume: 2.5, power: 230 }
// ];
// // Відфільтрувати масив за наступними крітеріями :
// // - двигун більше 3х літрів
// let carFilter = cars.filter(function(user, index, Array) {
//     return user.volume > 3
// })
// console.log(carFilter);
// // - двигун = 2л
// let carValume = cars.filter(function(car) {
//     return car.volume = 2
// })
// console.log(carValume);
// // - виробник мерс
// let carMers = cars.filter(function(mers) {
//     return mers.producer === 'mercedes'
// })
// console.log(carMers);
// // - двигун більше 3х літрів + виробник мерседес
// let carProduce = cars.filter(function(produc) {
//     return produc.producer === 'mercedes' && produc.volume > 3
// })
// console.log(carProduce);
// // - двигун більше 3х літрів + виробник субару
// let carSubar = cars.filter(function(produc) {
//     return produc.producer === 'subaru' && produc.volume > 3
// })
// console.log(carSubar);
// // - сили більше ніж 300
// let carPower = cars.filter(function(pow) {
//     return pow.power > 200
// })
// console.log(carPower);
// // - сили більше ніж 300 + виробник субару
// let carPowers = cars.filter(function(pow) {
//     return pow.power > 200 && pow.producer === 'subaru'
// })
// console.log(carPowers);
// // _____________________________________
// // ??????????????????????
// // -мотор серіі ej
// let model = cars.filter(item => item.engine.includes('ej'));
// // model.includes('ej')
// console.log(model)

// // - сили більше ніж 300 + виробник субару + мотор серіі ej
// let force = cars.filter(car => car.power > 300 && car.producer === 'subaru' && car.engine.includes('ej'))
// console.log(force);
// // - двигун меньше 3х літрів + виробник мерседес
// let minVolume = cars.filter(car => car.volume < 3 && car.producer === 'mercedes')
// console.log(minVolume);
// // - двигун більше 2л + сили більше 250
// //

// // let forceCar = cars.filter(car => car.volume > 2 && car.power > 250)

// let forceCar = cars.filter(function(car) {
//     // debugger
//     return car.volume > 2 && car.power > 250
// })
// console.log(forceCar);
// // - сили більше 250  + виробник бмв
// let carBMW = cars.filter(car => car.power > 250 && car.producer === 'bmw')
// console.log(carBMW);


// - взять слдующий массив
let usersWithAddress = [{ id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 1 } },
    { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } }, { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 90 } },
    { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
    { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 2 } },
    { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 22 } }, { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
    { id: 9, name: 'masha', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 12 } },
    { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 11, name: 'max', age: 31, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } }
];
// // -- отсортировать его по id пользователей
// let sortUser = usersWithAddress.sort(user => user.id)
// console.log(sortUser);
// // -- отсортировать его по id пользователей в обратном опрядке
// let userSort = usersWithAddress.sort((curentUser, nextUser) => nextUser.id - curentUser.id)
// console.log(userSort);
// -- отсортировать его по возрасту пользователей
// let userAge = usersWithAddress.sort(user => user.age)
// let userAge = usersWithAddress.sort(function(usCurent, usNext) {
//     return usCurent.age - usNext.age
// })
// console.log(userAge);
// // -- отсортировать его по возрасту пользователей в обратном порядке
// let userAgeSort = usersWithAddress.sort(function(usCurent, usNext) {
//     return usNext.age - usCurent.age
// })
// console.log(userAgeSort);
// -- отсортировать его по имени пользователей
// let nameUser = usersWithAddress.sort(function(nameCurent, nextName) {
//     if (nameCurent.name < nextName.name) {
//         return -1;
//     }

// })
// console.log(nameUser);
// -- отсортировать его по имени пользователей в обратном порядке
// let nameUser = usersWithAddress.sort(function(nameCurent, nextName) {
//     if (nameCurent.name > nextName.name) {
//         return -1;
//     }
// })
// console.log(nameUser);
// // -- отсортировать его по названию улицы  в алфавитном порядке
// let stretUser = usersWithAddress.sort(streetUser => streetUser.address.street)
// console.log(stretUser);
// -- отсортировать его по номеру дома по возрастанию
// let numberHouse = usersWithAddress.sort(function(home, next) {
//     return home.address.number - next.address.number
// })
// console.log(numberHouse);
// -- отфильтровать (оставить) тех кто младше 30
let young = usersWithAddress.filter(function(people) {
    return people.age < 30
})
console.log(young);
// -- отфильтровать (оставить) тех у кого отрицательный статус
let falseStatus = usersWithAddress.filter(stat => !stat.status)
console.log(falseStatus);
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
let falseYoung = usersWithAddress.filter(stat => !stat.status && stat.age < 30)
console.log(falseYoung);
// -- отфильтровать (оставить) тех у кого номер дома четный
let EvenHouse = usersWithAddress.filter(house => house.address.number % 2 == 0)
console.log(EvenHouse);

// ==========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
let cars = [{
        id: 654,
        model: 'Highlander',
        producer: 'Toyota',
        price: 15000,
        tankVolume: 3.5,
        horsePower: 249,
        driver: {
            age: 34,
            expirience: 4,
            name: 'andriy'
        }
    },
    {
        id: 364,
        model: 'CX-5',
        producer: 'Mazda',
        price: 12400,
        tankVolume: 2.0,
        horsePower: 165,
        driver: {
            age: 45,
            expirience: 13,
            name: 'viktor',
        }
    },

    {
        id: 904,
        model: 'X-5',
        producer: 'BMW',
        price: 165400,
        tankVolume: 3.0,
        horsePower: 225,
        driver: {
            name: 'vasya',
            age: 32,
            expirience: 8,
        }
    },
    {
        id: 674,
        model: 'GLE-Class ',
        producer: 'Mercedes-Benz',
        price: 37600,
        tankVolume: 2.9,
        horsePower: 330,
        driver: {
            age: 65,
            expirience: 22,
            name: 'vlad',
        }
    },
    {
        id: 812,
        model: 'LX-570',
        producer: 'Lexus',
        price: 67500,
        tankVolume: 5.7,
        horsePower: 367,
        driver: {
            age: 45,
            expirience: 15,
            name: 'oleg'
        }
    },
    {
        id: 762,
        model: 'Compass Trailhawk',
        producer: 'jeep',
        price: 12400,
        tankVolume: 2.4,
        horsePower: 220,
        driver: {
            age: 38,
            expirience: 7,
            name: 'valera'
        }
    },
    {
        id: 482,
        model: ' Q8 ',
        producer: 'Audi',
        price: 27800,
        tankVolume: 3.0,
        horsePower: 286,
        driver: {
            age: 42,
            expirience: 5,
            name: 'viktor'
        }
    },
    {
        id: 762,
        model: 'XC40',
        producer: 'Volvo',
        tankVolume: 2.0,
        price: 7800,
        horsePower: 150,
        driver: {
            age: 45,
            expirience: 15,
            name: 'yuriy'
        }
    },
    {
        id: 213,
        model: 'QX50',
        producer: 'Infiniti ',
        price: 98600,
        tankVolume: 2.0,
        horsePower: 249,
        driver: {
            age: 35,
            expirience: 1,
            name: 'georgiy'
        }
    },
    {
        id: 143,
        model: 'Kuga',
        producer: 'Ford',
        price: 10900,
        tankVolume: 2.0,
        horsePower: 190,
        driver: {
            age: 45,
            expirience: 15,
            name: 'oleg'
        }
    },

];
cars
    .filter(car => car.price > 10000)
    .sort((curent, next) => curent.price - next.price)
    .forEach(value => {
        let div = document.createElement('div')
        div.innerHTML = JSON.stringify(value)
        document.body.appendChild(div)
    })
    // Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
    // Власник автомобіля теж має бути обєкт, у якого є поля
    // Імя, вік, стаж водіння.
    // Створити не менше 7 та не більше 20 машинок.
    // Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
cars.map(function(car, index, array) {
    car.horsePower = car.horsePower * 1.1
})
console.log(cars);

// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
cars.map(function(car) {
    car.driver.expirience = car.driver.expirience * 1.2,
        car.driver.name = 'vitya',
        car.driver.age = car.driver.age + 4;
})
console.log(cars);
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%

cars.map(function(car, index) {
    if (index % 2 == 0) {
        car.tankVolume = car.tankVolume * 1.1;
        car.price = car.price * 1.05;
        console.log(car);
    }
})
console.log(cars);
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
cars.map(function(car) {
        if (car.driver.expirience < 5 && car.driver.age > 25) {
            car.driver.expirience = car.driver.expirience + 1;
            console.log(car.driver);
        }

    })
    // Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
let SumPrice = 0;
// let price;
cars.forEach(car => SumPrice += car.price)
console.log(SumPrice);
// let carPrice = 0;
// const x = cars.map(car => {
//     carPrice += car.price;
//     return carPrice;
// })
// console.log(x);
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
let arrNumber = [4, 6, 7, 8, 9, 9, 44, 4, 4, 4, 66, 12, 3, 4, 5, 34, 56, 89]
let numberSort = arrNumber.sort((curent, next) => curent - next)
console.log(numberSort);

let arr = [];
let number = 4;
let indexNumber = numberSort.indexOf(number)
while (indexNumber != -1) {
    arr.push(indexNumber);
    indexNumber = numberSort.indexOf(number, indexNumber + 1)

}
console.log(indexNumber);
console.log(arr);

let minInd = Math.min(...arr)
let maxInd = Math.max(...arr)
console.log(minInd);
console.log(maxInd);
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
let arrNum = [4, 6, 7, 8, 12, 3, 4, 5, 34, 56, 89]
let a = Math.abs(...arrNum)
let arrayAbs = []
while (a <= 10) {
    arrayAbs.push(a)
    a++
}
console.log(arrayAbs);
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
// IndexOf LastIndexOf
// Пример:
let arrX = [1, 2, 3, 4, 7, 7, 9, 4, 14]
let index = arrX.lastIndexOf(4)
console.log(index);
let lastindex = arrX.indexOf(4)
console.log(lastindex);