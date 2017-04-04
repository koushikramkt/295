     
      var map,map2,map3;
      function initMap() {
        map = new google.maps.Map(document.getElementById('demomap1'), {
          zoom: 14,
          center: {lat: 37.3342, lng: -121.8903},
          mapTypeId: 'terrain'
        });
           map2 = new google.maps.Map(document.getElementById('demomap2'), {
          zoom: 14,
          center: {lat:  37.368832, lng: -122.036346},
          mapTypeId: 'terrain'
        });
          map3 = new google.maps.Map(document.getElementById('demomap3'), {
          zoom: 14,
          center: {lat:  37.368832, lng: -122.036346},
          mapTypeId: 'terrain'
        });
          
     

        // Create a <script> tag and set the USGS URL as the source.
        var script = document.createElement('script');

        // This example uses a local copy of the GeoJSON stored at
        // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
        script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
        document.getElementsByTagName('head')[0].appendChild(script);

      }

      function eqfeed_callback(results) {
        var heatmapData = [];
        for (var i = 0; i < results.features.length; i++) {
          var coords = results.features[i].geometry.coordinates;
          var latLng = new google.maps.LatLng(coords[1], coords[0]);
          heatmapData.push(latLng);
        }
   
          
             var marker = new google.maps.Marker({
          position: {lat: 37.3342, lng: -121.8903},
          map: map,
          title: 'San Jose!'
        });
          
           var marker2 = new google.maps.Marker({
          position: {lat:  37.368832, lng: -122.036346},
          map: map2,
          title: 'SunnyVale!'
        }); 
      }
                    
                    
 