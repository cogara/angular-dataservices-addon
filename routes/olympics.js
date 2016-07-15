var router = require('express').Router();
var path = require('path');

var synchronizedSwimming = [
  {sport: 'Synchroized Swimming', name: 'Anita Alvarez', hometown: 'Kenmore, NY'},
  {sport: 'Synchroized Swimming', name: 'Mariya Koroleva', hometown: 'Concord, CA'}
];

var tableTennis = [
  {sport: 'Table Tennis', name: 'Yijun Feng', hometown: 'Atlanta, GA'},
  {sport: 'Table Tennis', name: 'Kanak Jha', hometown: 'Milpitas, CA'},
  {sport: 'Table Tennis', name: 'Timothy Wang', hometown: 'Houston, TX'},
  {sport: 'Table Tennis', name: 'Jennifer Wu', hometown: 'Fort Lee, NJ'},
  {sport: 'Table Tennis', name: 'Lily Zhang', hometown: 'Palo Alto, CA'},
  {sport: 'Table Tennis', name: 'Jaiqi Zheng', hometown: 'Fremont, CA'}
];

var badminton = [
  {sport: 'Badminton', name: 'Phillip Chew', hometown: 'Orange, CA'},
  {sport: 'Badminton', name: 'Eva Lee', hometown: 'Diamond Bar, CA'},
  {sport: 'Badminton', name: 'Paula Lynn Obanana', hometown: 'West Covina, CA'},
  {sport: 'Badminton', name: 'Sattawat Pongnairat', hometown: 'Orange, CA'},
  {sport: 'Badminton', name: 'Howard Shu', hometown: 'Anaheim, CA'},
  {sport: 'Badminton', name: 'Jamie Subandhi', hometown: 'Westminster, CA'},
  {sport: 'Badminton', name: 'Iris Wang', hometown: 'Arcadia, CA'}
];

var wrestling = [
  {sport: 'Wrestling', name: 'Haley Augello', hometown: 'Lockport, IL'},
  {sport: 'Wrestling', name: 'Andy Bisek', hometown: 'Chaska, MN'},
  {sport: 'Wrestling', name: 'Jordan Burroughs', hometown: 'Sicklerville, NJ'},
  {sport: 'Wrestling', name: 'J\'den Cox', hometown: 'Columbia, MO'},
  {sport: 'Wrestling', name: 'Daniel Dennis', hometown: 'Ingleside, IL'},
  {sport: 'Wrestling', name: 'Tervel Dlagnev', hometown: 'Columbus, OH'},
  {sport: 'Wrestling', name: 'Adeline Gray', hometown: 'Denver, CO'},
  {sport: 'Wrestling', name: 'Helen Maroulis', hometown: 'Rockville, MD'},
  {sport: 'Wrestling', name: 'Frank Molinaro', hometown: 'Barnegat, NJ'},
  {sport: 'Wrestling', name: 'Elena Pirozhkova', hometown: 'Greenfield, MA'},
  {sport: 'Wrestling', name: 'Ben Provisor', hometown: 'Colorado Springs, CO'},
  {sport: 'Wrestling', name: 'Robby Smith', hometown: 'San Ramon, CA'},
  {sport: 'Wrestling', name: 'Kyle Snyder', hometown: 'Woodbine, MD'},
  {sport: 'Wrestling', name: 'Jesse Thielke', hometown: 'Germantown, WI'}
];

var gymnastics = [
  {sport: 'Gymnastics', name: 'Nicole Ahsinger', hometown: 'San Diego, CA'},
  {sport: 'Gymnastics', name: 'Simone Biles', hometown: 'Spring, TX'},
  {sport: 'Gymnastics', name: 'Chris Brooks', hometown: 'Houston, TX'},
  {sport: 'Gymnastics', name: 'Jake Dalton', hometown: 'Sparks, NV'},
  {sport: 'Gymnastics', name: 'Logan Dooley', hometown: 'Lake Forest, CA'},
  {sport: 'Gymnastics', name: 'Gabby Douglas', hometown: 'Los Angeles, CA'},
  {sport: 'Gymnastics', name: 'Kiana Eide', hometown: 'St. Francis, MN'},
  {sport: 'Gymnastics', name: 'Laurie Hernandez', hometown: 'Old Bridge, NJ'},
  {sport: 'Gymnastics', name: 'Alisa Kano', hometown: 'New York, NY'},
  {sport: 'Gymnastics', name: 'Madison Kocian', hometown: 'Dallas, TX'},
  {sport: 'Gymnastics', name: 'Sam Mikulak', hometown: 'Newport Beach, CA'},
  {sport: 'Gymnastics', name: 'Natalie McGiffert', hometown: 'Topanga, CA'},
  {sport: 'Gymnastics', name: 'Alex Naddour', hometown: 'Gilbert, AZ'},
  {sport: 'Gymnastics', name: 'John Orozco', hometown: 'Bronx, NY'},
  {sport: 'Gymnastics', name: 'Aly Raisman', hometown: 'Needham, MA'},
  {sport: 'Gymnastics', name: 'Monica Rokhman', hometown: 'Northbrook, IL'},
  {sport: 'Gymnastics', name: 'Kristen Shaldybin', hometown: 'Brooklyn, NY'},
  {sport: 'Gymnastics', name: 'Laura Zeng', hometown: 'Libertyville, IL'}
];


function randomOlympian(array, length) {
  var i = Math.floor(Math.random() * (length));
  return array[i];
};


//var randomSynchronizedSwimming = randomOlympian(synchronizedSwimming, 2);
// var randomTableTennis = randomOlympian(tableTennis, 6);
// var randomBadminton = randomOlympian(badminton, 7);
// var randomWrestling = randomOlympian(wrestling, 14);
// var randomGymnastics = randomOlympian(gymnastics, 18);

// /synchronizedSwimming
router.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
})

router.get('/synchronizedSwimming', function(request, response){
  var randomSynchronizedSwimming = randomOlympian(synchronizedSwimming, 2);
  response.send(randomSynchronizedSwimming);
})

router.get('/tableTennis', function(request, response){
  var randomTableTennis = randomOlympian(tableTennis, 6);
  response.send(randomTableTennis);
})

router.get('/badminton', function(request, response){
  var randomBadminton = randomOlympian(badminton, 7);
  response.send(randomBadminton);
})

router.get('/wrestling', function(request, response){
  var randomWrestling = randomOlympian(wrestling, 14);
  response.send(randomWrestling);
})

router.get('/gymnastics', function(request, response){
  var randomGymnastics = randomOlympian(gymnastics, 18);
  response.send(randomGymnastics);
})

//var randomOlympianArray = [randomSynchronizedSwimming, randomTableTennis, randomBadminton, randomWrestling, randomGymnastics];

// router.get('/', function(request, response){
//   var randomSynchronizedSwimming = randomOlympian(synchronizedSwimming, 2);
//   var randomTableTennis = randomOlympian(tableTennis, 6);
//   var randomBadminton = randomOlympian(badminton, 7);
//   var randomWrestling = randomOlympian(wrestling, 14);
//   var randomGymnastics = randomOlympian(gymnastics, 18);
//   var randomOlympianArray = [randomSynchronizedSwimming, randomTableTennis, randomBadminton, randomWrestling, randomGymnastics];
//
//   console.log(randomOlympianArray);
//   response.send(randomOlympianArray);
// })



module.exports = router;
