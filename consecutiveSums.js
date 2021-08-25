function findConsqSums( arr, k ) {
    let results = [];
    for ( let i = 0; i < arr.length; i++ ){
        let sum = 0;
        let newArr = [];
        for ( let j = i; j < arr.length; j++ ){
            if ( sum < 16 ) {
                sum += arr[ j ];
                newArr.push( arr[ j ] );
            }
            if ( sum == 16 ) {
                results.push( newArr );
                break;
            }
            console.log( newArr );
        }
    }
    console.log( results );
}

findConsqSums( [ 2, 5, 3, 6, 7, 0, 0, 23, 11 ], 16 );