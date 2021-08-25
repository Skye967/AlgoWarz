let pass1 = 'djI38D55';
let pass2 = 'a2.d412';
let pass3 = 'JHD5FJ53';
let pass4 = '!fdjn345';
let pass5 = 'Password123';


function validate ( password ) {
     return /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test( password );
}
console.log( validate( pass5 ) );


var regularExpression = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;