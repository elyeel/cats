// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(filename, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${filename}.txt`, 'utf8', (error, data) => {
    // ISSUE: Returning from inner callback function, not our main function.
    console.log('Callback: I have the data!')
    if (!error) {
      callback(data);
    } 
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so this function returns undefined.
}


// we try to get the return value
// const catRace = ['Balinese', "Bombay"];
// for (let race of catRace) {
//   const bombay = breedDetailsFromFile(race,(bombay) => {
//     console.log('Return Value: ', bombay) // => will NOT print out details, instead we will see undefined!
//   });
// };

module.exports = breedDetailsFromFile;