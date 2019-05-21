console.log('程式執行')

// var n = $('#input-text').val() 抓取input
// var $item = $('<div>')
// $item.text(n) 宣告一個變數寄住記憶體中的div(多加一個$代表他是JQuery)
// $item.attr('class', 'item') 加屬性給$item     attr(attrbuteName, value)
// $item.attr('class', 'item').text(n) 把字塞進去
// var $item = $('<div>').attr('class', 'item').text(n)

var compute = (array) => {
  var sum = 0
  for (var i = 0; i < array.length; i++) {
    sum += array[i]
  }
  var avg = sum / array.length

  var result = {
    "sum" : sum,
    "avg" : avg
  }

  return result
}


$('#clear').on('click', () => {
  $('#data').empty()
})

$('#input').on('click', () => {
  // 記憶體
  var n = $('#input-text').val() // 第一層，先抓數字
  var $item = $('<div>').attr('class', 'item').text(n) // 把文字插到上一層
  var $col = $('<div>').attr('class', 'col-1').append($item) // 把div插到上一個div
  // 插到網頁上
  $('#data').append($col)
})

// V1: For loop (Slow)
// $('#compute').on('click', () => {
//   // 找出所有的item
//   $items = $('.item')
//   var sum = 0
//   // 將所有item的text變成Number相加
//   for (var i = 0 ; i < $items.length; i++) {
//     var str = $($items[i]).text()
//     sum += Number(str)
//   }
//   var avg = sum / $items.length
//   // 插到網頁上
//   $('#result-sum').val(sum)
//   $('#result-avg').val(avg)
// })


// V2: each
$('#compute').on('click', () => {
  var array = []
  $('.item').each(function() {
    var value = Number($(this).text())
    array.push(value)
  })
  var result = compute(array)

  $('#result-sum').val(result.sum)
  $('#result-avg').val(result.avg)
})
