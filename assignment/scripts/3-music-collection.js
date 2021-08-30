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

// - Create a variable `collection` that starts as an empty collection.
let collection = [];

function addToCollection( title, artist, yearPublished ){
    
    let newRecord = {
        recordTitle: title,
        recordArtist: artist,
        recordYear: yearPublished
    }
    collection.push(newRecord);
    return newRecord;
}
// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` collection
//   - Return the newly created object
 // end AddToCollection
addToCollection( 'Dark Side of the Moon','Pink Floyd',1973 );
console.log(collection[0],'Added to Our Record Collection');
addToCollection( '23','Taylor Swift',2016 );
console.log(collection[1],'Added to Our Record Collection');
addToCollection( 'A.M.','Wilco',1996);
console.log(collection[2],'Added to Our Record Collection');
addToCollection( 'Star Wars','Wilco',2016 );
console.log(collection[3],'Added to Our Record Collection');
addToCollection( 'Evermore','Taylor Swift',2020 );
console.log(collection[4],'Added to Our Record Collection');
addToCollection( 'Yankee Hotel Foxtrot','Wilco',2001);
console.log(collection[5],'Added to Our Record Collection');
console.log(collection);

// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` collection.
// 
function showCollection( anyCollection ){
    //   - Console.log the number of items in the array.
        console.log( anyCollection.length);
    //   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
        for ( i=0; i<anyCollection.length; i++){
            console.log( anyCollection[i].recordTitle, 'by', anyCollection[i].recordArtist, ', published in', anyCollection[i].albumYear, '.');
           //   - Update the `showCollection` function to display the list of tracks for 
        } //end for loop
    } //end showCollection function
    
    // - Test the `showCollection` function.
    showCollection( collection );
    
    // - Add a function named `findByArtist`. This function should:
    //   - Take in `artist` (a string) parameter
    function findByArtist( artist ){
    //   - Create an array to hold any results, empty to start:
        let results = [];
    //   - Loop through the `collection` and add any objects with a matching artist to the array.
        for ( let i=0; i<collection.length; i++){
            if (collection[i].recordArtist=== artist ){
                results.push(collection[i]);
            }
        } //end for loop
    //   - Return the array with the matching results. If no results are found, return an empty array.
        return results;
    } //end function 
    
    // Test the `findByArtist` function. Make sure to test with an artist you know is in the collection
    //as well as an artist you know is not in your collection. 
    //Check that for artists with multiple matches, all are found.
    
    console.log('How many records by Wilco', findByArtist( 'Wilco' ));

// ### Stretch goals

// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update `search` to allow a `trackName` search criteria.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// ```

// > Make sure to test all your code 
