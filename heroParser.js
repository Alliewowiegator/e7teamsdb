const fsPromises = require('fs').promises;

let data;

let heroData = [];

// Simple script I made to parse data I need from https://api.epicsevendb.com/#/default/get_hero / https://github.com/fribbels/Fribbels-Epic-7-Optimizer/blob/main/data/cache/herodata.json
for (const [key, value] of Object.entries(data)) {
    let currValue = value.name;
    let currViewValue = currValue;
    let currThumbnail = value.assets.thumbnail;
    let parsedData = { value: currValue, viewValue: currViewValue, thumbnail: currThumbnail }
    heroData.push(parsedData)
}

heroData.sort(function (current, next) {
  let currentHero = current.value.toUpperCase();
  let nextHero = next.value.toUpperCase();
  return (currentHero < nextHero) ? - 1 : (currentHero > nextHero) ? 1 : 0;
})

fsPromises.writeFile('./heroData.json', JSON.stringify(heroData, null, 1), (err) => {
    if (err) throw err
    console.log('complete');
})


