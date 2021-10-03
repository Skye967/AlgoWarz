let test1 = [ -3, -2, -1, 2, 10, 15, 16, 18, 19, 20 ];
let test2 = [ -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20 ];

function solution ( list ) {
    let string = "";
    let rangeArr = [list[0]];
    //console.log( rangeArr );
    for ( let i = 1; i < list.length; i++ ){
        if( list[i] - 1 == list[i - 1] ) {
            //console.log( list[ i ] );
            rangeArr.push( list[ i ] );
            console.log( rangeArr );
        } else {
            if ( rangeArr.length >= 3 ) {
                string = string + rangeArr[ 0 ] + "-" + rangeArr[ rangeArr.length - 1 ] + ",";
                console.log( string );
            } else {
                for ( let j = 0; j < rangeArr.length; j++ ){
                    string = string + rangeArr[ j ] + ",";
                    console.log( string );
                }
            }
            console.log( rangeArr );
            rangeArr = [];
            rangeArr.push( list[ i ] );
            console.log( list[ i ] );
        }
        if ( i == list.length - 1) {
            switch ( rangeArr.length ) {
                case 1:
                    string = string + rangeArr[ 0 ];
                    break;
                case 2:
                    string = string + rangeArr[ 0 ] + "," + rangeArr[1];
                    break;
                default:
                    string = string + rangeArr[ 0 ] + "-" + rangeArr[ rangeArr.length - 1 ];
                    break;
            }
        }
    }
    console.log( string );
    return string;
}
solution( test2 );



// function solution( individualIntegers ) {
//     return individualIntegers
//         .reduce( splitIntoRanges, [] )
//         .map( convertToRange )
//         .join( "," );
// }