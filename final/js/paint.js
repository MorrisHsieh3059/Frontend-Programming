var villVisualCheck;

function villVisual(items, draw) {

  if (draw == 1) {
    // if (villVisualCheck == 1) {
    //   villLayer.getSource().clear();
    // }


    // console.log(items);
    var count = 0,
      coor = new Array;
    var new_items = {
      "type": "FeatureCollection",
      "name": "TW_Vill_simplified",
      "crs": {
        "properties": {
          "name": "urn:ogc:def:crs:EPSG::3824"
        },
        "type": "name"
      },
      "features": {}
    };
    console.log(items);

    for (i in items["features"]) {
      coor = [];

      for (j in items["features"][i]['geometry']['coordinates'][0]) {
        // console.log(i);
        // coor[i]
        coor[j] = ol.proj.fromLonLat(items["features"][i]['geometry']['coordinates'][0][j]);
        // count1 = count1 + 1;
      }

      if(featureName == '桃園縣'){
        featureName = '桃園市'
      }

      if (items['features'][i]["properties"]["COUNTYNAME"] == featureName) {
        //console.log(items['features'][i]["properties"]["VILLNAME"]);
        new_items['features'][count] = items['features'][i];
        for (j in new_items['features'][count]["geometry"]["coordinates"][0]) {
          new_items['features'][count]["geometry"]["coordinates"][0][j] = coor[j]
        }
        count = count + 1;
        //console.log(coor);
      }
    }




    new_items["features"] = Object.values(new_items["features"])


    var feature = (new ol.format.GeoJSON()).readFeatures(new_items);

    vectorSource = new ol.source.Vector({
      features: feature
    });

    // console.log(vectorSource);
    var style = new ol.style.Style({
      fill: new ol.style.Fill({
        color: 'rgba(255, 255, 255, 0.6)'
      }),
      stroke: new ol.style.Stroke({
        color: '#319FD3',
        width: 1
      }),
      text: new ol.style.Text({
        font: '12px Calibri,sans-serif',
        fill: new ol.style.Fill({
          color: '#000'
        }),
        stroke: new ol.style.Stroke({
          color: '#fff',
          width: 3
        })
      })
    });
    // console.log(featureName);
    var villLayer = new ol.layer.Vector({
      source: vectorSource,
      style: function(feature) {
        style.getText().setText(feature.get('VILLNAME'));
        return style;
      }
    });

    map.getLayers().getArray()[2] = villLayer;

    // villLayer.setSource(vectorSource);


    //map.removeLayer(villLayer);
    // l.setLayer(villLayer);
    callDraw1(vectorSource);
  } else if (draw == 2) {
    console.log(213);
    callDraw2(vectorSource);
  }


  villVisualCheck = 1;
}
