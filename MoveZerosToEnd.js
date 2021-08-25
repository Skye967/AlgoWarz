var test = [ 'a',0,0,'b',null,'c','d',0,1,false,0,1,0,3,[],0,1,9,0,0,{},0,0,9];

var moveZeros = function ( arr ) {
    let arr1 = arr.filter( index => index === 0 );
    let arr2 = arr.filter( index => index !== 0 );
    let newArr = arr2;
    console.log( arr1 );
    console.log( arr2 );
    for ( let i = 0; i < arr1.length; i++ ) {
        newArr.push( arr1[ i ] );
    }
    return newArr;
};
moveZeros( test );


