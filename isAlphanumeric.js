// /^[a-z0-9]+$/i

function alphanumeric( string ) {
    return /^[a-z0-9]+$/i.test( string );
}
console.log( alphanumeric( "Mazinkaiser" ) );
console.log( alphanumeric( "hello world_" ) );
console.log( alphanumeric( "PassW0rd" ) );
console.log( alphanumeric( "     " ) );