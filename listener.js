var FirebaseRx = require('firebase-rx');

var source = new FirebaseRx('https://sweltering-inferno-8171.firebaseio.com/kahu')
  .observe('child_added')

source.subscribe(function(x){
  console.log(x)

})

