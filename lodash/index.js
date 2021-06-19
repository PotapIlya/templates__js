// _.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

// const compact = (data) => {
//     let array = [];
//     data.forEach( item => {
//         if (item && typeof item === 'number') {
//             array.push(item)
//         }
//     })
//     return array;
// }
// console.log(
//     compact([0, 1, false, 2, '', 3])
// );



// var other = _.concat(array, 2, [3], [[4]]);
// => [1, 2, 3, [4]]
// const concat = (...data) => {
//     let array = [];
//     data.forEach(item => {
//         if (typeof item === 'number'){
//             array.push(item)
//         } else{
//             array.push(...item)
//         }
//     })
//     return array;
// };
// console.log(
//     concat([1], 2, [3], [[4]])
// ) // => [1, 2, 3, [4]]




// const customForEach = (array, cb) => {
//     for (let index = 0; array.length > index ; index++ ) {
//         cb(array[index], index, array)
//     }
// }
// customForEach([1,2,3,4], (item, index, array) => {
//     console.log(item)
//     console.log(index)
//     console.log(array)
//     console.log('---')
// })



