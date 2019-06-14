// 當文件已經全載入至記憶體時，開始執行程式
$(document).ready(function() {

    $('#product-list').empty(); // 清空 product-list
    $('#page').hide()

    var items = null
    var search_items = []
    var pageCount = 20
    var showItems = (page) => {
        if (items == null) return
        var start = (page - 1) * pageCount
        var end = start + pageCount - 1 >= items.length-1 ? items.length-1 : start + pageCount - 1
        $('#product-list').empty();
        for (var i = start; i <= end; i++) {
            newItem(items[i])
        }
    }

    var newItem = (item) => {
        $img = $('<img>').attr('class', 'image').attr('src', item.image)
        $h3 = $('<h3>').attr('class', 'name').text(item.name)
        $p = $('<p>').attr('class', 'price').text('NT$ ' + item.price)

        $item = $('<div>').attr('class', 'item').append($img).append($h3).append($p)
        $col = $('<div>').attr('class', 'col-*').append($item)

        $('#product-list').append($col)
    }

    var newPage = (n) => {
        var pageNum = n / 20
        var thispage = 1

        pageNum = (n % 20 != 0) ? parseInt(pageNum + 1) : parseInt(pageNum)

        $('#page-number').empty()

        $la = $('<a>').attr('class', 'page-link').attr('href', '#').attr('tabindex', '-1').attr('aria-disabled', 'true').text('«')
        $lli = $('<li>').attr('class', 'page-item').attr('id', 'prev').addClass('disabled').append($la)

        $('#page-number').append($lli)

        // Case #1. 插入分頁數字 以及 點選數字bar
        for (var i = 1; i <= pageNum; i++) {
            $a = $('<a>').attr('id', i).attr('class', 'page-link').attr('href', '#').text(i)

            // 如果在第一頁就不能『上一頁』
            $a.on('click', function() {
                thispage = $(this).text()

                if (thispage != 1) {
                  $('#prev').removeClass('disabled')
                } else {
                  $('#prev').addClass('disabled')
                }

                if (thispage == pageNum) {
                  $('#next').addClass('disabled')
                } else {
                  $('#next').removeClass('disabled')
                }

                for (var j = 1; j <= pageNum; j++ ) {
                  $('#' + j).removeClass(' active')
                }

                $('#page-number #' + thispage).addClass(' active')
                showItems(Number(thispage))
                console.log('this page is ' + thispage);
            })


            $li = $('<li>').attr('class', 'page-item').attr('id', i).append($a)
            $('#page-number').append($li)

            if (i == 1) {
              $('#page-number #1').addClass(' active')
            }
        }

        $ra = $('<a>').attr('class', 'page-link').attr('href', '#').text('»')
        $rli = $('<li>').attr('class', 'page-item').attr('id', 'next').append($ra)
        $('#page-number').append($rli)

        // Case #2. 按『上一頁』
        $('#prev').on('click', function() {
            if (thispage > 1) {
              thispage--;
              $('#next').removeClass('disabled')
            }

            if (thispage != 1) {
              $('#prev').removeClass('disabled')
            } else {
              $('#prev').addClass('disabled')
            }
            for (var j = 1; j <= pageNum; j++ ) {
              $('#' + j).removeClass(' active')
            }

            $('#page-number #' + thispage).addClass(' active')
            showItems(Number(thispage))
            console.log('this page is ' + thispage);
        })

        // Case #3. 按『下一頁』
        $('#next').on('click', function() {
            if (thispage < pageNum) {
                thispage++;
                $('#prev').removeClass('disabled')
            }

            if (thispage == pageNum) {
              $('#next').addClass('disabled')
            } else {
              $('#next').removeClass('disabled')
            }
            for (var j = 1; j <= pageNum; j++ ) {
              $('#' + j).removeClass(' active')
            }

            $('#page-number #' + thispage).addClass(' active')
            showItems(Number(thispage))
            console.log('this page is ' + thispage);
        })
    }

    // 商品總攬
    $('#query').on('click', function() {
        $.get('https://js.kchen.club/B06303059/query', function(response) {
            if (response) {
                // 伺服器有回傳資料
                if (response.result) {
                    $('#product-list').empty();
                    // 資料庫有回傳資料
                    items = response.items

                    // 加了分頁效果，預設顯示第一頁
                    showItems(1)

                    // 顯示分頁和設定分頁的函式
                    $('#page').show()
                    newPage(items.length)

                } else {
                    $('#message').text('查無相關資料')
                    $('#dialog').modal('show')
                }
            } else {
                $('#message').text('伺服器出錯')
                $('#dialog').modal('show')
            }

            console.log(response)
        }, "json")
    })

    // 查詢關鍵字
    $('#search').on('click', function() {
        var key = $(input).val()
        if (key == '') {
          key = '小於好難喔'
        }
        console.log(key);

        $.get('https://js.kchen.club/B06303059/query', function(response) {
            if (response) {
                // 伺服器有回傳資料
                if (response.result) {
                    $('#product-list').empty();

                    items = null
                    search_items = []

                    // 資料庫有回傳資料
                    items = response.items
                    var current = ''

                    for (var i = 0; i < items.length; i++) {

                        if (items[i]['name'].indexOf(key) >= 0) {
                            search_items.push(items[i])
                        }
                    }

                    items = search_items
                    console.log(search_items);


                    // 加了分頁效果，預設顯示第一頁
                    showItems(1)

                    // 顯示分頁和設定分頁的函式
                    $('#page').show()
                    newPage(items.length)

                } else {
                    $('#message').text('查無相關資料')
                    $('#dialog').modal('show')
                }
            } else {
                $('#message').text('伺服器出錯')
                $('#dialog').modal('show')
            }

            console.log(response)
        }, "json")
    })

})
