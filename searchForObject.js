const searchForObj = {
    firstName: "Bob",
    age: 31
};


const arr = [ {
        firstName: "Bob",
        lastName: "Bobbert",
        age: 31
    },
    {
        firstName: "John",
        lastName: "Smith",
        age: 25
    },
    {
        firstName: "Bob",
        lastName: "Smith",
        age: 27
    },
    {
        firstName: "Bob",
        lastName: "White",
        age: 31
    }
];

// return a new list of objects containing the same key pair values
const output = [ {
        firstName: "Bob",
        lastName: "Bobbert",
        age: 31
    },
    {
        firstName: "Bob",
        lastName: "White",
        age: 31
    }
];

function findObject ( search, arr ) {
    const result = arr.filter( s => s.firstName == search.firstName && s.age == search.age );
    return result;
}
console.log( findObject( searchForObj, arr ) )


function findObjectsFilter ( search, arr ) {
    let result = [];
    for ( let i = 0; i < arr.length; i++ ){
        console.log( arr[ i ] ); 
        searching = arr[ i ];
        if ( searching[ 'firstName' ] == search[ 'firstName' ] && searching[ 'age' ] == search[ 'age' ] ) {
            console.log( "works" );
            result.push( searching );
        }
    }
    return result;
}
//console.log( findObjectsFilter( searchForObj, arr ) );