const arrA1 = [ 0, 1, 2, 2, 2, 7 ];
const arrB1 = [ 2, 2, 6, 6, 7 ];
const expected1 = [ 2, 7 ];

const arrA2 = [ 0, 1, 2, 2, 2, 7 ];
const arrB2 = [ 2, 2 ];
const expected2 = [ 2 ];

const arrA3 = [ 0, 1, 2, 2, 2, 7 ];
const arrB3 = [ 10 ];
const expected3 = [];

function orderedIntersection ( arrA, arrB ) {
    let interSection = [];
    for ( let i = 0; i < arrA.length; i++ ){
        for ( let j = 0; j < arrB.length; j++ ) {
            if ( arrA[ i ] == arrB[ j ] && arrA[i] != interSection[interSection.length-1]) {
                interSection.push( arrB[ j ] );
            }
        }
    }
    console.log( interSection );
}

orderedIntersection(arrA3, arrB3)