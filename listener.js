var FirebaseRx = require('firebase-rx');

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

rolls.subscribe(function(x){
  console.log(x)
})

