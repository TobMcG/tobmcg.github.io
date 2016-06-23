$(window).ready(function() {

	var map = L.map('map', {
		attributionControl: false,
	}).setView([51.505, -0.09], 13);

	var mapboxTiles = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidG9iaW5tY2ciLCJhIjoiY2lvYm5hNzk4MDRjaXZwa2oyemxxOW1wbSJ9.8DdOleAlRSYoMOX-7FVklg').addTo(map);

	var scenes = L.geoJson(scenesJSON, {
		onEachFeature: function(feature, layer) {
			layer.on('click', function() {
				$('#sidebar h2').html(feature.properties.name);
				$('#sidebar p').html(feature.properties.description);
			});
		},
	}).addTo(map);

	var bottomPadding = 0;
	var rightPadding = 0;
	if ($(window).width() < 700 && $(window).height() > 350) {
		bottomPadding = $('#sidebar').height()+30;
	} else {
		rightPadding = $('#sidebar').width()+30;
	}

	map.fitBounds(scenes.getBounds(), {
		paddingBottomRight: [rightPadding,bottomPadding],
	});

});

var scenesJSON = [{
    "type": "Feature",
    "properties": {
    	"name": "Uptown Swing",
    	"description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet magna et leo feugiat sodales. Nulla dapibus fermentum mattis. Etiam ligula ligula, scelerisque quis consectetur sed, fermentum sit amet urna. Integer luctus, lorem eget rutrum consectetur, felis risus interdum nulla, sed dapibus urna velit vel risus. Ut porta efficitur orci nec ullamcorper. Quisque pellentesque consectetur commodo. Phasellus semper pellentesque auctor. Praesent pharetra ornare sodales. Aliquam vel laoreet turpis. Pellentesque et orci ipsum. Ut sagittis ornare lacus, et pharetra justo venenatis vitae. Nam eget vulputate neque.',
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-93.266667, 44.983333],
    }
}, {
    "type": "Feature",
    "properties": {
    	"name": "Jumptown Swing",
    	"description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet magna et leo feugiat sodales. Nulla dapibus fermentum mattis. Etiam ligula ligula, scelerisque quis consectetur sed, fermentum sit amet urna. Integer luctus, lorem eget rutrum consectetur, felis risus interdum nulla, sed dapibus urna velit vel risus. Ut porta efficitur orci nec ullamcorper. Quisque pellentesque consectetur commodo. Phasellus semper pellentesque auctor. Praesent pharetra ornare sodales. Aliquam vel laoreet turpis. Pellentesque et orci ipsum. Ut sagittis ornare lacus, et pharetra justo venenatis vitae. Nam eget vulputate neque.',
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-89.4, 43.066667],
    }
}, {
    "type": "Feature",
    "properties": {
    	"name": "Step Into Swing",
    	"description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet magna et leo feugiat sodales. Nulla dapibus fermentum mattis. Etiam ligula ligula, scelerisque quis consectetur sed, fermentum sit amet urna. Integer luctus, lorem eget rutrum consectetur, felis risus interdum nulla, sed dapibus urna velit vel risus. Ut porta efficitur orci nec ullamcorper. Quisque pellentesque consectetur commodo. Phasellus semper pellentesque auctor. Praesent pharetra ornare sodales. Aliquam vel laoreet turpis. Pellentesque et orci ipsum. Ut sagittis ornare lacus, et pharetra justo venenatis vitae. Nam eget vulputate neque.',
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-93.620833, 41.590833],
    }
}];