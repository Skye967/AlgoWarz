// given two sorted arrays that may have duplicate values, merge them and remove any duplicates

var arr1 = [ 1, 3, 3, 5, 8, 10 ];
var arr2 = [ 1, 3, 4, 5 ];

function mergeDedupe ( arr1, arr2 ) {
    let sortedArr = [];
    for ( let i = 0; i < arr1.length; i++ ){
        if ( sortedArr[0] == undefined ) {
            if ( arr1[ i ] < arr2[ i ] ) {
                sortedArr.push( arr1[ i ] );
            } else {
                sortedArr.push( arr2[ i ] );
            } 
        }
        if ( sortedArr[ i ] != arr1[ i ] && arr1[ i - 1 ] != arr1[ i ] ) {
            sortedArr.push( arr1[ i ] );
        }
        if ( sortedArr[ i ] != arr2[ i ] && arr2[ i ] != undefined && sortedArr[ i - 1] != arr2[ i ] ) {
            sortedArr.push( arr2[ i ] );
        }
    }
    console.log( sortedArr );
        
}

mergeDedupe( [ 1, 3, 3, 5, 8, 10 ], [ 1, 3, 4, 5 ] );// [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe( [ 2, 3, 3, 5, 8, 10, 12 ], [ 1, 3, 4, 6 ] ); 