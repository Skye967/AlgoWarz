const num = 2154959208;


function int32ToIp ( int32 ) {
    
    return ( String(int32 >>> 24 & 0xFF) ) + '.' +
        ( String(int32 >>> 16 & 0xFF) ) + '.' +
        ( String(int32 >>> 8 & 0xFF) ) + '.' +
        ( String(int32 & 0xFF) );
}
console.log( int32ToIp( num ) );

