
var view = new ol.View({ // 地圖設置
  center: ol.proj.fromLonLat([121, 23.5]),
  // minZoom: 7.2,
  zoom: 7.5
})

var raster = new ol.layer.Tile({ // 仔入google maps
  source: new ol.source.XYZ({
    crossOrigin: 'anonymous',
    url: 'https://mt{0-3}.google.com/vt/lyrs=r&x={x}&y={y}&z={z}',
  }),
})

var vector = new ol.layer.Vector({ // 縣市邊界
  renderMode: 'image',
  source: new ol.source.Vector({
    url: 'https://raw.githubusercontent.com/Bourbon0212/Diana-Visualization/master/assets/twCounty.geojson',
    format: new ol.format.GeoJSON()
  }),
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: '#c7daf3',
      width: 1
    }),
  }),
})


var vectorSource = new ol.source.Vector({
});
var villLayer = new ol.layer.Vector({
  source: vectorSource
});

var my_layer1 = new ol.layer.Vector({
  source: vectorSource
});
var my_layer2 = new ol.layer.Vector({
  source: vectorSource
});


//---------------------------------------------
//generate map
var map = new ol.Map({ // 初始化地圖
  target: 'map',
  layers: [raster, vector, villLayer, my_layer1, my_layer2],
  // stop zooming with scroll
  view: view
});
