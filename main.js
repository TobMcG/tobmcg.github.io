var width = parseInt($(window).width()),
    height = 0.4*parseInt($(window).height()),
    velocity = 0.005,
    then = Date.now()
    mousein = Date.now(),
    animateBool = false
    elapsedBool = false;

var projection = d3.geo.orthographic()
    .scale(height*5.5)
    .translate([width*0.2, height*5.7])
    .clipAngle(90);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

$(window).ready(function() {

  var land = topojson.feature(world50m_35_dissolved, world50m_35_dissolved.objects.ne_50m_admin_0_countries_lakes);
  var ocean = topojson.feature(bounds50m, bounds50m.objects.ne_50m_wgs84_bounding_box.geometries[0]);
  var countries = topojson.mesh(world50m_35, world50m_35.objects.ne_50m_admin_0_countries_lakes, function(a, b) { return a !== b; });

  svg.append("path")
      .datum(ocean)
      .attr("class", "glow")
      .attr("d", path);

  svg.append("path")
      .datum(ocean)
      .attr("class", "ocean")
      .attr("d", path);

  svg.append("path")
      .datum(land)
      .attr("class", "land")
      .attr("d", path);

  svg.append("path")
      .datum(countries)
      .attr("class", "countries")
      .attr("d", path);

  d3.timer(animate);

  $('#timestamp').on('mouseover', function() {

    animateBool = true;
    elapsedBool = false;
    $('#elapsed').show();
    $('path.glow').css('stroke', 'red');
    mousein = Date.now();
    d3.timer(function() {
      elapsedms = Date.now() - mousein;
      elapsed = new Date(elapsedms);
      $('#elapsed').html('ELAPSED'
        + ' ' + padZerosToLength((elapsedms/10000000).toString().substring(0,1),19)
        + ':' + padZerosToLength(elapsed.getMinutes().toString(), 2)
        + ':' + padZerosToLength(elapsed.getSeconds().toString(), 2)
        + '.' + padZerosToLength(elapsed.getMilliseconds().toString(), 3)
      );
      return elapsedBool;
    });

  }).on('mouseout', function() {

    animateBool = false;
    elapsedBool = true;
    $('#elapsed').hide();
    $('path.glow').css('stroke', '');
    elapsed = Date.now() - mousein;
    then = then + elapsed;
    d3.timer(animate);

  });

  $('path.land, path.ocean').on('mouseover', function() {
    
    $('body').css('background', 'white');
    $('#timestamp, #title').css('color', 'rgba(217,217,217,1)');
    $('path.land').css('fill', 'rgba(179,222,105,1)');
    $('path.ocean').css('fill', 'rgba(128,177,211,1)');
    $('path.countries').css('stroke', 'rgba(179,222,105,1)');
    $('path.glow').css('stroke', 'rgba(128,177,211,1)');

  }).on('mouseout', function() {
    
    $('body').css('background', '');
    $('#timestamp, #title').css('color', '');
    $('path.land').css('fill', '');
    $('path.ocean').css('fill', '');
    $('path.countries').css('stroke', '');
    $('path.glow').css('stroke', '');

  });

});

function animate() {

  var ms = Date.now();
  var now = new Date(ms);
  var displayNow = now.toString().substring(0,15)
  + '' + now.toString().substring(15,24)
  + '.' + padZerosToLength(now.getMilliseconds().toString(), 3)
  + '' + now.toString().substring(24,33);

  $('#timestamp').html(displayNow.toUpperCase());

  var angle = velocity * (ms - then);
  var rotate = [-angle,0,30];
  projection.rotate(rotate);
  svg.selectAll("path.land").attr("d", path);
  svg.selectAll("path.countries").attr("d", path);

  return animateBool;

}

function padZerosToLength(string, length) {

  var difference = length-string.length;
  return '0'.repeat(difference)+string;

}