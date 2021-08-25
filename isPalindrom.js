const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;
function canStringBecomePalindrome ( str ) {
    let result = false;
    if ( str == "" ) return false;
    let obj = {};
    if ( str.length < 2 ) {
        return true;
    }
    if ( str.length % 2 == 0 && str.length > 2) {
        for ( let s of str )
            if ( !obj[ s ] ) obj[ s ] = 1;
            else obj[ s ] = obj[ s ] + 1;
        console.log( obj );
        for ( item in obj ) {
            if ( obj[ item ] % 2 === 0 ) result = true;
            else result = false; break;
        }
    }
    let count = 0;
    if ( str.length % 2 == 1 && str.length > 0 ) {
        for ( let s of str )
            if ( !obj[ s ] ) obj[ s ] = 1;
            else obj[ s ] = obj[ s ] + 1;
        console.log( obj );
        for ( item in obj ) {
            if ( obj[ item ] % 2 === 0 ) result = true;
            else count += 1;
        }
        console.log( count );
        if ( count == 1 ) result = true;
        else result = false;
    }
    return result;
 }
console.log(canStringBecomePalindrome( str1 ));