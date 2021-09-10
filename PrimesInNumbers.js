

//Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
//Prime factorization of 10 is 2 x 5
//Prime factorization of 20 is 2 x 2 x 5 or 22 x 51

function primeFactors( n ) {
    let value = n;
    let arr = [];
    for ( let i = 2; i < n + 1; i++ ){
        let result = value / i;
        if ( result % 1 == 0 ) {
            value = result;
            arr.push( i );
            if ( value == 1 ) {
                console.log( arr );
                break;
            }
            i--;
        }
    }
    let primeSting = "";
    let numCount = 1;
    for ( let j = 0; j < arr.length; j++ ){
        let num = arr[j];
        if ( num == arr[ j + 1 ] ) {
            numCount++;
        }
        if ( num != arr[ j + 1 ] ) {
            if ( numCount == 1 ) {
                primeSting = primeSting + `(${ num })`;
            } else {
                primeSting = primeSting + `(${ num }**${ numCount })`;
            }
            numCount = 1;
        }
    }
    console.log( primeSting );
    return primeSting;
}
primeFactors( 86240 );


function primeFactors( n ) {
    for ( var i = 2, res = "", f; i <= n; i++ ) {
        f = 0;
        while ( n % i == 0 ) {
            f++;
            n /= i
        }
        res += f ? "(" + ( f > 1 ? i + "**" + f : i ) + ")" : ""
    }
    return res || "(" + n + ")"
}