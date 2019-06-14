// 把村里結果塞進Table

function vill_table(items, pass) {

  var id = document.getElementById("village");
  var value = id.options[id.selectedIndex].text;
  var yes_vote = 0;
  var no_vote = 0;
  var spoilt = 0;
  var all = 0;

  for (i in items) {

    if (items[i]["村里"] == value) {
      yes_vote = items[i]["yes_vote"];
      no_vote = items[i]["no_vote"];
      spoilt = items[i]["spoilt"];
      all = yes_vote + no_vote + spoilt;

      $("#table1 tr").remove();
      var tr = $('#table1')
        .append($('<tr />').append($('<td />').html("同意"))
        .append($('<td />').html(yes_vote + "票"))
        .append($('<td />').html(Math.round(yes_vote/all*100 * 100)/100 + "%")))
        .append($('<tr />').append($('<td />').html("不同意"))
        .append($('<td />').html(no_vote + "票"))
        .append($('<td />').html(Math.round(no_vote/all*100 * 100)/100 + "%")))
        .append($('<tr />').append($('<td />').html("無效票"))
        .append($('<td />').html(spoilt + "票"))
        .append($('<td />').html("")))
        .append($('<tr />').append($('<td />').html("投票人數")).append($('<td />').html(all)).append($('<td />').html("")))
        .append($('<tr />').append($('<td />').html("投票率")).append($('<td />').html(Math.round(all/items[i]["population"] *100 *100)/100 + "%")).append($('<td />').html("")))
        .append($('<tr />').append($('<td />').html("該案全國投票結果")).append($('<td />').html(pass)).append($('<td />').html("")));
    }
  }
}


function district_table(items, pass) {

  var id = document.getElementById("district");
  var value = id.options[id.selectedIndex].text;
  var yes_vote = 0;
  var no_vote = 0;
  var spoilt = 0;
  var all = 0;
  var pop = 0;

  for (i in items) {

    if (items[i]["行政區"] == value) {
      yes_vote = yes_vote + items[i]["yes_vote"];
      no_vote = no_vote + items[i]["no_vote"];
      spoilt = spoilt + items[i]["spoilt"];
      all =  all + items[i]["all_vote"];
      pop = pop + items[i]["population"]

      $("#table1 tr").remove();
      var tr = $('#table1')
        .append($('<tr />').append($('<td />').html("同意"))
        .append($('<td />').html(yes_vote + "票"))
        .append($('<td />').html(Math.round(yes_vote/all*100 * 100)/100 + "%")))
        .append($('<tr />').append($('<td />').html("不同意"))
        .append($('<td />').html(no_vote + "票"))
        .append($('<td />').html(Math.round(no_vote/all*100 * 100)/100 + "%")))
        .append($('<tr />').append($('<td />').html("無效票"))
        .append($('<td />').html(spoilt + "票"))
        .append($('<td />').html("")))
        .append($('<tr />').append($('<td />').html("投票人數")).append($('<td />').html(all)).append($('<td />').html("")))
        .append($('<tr />').append($('<td />').html("投票率")).append($('<td />').html(Math.round(all/pop *100 *100)/100 + "%")).append($('<td />').html("")))
        .append($('<tr />').append($('<td />').html("該案全國投票結果")).append($('<td />').html(pass)).append($('<td />').html("")));
    }
  }
}

function city_table(items, pass) {

  var id = document.getElementById("city");
  var value = id.options[id.selectedIndex].text;
  var yes_vote = 0;
  var no_vote = 0;
  var spoilt = 0;
  var all = 0;
  var pop = 0;

  for (i in items) {

    if (items[i]["縣市"] == value) {
      yes_vote = yes_vote + items[i]["yes_vote"];
      no_vote = no_vote + items[i]["no_vote"];
      spoilt = spoilt + items[i]["spoilt"];
      all =  all + items[i]["all_vote"];
      pop = pop + items[i]["population"]

      $("#table1 tr").remove();
      var tr = $('#table1')
        .append($('<tr />').append($('<td />').html("同意"))
        .append($('<td />').html(yes_vote + "票"))
        .append($('<td />').html(Math.round(yes_vote/all*100 * 100)/100 + "%")))
        .append($('<tr />').append($('<td />').html("不同意"))
        .append($('<td />').html(no_vote + "票"))
        .append($('<td />').html(Math.round(no_vote/all*100 * 100)/100 + "%")))
        .append($('<tr />').append($('<td />').html("無效票"))
        .append($('<td />').html(spoilt + "票"))
        .append($('<td />').html("")))
        .append($('<tr />').append($('<td />').html("投票人數")).append($('<td />').html(all)).append($('<td />').html("")))
        .append($('<tr />').append($('<td />').html("投票率")).append($('<td />').html(Math.round(all/pop *100 *100)/100 + "%")).append($('<td />').html("")))
        .append($('<tr />').append($('<td />').html("該案全國投票結果")).append($('<td />').html(pass)).append($('<td />').html("")));
    }
  }
}
