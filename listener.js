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
]

rolls.subscribe(function(x){
  for(i=0; i< astleyImages.length; i++){
	var a = astleyImages[i]
	ref.push({command: "draw " + a})
  }
  console.log(x)
})

