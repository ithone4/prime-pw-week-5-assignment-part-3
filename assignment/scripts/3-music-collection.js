console.log('***** Music Collection *****')
// # Tier 1 Week 5 - Part 3

// This week, we'll be exploring objects by creating an application to help maintain a record collection. We will be creating objects using `object literal` syntax.

// ## Topics Covered

// - objects
// - HTML & CSS

// ## Part 3 - Building a Music Collection

// Update the `3-music-collection.js` file to do the following:

// > While working through the features below, make sure to commit after you complete a task! Your commit message should reflect what you added or changed since the previous commit.

// ### Required Features

// - Create a variable `collection` that starts as an empty array.
let recordCollection = [];

function addToCollection( newTitle, newArtist, newYearPublished ){
    let newRecord = {
        title : newTitle,
        artist : newArtist,
        yearPublished : newYearPublished
    }
    recordCollection.push( newRecord );
    return newRecord;
// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object
} // end AddToCollection
addToCollection( 'Dark Side of the Moon', 'Pink Floyd', 1973 );
addToCollection( 'Taylor Swift', 'Twenty Three', 2016 );
addToCollection( 'Wilco', 'A.M.', 1996);
addToCollection( 'Wilco', 'Star Wars', 2016 );
addToCollection( 'Taylor Swift', 'Evermore', 2020 );
addToCollection( 'Wilco', 'Yankee Hotel Foxtrot', 2002);
console.log(recordCollection);

// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

// - Test the `showCollection` function.

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

// > When testing your functions, write all tests in the JavaScript file!