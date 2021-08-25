const nums1 = [ 1, 4, 3, 6, 9, 3 ];
const callback1 = ( elem ) => {
    const result = elem.filter( num => num > 5 );
    console.log( result )
    return result;
};
const expected1 = [ 6, 9, 3 ];
callback1( nums1 );

const nums2 = [ 1, 4, 3, 6, 9, 3 ];
const callback2 = ( elem ) => {
    return elem > 2;
};
const expected2 = [ 4, 3, 6, 9, 3 ];

const nums3 = [ 1, 4, 3, 6, 9, 3 ];
const callback3 = ( elem ) => false;
const expected3 = [];


function dropIt( arr, callback ) {}