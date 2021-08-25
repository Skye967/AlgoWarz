function insertionSort2( inputArr ) {
    let n = inputArr.length;
    for ( let i = 1; i < n; i++ ) {
        let current = inputArr[ i ];
        let j = i - 1;
        while ( ( j >= 0 ) && ( current < inputArr[ j ] ) ) {
            inputArr[ j + 1 ] = inputArr[ j ];
            j--;
        }
        inputArr[ j + 1 ] = current;
    }
    console.log( inputArr );
    return inputArr;
}

 insertionSort2( [ 3, 5, 2, 1, 0 ] )
 insertionSort2( [ 3, 0 ] )
 insertionSort2( [ 0 ] )
 insertionSort2( [] )
 insertionSort2( [ 1, 2, 3, 4, 5 ] )
 insertionSort2( [ 5, 4, 3, 2, 1 ] )
 insertionSort2( [ 5, 4, 0, 2, 1 ] )