//condition to load case
var val1, val2, val3, val4;

function condition() {

  id = document.getElementById("city");
  val1 = id.options[id.selectedIndex].text;
  id = document.getElementById("district");
  val2 = id.options[id.selectedIndex].text;
  id = document.getElementById("village");
  val3 = id.options[id.selectedIndex].text;
  id = document.getElementById("ref2");
  val4 = id.options[id.selectedIndex].value;


  // console.log(val1);
  // console.log(val2);
  //console.log(val4);
  if (val1 != '-' && val4 == "7") {
    //console.log(123);
    seven();
  }

  if (val1 != '-' && val4 == "8") {
    //console.log(123);
    eight();
  }

  if (val1 != '-' && val4 == "9") {
    //console.log(123);
    nine();
  }
  if (val1 != '-' && val4 == "10") {
    //console.log(123);
    ten();
  }
  if (val1 != '-' && val4 == "11") {
    //console.log(123);
    eleven();
  }
  if (val1 != '-' && val4 == "12") {
    //console.log(123);
    twelve();
  }
  if (val1 != '-' && val4 == "13") {
    //console.log(123);
    thirteen();
  }
  if (val1 != '-' && val4 == "14") {
    //console.log(123);
    fourteen();
  }
  if (val1 != '-' && val4 == "15") {
    //console.log(123);
    fifteen();
  }
  if (val1 != '-' && val4 == "16") {
    //console.log(123);
    sixteen();
  }

}
