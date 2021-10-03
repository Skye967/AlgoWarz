

var Fibonacci = () => {
    // if ( n == 0 || n == 1 ) {
    //     return n;
    // }
    let fibCache = {};
    return ( n ) => {
        if ( n in fibCache ) {
            console.log( 'Fetching from cache' );
            console.log( fibCache[ n ] );
            return fibCache[ n ];
        } else {
            let fibSum = 0;
            for ( let i = 0; i <= n; i++ ) {
                if ( i <= 1 ) {
                    fibCache[ i ] = i;
                }
                if ( i >= 2 ) {
                    fibSum = fibCache[ i - 2 ] + fibCache[ i - 1 ];
                    fibCache[ i ] = fibSum;
                }
            }
            console.log( 'Calculating result' );
            console.log( fibSum );
            return fibSum;
        }
    };
};
const fibonacci = Fibonacci();
fibonacci( 70 );
fibonacci( 60 );
