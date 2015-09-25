var FirebaseRx = require('firebase-rx');

var source = new FirebaseRx('https://sweltering-inferno-8171.firebaseio.com/kahu')
  .observe('child_added')

var playCommands = source.filter(function(command){
  return command.command == 'play'
})

playCommands.subscribe(function(x){
  console.log(x)
})

