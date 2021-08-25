var ipA = '96.60.47.';
var ipB = "123.45.67.89";
var ipC = "195.5..210";
var ipD = "123.456.78.90";
var ipE = "1.2.3.bc";
var ipF = "123.045.067.089";
var ipG = '1.2.3.4 ';


function isValidIP ( str ) {
    let result = false;
    let ipArr = str.split( "." );
    console.log( ipArr );
    if ( ipArr.length != 4 ) {
        result = false;
        console.log( result );
        return result;
    } else {
        result = true;
    }
    for ( let i = 0; i < ipArr.length; i++ ){
        let val = ipArr[ i ].split( '' );
        console.log( ipArr[i] );
        if ( isNaN( ipArr[ i ] ) || ipArr[ i ] > 255 || ipArr[ i ] < 0 || ipArr[ i ] == '') {
            result = false;
            return result;
        }
        if ( val.length > 1 ) {
            if ( val[ 0 ] == 0 ) {
                result = false;
            }
            for ( let j = 0; j < val.length; j++ ){
                let checkVal = parseInt( val[ j ] );
                if ( isNaN( checkVal ) ) {
                    result = false;
                    return result;
                }
            }
        }
    }
    return result;
}
console.log( isValidIP( ipC ) );


function isValidIP( str ) {
    return str.split( '.' ).filter( function ( v ) {
        return v == Number( v ).toString() && Number( v ) < 256
    } ).length == 4;
}