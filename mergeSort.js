arr1 = [ 1, 4, 2, 7, 6, 3, 8, 20, 9, 15, 12, 10 ];
arr2 = [ 1, 3, 5, 4, 8, 30, 20, 17, 7 ];

function mergeSort ( arr ) {
    var half;
    var firstHalf;
    var secondHalf;
    if ( arr.length % 2 == 1 ) {
        half = Math.ceil( arr.length / 2 );
        firstHalf = arr.slice( 0, half );
        secondHalf = arr.slice( -half + 1 );
    }
    if ( arr.length % 2 == 0 ) {
        half = Math.ceil( arr.length / 2 );
        firstHalf = arr.slice( 0, half );
        secondHalf = arr.slice( -half );
    }
    if ( firstHalf.length > 2 ) {
        mergeSort( firstHalf );
    }
    if ( secondHalf.length > 2 ) {
        mergeSort( secondHalf );
    }
    if ( firstHalf.length == 2 && firstHalf[ 0 ] > firstHalf[ 1 ] ) {
        var temp = firstHalf[ 0 ];
        firstHalf[ 0 ] = firstHalf[ 1 ]
        firstHalf[ 1 ] = temp;
    }
    if ( secondHalf.length == 2 && secondHalf[ 0 ] > secondHalf[ 1 ] ) {
        var temp = secondHalf[ 0 ];
        secondHalf[ 0 ] = secondHalf[ 1 ]
        secondHalf[ 1 ] = temp;
    }
    console.log( firstHalf )
    console.log( secondHalf )
}
//mergeSort(arr1)


function mergeSortedArrays ( arr1, arr2 ) {
    newArray = [];
    arr1Count = 0;
    arr2Count = 0;
    if ( arr1.length > arr2.length ) {
        var lengthToIterate = arr1.length;
    }
    if ( arr2.length > arr1.length ) {
        var lengthToIterate = arr2.length;
    }
    if ( arr1.length == arr2.length ) {
        var lengthToIterate = arr1.length;
    }
    for ( var i = 0; i < lengthToIterate; i++ ) {
        console.log( arr1[ i ], arr2[ i ] );
        console.log( "COMPARING THESE TWO VALUES", arr1[ arr1Count ], arr2[ arr2Count ] );
        //check if arr1 count > arr2 count
        if ( arr1[ arr1Count ] > arr2[ arr2Count ] ) {
            newArray.push( arr2[ i ] );
            arr2Count++;
        }
        if ( arr1[ arr1Count ] < arr2[ arr2Count ] ) {
            newArray.push( arr1[ i ] );
            arr1Count++;
        }
    }
    console.log( newArray );
}
mergeSortedArrays([1,3,4,7], [2,5,6,8])