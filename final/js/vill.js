

// 下拉式選單+入village

function vill(geojson){
  county_val = $("#city").val();
  dist_val = $("#district").val();
  value = data[county_val][dist_val];
  //console.log(geojson["features"][0]["properties"]["TOWNNAME"]);

  for(i in geojson["features"]){
    town = geojson["features"][i]["properties"]["TOWNNAME"]
    if(town == value){
      var tr=$('#village').append($('<option />').html(geojson["features"][i]["properties"]["VILLNAME"]))
    }
  }

}
