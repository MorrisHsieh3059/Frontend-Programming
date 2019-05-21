
var random = (start, end) => {
  // domain
  var n = Math.abs(end - start) + 1
  // times up
  var r = Math.random() * n
  // Floor
  r = Math.floor(r)
  // alter to start at 1
  r = r + ( (start <= end) ? start : end )

  return r
}

// var dealOne = () => {
//   var r = random(1, 52)
//   var img0 = $('#data img').get(0) // html element
//   var $img0 = $(img0) // transform hmtl element into jQuery element
//
//   $img0.attr('src', '../img/pic' + r + '.png' )
// }

// swap the ath card for bth card; vice versa
var swap = (a, b) => {
  var img = $('#data img').get(a) // html element
  var $img = $(img) // transform hmtl element into jQuery element
  $img.attr('src', './img/pic' + b + '.png' )
}

var dealFive = () => {

  // generate 52 new poke cards
  var allPoker = []
  for (var i = 1; i <= 52; i++) {
    allPoker.push(i)
  }

  // shuffle cards
  var n = random(100, 1000)

  for (var i = 0; i < n; i++) {
    var r = random(0, 51) // accords with the order in an array
    var temp = allPoker[r] // take the rth card out

    // swap the rth card and 0th card
    allPoker[r] = allPoker[0]
    allPoker[0] = temp
  }

  // show the beginning five cards on the screen
  for (var i = 0; i < 5; i++) {
    swap(i, allPoker[i])
  }

}
