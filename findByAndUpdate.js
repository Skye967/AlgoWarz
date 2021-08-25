var myObj = {
    id: 1,
    name: "student1",
    isLateToday: true,
    lateCount: 11,
    redBeltStatus: true
}

const students = [ {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false
    }
];

function findByIdAndUpdate( id, updatedVals, collection ) {
    // separate the keys
    const keys = Object.keys( updatedVals );

    // loop over the collection and look at each document
    for ( const item of collection ) {
        // match ids
        if ( item.id === id ) {
            // loop through our keys
            for ( const key of keys ) {
                // only update keys that exist on the found object
                if ( item.hasOwnProperty( key ) ) {
                    item[ key ] = updatedVals[ key ];
                }
            }
            return item;
        }
    }
    // above return didn't run so nothing was found
    return null;
}