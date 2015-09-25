var fb = require('firebase')
var FirebaseRx = require('firebase-rx');

ref = new fb('https://sweltering-inferno-8171.firebaseio.com/kahu')

var source = new FirebaseRx('https://sweltering-inferno-8171.firebaseio.com/kahu')
  .observe('child_added')

var values = source.map(function(item){
  return item.snapshot.val()
})

var hasCommands = values.filter(function(value){
  return value.command
})

var commands = hasCommands.map(function(value){
  return value.command
})

var playCommands = commands.filter(function(command){
  return command.split(' ')[0] == 'play'
})

var playUrlCommands = playCommands.filter(function(playCommand){
  var argument = playCommand.split(' ')[1]
  return argument.match(/http/)
})

var rolls = playUrlCommands.filter(function(playUrlCommand){
  return playUrlCommand.match(/astley/)
})

var astleyImages = [
  'http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/insert_main_wide_image/public/rick-astley.jpg?itok=m74SoPZy',
  'http://img1.wikia.nocookie.net/__cb20130318151721/epicrapbattlesofhistory/images/6/6d/Rick-astley.jpg',
  'http://www.nrgm.fi/wp-content/uploads/2012/02/RickAStley1987.jpg',
  'http://i234.photobucket.com/albums/ee136/suwarnaadi/hair/rick-astley-80s-hairstyle.jpg',
  'http://dayintechhistory.com/wp-content/uploads/2013/03/rick-astley-dayintechhistory-com.jpg',
  'https://theurbanpastor.files.wordpress.com/2012/03/rick_astley.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/f/f9/Rick_Astley_Tivoli_Gardens.jpg',
  'http://images5.fanpop.com/image/photos/31100000/He-s-soo-cute-rick-astley-31190444-620-349.png',
  'http://www.mtv.com/crop-images/2013/09/04/Rick%20Astley%20Getty%20Scott%20Campbell%202013.jpg',
  'http://www.thetimes.co.uk/tto/multimedia/archive/00184/43501444_astley_184349c.jpg',
  'http://i.ytimg.com/vi/dQw4w9WgXcQ/sddefault.jpg',
  'http://cps-static.rovicorp.com/3/JPG_400/MI0002/749/MI0002749431.jpg?partner=allrovi.com',
  'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQIfltuJ9dSpQmJJlB5G4IqLy_FvcL1adUXRZx_7UAFKMcTdH6IAQ',
  'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSeQbPaWFC08ZV8VLqPbwppHcEwCmYaj2Kbj38wKqELXzO_s9_9',
  'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQb_84Qhfr0xvcuc6f7vMERH9CiNS_Rs0xHYXrBizroyNx-IEAJyQ',
]

rolls.subscribe(function(x){
  for(i=0; i< astleyImages.length; i++){
	var a = astleyImages[i]
	ref.push({command: "draw " + a})
  }
  console.log(x)
})

