// // - создать массив с 20 числами.
// let arrNumber = [34, 66, 3, 23, 76, 67, 43, 56, 2, 3, 4, 5, 66, 78, 9, 70, 54, 3, 3, 22];
// // -- при помощи метода sort и колбека  отсортировать массив.
// arrNumber.sort(function arr(a, b) {
//     return a - b
// })
// console.log(arrNumber);
// ____________________________________________________________
// // -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// arrNumber.sort(function arr(a, b) {
//     return b - a
// })
// console.log(arrNumber);
// ______________________________________________________
// // -- при помощи filter получить числа кратные 3
// // arrNumber.filter(function(a) {
// //     return (a % 3 === 0);
// // })
// // console.log(arrNumber);
// // let result = arrNumber.filter(a => a % 3 === 0)
// // console.log(result);
// ____________________________________________________________
// // -- при помощи filter получить числа кратные 10
// // let result = arrNumber.filter(a => a % 10 === 0)
// // console.log(result);
// // _______________________________________________________________________
// // -- перебрать (проитерировать) массив при помощи foreach()
// // arrNumber.forEach(number => console.log(number))
// // _______________________
// // arrNumber.forEach(function(number) {
// //         console.log(number)
// // })
// // __________________________________________________________________________
// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// // arrNumber.map(function(number) {
// //     console.log(number = number * 3)
// // })
// // let arrNum = arrNumber.map(number => (number * 3))
// // console.log(arrNum);
// ____________________________________________________________
// // - создать массив со словами на 15-20 элементов.
let wordArr = ['abc', 'vasya', 'petya', 'lida', 'lola', 'sasha', 'gheniya', 'vika', 'yura', 'kolya', 'masha', 'roman']
    // ____________________________________________________________
    //     // -- отсортировать его по алфавиту в восходящем порядке.
wordArr.sort()
console.log((wordArr));
// ____________________________________________________________
// // -- отсортировать его по алфавиту  в нисходящем порядке.
// let wordSort = wordArr.sort(function(a, b) {
//     return b, a

// })
// console.log(wordSort);
// _____________________________________________________________
let wordSort = wordArr.sort(function(nameA, nameB) {
        // if (nameA < nameB) {
        //     return -1;
        // }
        if (nameA > nameB) { //НАВПАКИ !!!!!!!!!!!!!!
            return -1;
        }
    })
    // console.log(wordArr);
console.log(wordSort);
// ____________________________________________________________
// // -- отфильтровать слова длиной менее 4х символов
//
// ____________________________________________________________
// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// wordArr.map(function(word) {
//     console.log(word = word + '!')
// })
// console.log(wordArr.map(word => word + '!'))
// // ____________________________________________________________
// // Все робити через функції масивів (foreach, map ...тд)
// // Дан масив :
// let users = [{ name: 'vasya', age: 31, status: false }, { name: 'petya', age: 30, status: true }, { name: 'kolya', age: 29, status: true }, { name: 'olya', age: 28, status: false }, { name: 'max', age: 30, status: true }, { name: 'anya', age: 31, status: false }, { name: 'oleg', age: 28, status: false }, { name: 'andrey', age: 29, status: true }, { name: 'masha', age: 30, status: true }, { name: 'olya', age: 31, status: false }, { name: 'max', age: 31, status: true }];
// // - відсортувати його за  віком (зростання , а потім окремо спадання)
// users.sort(function(userCurent, userNext) {
//     return userCurent.age - userNext.age

// })
// console.log(users);
// ____________________________________________________________
// // - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// users.sort(function(userCurent, userNext) {
//     return userCurent.name.length - userNext.name.length
// })
// console.log(users);
// users.sort(function(userCurent, userNext) {
//     return userNext.name.length - userCurent.name.length
// })
// console.log(users);
// ____________________________________________________________
// // - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let idArr = users.map((idUser, index) => {
//     idUser.id = index;
//     return idUser
// })
// console.log(idArr);
// ____________________________________________________________
// // - відсортувати його за індентифікатором

// // idArr.sort(function(arrCurent, arrNext) {
// // return arrCurent.id - arrNext.id
// // return arrNext.id - arrCurent.id
// // console.log((arrCurent));
// // })
// // console.log((idArr));

//// ____________________________________________________________
// // -- наисать функцию калькулятора с 2мя числами и колбеком
// function calculator(x, y, callback) {
//     return callback(x, y)
// }
// console.log(calculator(4, 7, (x, y) => x + y)) //або
//     // console.log(calculator(4, 7, function(x, y) { return x + y }))
// // ____________________________________________________________
// // -- наисать функцию калькулятора с 3мя числами и колбеком.
// function newCalc(x, z, y, fn) {
//     return fn(x, z, y)
// }
// let result = newCalc(78, 65, 3, function(x, z, y) {
//     return x + y + z - (x + y)
// })
// console.log(result);