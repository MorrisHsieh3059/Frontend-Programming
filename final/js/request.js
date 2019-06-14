var loadvill_check = 0;
var vill_json;

function loadVill(clickCheck, draw) { //load data via ajax

  if (clickCheck == 0) {
    $("#village option").remove();
    $("#village").append($("<option></option>").attr("value", "none").text("-"));
  }


  var url_load = "https://raw.githubusercontent.com/cartus0910/WebGIS/master/Final_Project/TW_Vill_simplified.geojson";

  $.ajax({
    url: url_load,
    dataType: "json",
    success: function(items) {
      vill_json = items;

      //console.log(vill_json);
      //console.log(draw);

      if (clickCheck == 1) {
        //console.log(draw);
        villVisual(items, draw);
      }
      if (draw == 2) {
        villVisual(items, draw)
      }
      if ($("#district").val() != 'none') {
        console.log(123);
        vill(items);
      }
    }
  });

  localStorage.clear();
  loadvill_check = 1;
}

//-----------------------------------------------------
function seven() { //load data via ajax
  var url7 = "https://raw.githubusercontent.com/cartus0910/WebGIS/master/Final_Project/case7_vill.txt";
  $.ajax({
    url: url7,
    dataType: "json",
    success: function(items) {

      if (val1 != '-' && val2 == '-' && val3 == '-') {
        city_table(items, "通過");
      }
      if (val1 != '-' && val2 != '-' && val3 == '-') {
        district_table(items, "通過");
      }
      if (val1 != '-' && val2 != '-' && val3 != '-') {
        vill_table(items, "通過");
      }
    }
  });
}

function eight() { //load data via ajax
  var url8 = "https://raw.githubusercontent.com/cartus0910/WebGIS/master/Final_Project/case8_vill.txt";
  $.ajax({
    url: url8,
    dataType: "json",
    success: function(items) {

      if (val1 != '-' && val2 == '-' && val3 == '-') {
        city_table(items, "通過");
      }
      if (val1 != '-' && val2 != '-' && val3 == '-') {
        district_table(items, "通過");
      }
      if (val1 != '-' && val2 != '-' && val3 != '-') {
        vill_table(items, "通過");
      }
    }
  });
}

function nine() { //load data via ajax
  var url9 = "https://raw.githubusercontent.com/cartus0910/WebGIS/master/Final_Project/case9_vill.txt";
  $.ajax({
    url: url9,
    dataType: "json",
    success: function(items) {

      if (val1 != '-' && val2 == '-' && val3 == '-') {
        city_table(items, "通過");
      }
      if (val1 != '-' && val2 != '-' && val3 == '-') {
        district_table(items, "通過");
      }
      if (val1 != '-' && val2 != '-' && val3 != '-') {
        vill_table(items, "通過");
      }
    }
  });
}

function ten() { //load data via ajax
  var url10 = "https://raw.githubusercontent.com/cartus0910/WebGIS/master/Final_Project/case10_vill.txt";
  $.ajax({
    url: url10,
    dataType: "json",
    success: function(items) {

      if (val1 != '-' && val2 == '-' && val3 == '-') {
        city_table(items, "通過");
      }
      if (val1 != '-' && val2 != '-' && val3 == '-') {
        district_table(items, "通過");
      }
      if (val1 != '-' && val2 != '-' && val3 != '-') {
        vill_table(items, "通過");
      }
    }
  });
}

function eleven() { //load data via ajax
  var url11 = "https://raw.githubusercontent.com/cartus0910/WebGIS/master/Final_Project/case11_vill.txt";
  $.ajax({
    url: url11,
    dataType: "json",
    success: function(items) {

      if (val1 != '-' && val2 == '-' && val3 == '-') {
        city_table(items, "通過");
      }
      if (val1 != '-' && val2 != '-' && val3 == '-') {
        district_table(items, "通過");
      }
      if (val1 != '-' && val2 != '-' && val3 != '-') {
        vill_table(items, "通過");
      }
    }
  });
}

function twelve() { //load data via ajax
  var url12 = "https://raw.githubusercontent.com/cartus0910/WebGIS/master/Final_Project/case12_vill.txt";
  $.ajax({
    url: url12,
    dataType: "json",
    success: function(items) {

      if (val1 != '-' && val2 == '-' && val3 == '-') {
        city_table(items, "通過");
      }
      if (val1 != '-' && val2 != '-' && val3 == '-') {
        district_table(items, "通過");
      }
      if (val1 != '-' && val2 != '-' && val3 != '-') {
        vill_table(items, "通過");
      }
    }
  });
}

function thirteen() { //load data via ajax
  var url13 = "https://raw.githubusercontent.com/cartus0910/WebGIS/master/Final_Project/case13_vill.txt";
  $.ajax({
    url: url13,
    dataType: "json",
    success: function(items) {

      if (val1 != '-' && val2 == '-' && val3 == '-') {
        city_table(items, "不通過");
      }
      if (val1 != '-' && val2 != '-' && val3 == '-') {
        district_table(items, "不通過");
      }
      if (val1 != '-' && val2 != '-' && val3 != '-') {
        vill_table(items, "不通過");
      }
    }
  });
}

function fourteen() { //load data via ajax
  var url14 = "https://raw.githubusercontent.com/cartus0910/WebGIS/master/Final_Project/case14_vill.txt";
  $.ajax({
    url: url14,
    dataType: "json",
    success: function(items) {

      if (val1 != '-' && val2 == '-' && val3 == '-') {
        city_table(items, "不通過");
      }
      if (val1 != '-' && val2 != '-' && val3 == '-') {
        district_table(items, "不通過");
      }
      if (val1 != '-' && val2 != '-' && val3 != '-') {
        vill_table(items, "不通過");
      }
    }
  });
}

function fifteen() { //load data via ajax
  var url15 = "https://raw.githubusercontent.com/cartus0910/WebGIS/master/Final_Project/case15_vill.txt";
  $.ajax({
    url: url15,
    dataType: "json",
    success: function(items) {

      if (val1 != '-' && val2 == '-' && val3 == '-') {
        city_table(items, "不通過");
      }
      if (val1 != '-' && val2 != '-' && val3 == '-') {
        district_table(items, "不通過");
      }
      if (val1 != '-' && val2 != '-' && val3 != '-') {
        vill_table(items, "不通過");
      }
    }
  });
}

function sixteen() { //load data via ajax
  var url16 = "https://raw.githubusercontent.com/cartus0910/WebGIS/master/Final_Project/case16_vill.txt";
  $.ajax({
    url: url16,
    dataType: "json",
    success: function(items) {

      if (val1 != '-' && val2 == '-' && val3 == '-') {
        city_table(items, "通過");
      }
      if (val1 != '-' && val2 != '-' && val3 == '-') {
        district_table(items, "通過");
      }
      if (val1 != '-' && val2 != '-' && val3 != '-') {
        vill_table(items, "通過");
      }
    }
  });
}
