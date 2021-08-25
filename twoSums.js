// function twoSums( arr, target ) {
//     let newArray = [];

//     for ( let i = 0; i < arr.length; i++ ) {
//         for ( let j = i + 1; j < arr.length; j++ ) {
//             if ( arr[ i ] + arr[ j ] === target ) {
//                 newArray.push( i )
//                 newArray.push( j )
//                 return newArray;
//             }
//         }
//     }
// }

// console.log( twoSums( [ 2, 11, 7, 15 ], 9 ) )
// console.log( twoSums( [ 3, 2, 4 ], 6 ) )
// console.log( twoSums( [ 3, 3 ], 6 ) )

function anotherTwoSums ( arr, target ) {
    let result = arr.filter( num => num < target);
    let finder = result.find( element => element = 10 );
    console.log( result );
}
anotherTwoSums( [ 1,2, 11, 7, 15, 8 ], 9 );