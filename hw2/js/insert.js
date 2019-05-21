// 當文件已經全部載入致記憶體十，開始執行程式
// $(document).raedy(function)
$(() => {

    $('#insert').on('click', function() {

    // 取得商品資料
    var data = {
        item: {
            name: $('#inputProductName').val(),
            price: Number($('#inputProductPrice').val()), // Number()
            count: +$('#inputProductCount').val(),        // +        : 兩個都是變成數字
            image: $('#inputProductImage').val(),
        }
    }

    // 新增商品
    $.post('https://js.kchen.club/B12345678/insert', data, function(response) {
        if (response) {
            // 伺服器有回傳資料
            if (response.result) {
                $('#message').text('新增成功')
                console.log(response.item)
                $('#dialog').modal('show')
            } else {
                $('#message').text('新增失敗<br>' + response.message)
                $('#dialog').modal('show')
            }
        } else {
            $('#message').text('伺服器出錯')
            $('#dialog').modal('show')
        }
    })
})
})
