
var client = new Keen({
    projectId: "591fa0d495cfc9addc247f3a",
    readKey: "7ad97f6b7796b52e0fd4dc66432fd9bba544727c18c66a326ad6c5e2fd1a4b4857d6c9a26bc450c29c81edc550cdb79fc4ebf292e572d8f2fd8ec17f5e37297062ce62a5be90a354841cd29861994a810e91474943f6f98f97cf9017fd4d3a30"
});


Keen.ready(function(){


  // ----------------------------------------
  // Light Trigger Timeline
  // ----------------------------------------
  var light_timeline = new Keen.Query("count_unique", {
    eventCollection: "temperature",
    targetProperty: "light-trigger",
    interval: "hourly",
    timeframe: {
      start: "2017-05-18T00:00:00.000Z",
      end: "2017-06-02T00:00:00.000Z"
    }
    // timeframe: "today"
  });

  client.draw(light_timeline, document.getElementById("chart-05"), {
    chartType: "linechart",
    title: " ",
    height: 300,
    width: "auto"
  });

  // ----------------------------------------
  // Pageviews Area Chart
  // ----------------------------------------
  var pageviews_timeline = new Keen.Query("count", {
   eventCollection: "temperature",
    interval: "hourly",
    groupBy: "temperature",
     timeframe: {
      start: "2017-05-18T00:00:00.000Z",
      end: "2017-06-02T00:00:00.000Z"
    }
  });
  client.draw(pageviews_timeline, document.getElementById("chart-07"), {
    chartType: "areachart",
    title: false,
    height: 300,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "80%"
      },
      isStacked: true
    }
  });

  // ----------------------------------------
  // Sound Trigger Timeline
  // ----------------------------------------
  var sound_timeline = new Keen.Query("count_unique", {
    eventCollection: "temperature",
    targetProperty: "sound-trigger",
    interval: "hourly",
    timeframe: {
      start: "2017-05-18T00:00:00.000Z",
      end: "2017-06-02T00:00:00.000Z"
    }
    // timeframe: "today"
  });

  client.draw(sound_timeline, document.getElementById("chart-06"), {
    chartType: "linechart",
    title: " ",
    height: 250,
    width: "auto"
  });

  // ----------------------------------------
  // temp
  // ----------------------------------------

  var temperature = new Keen.Query("average", {
    eventCollection: "temperature",
    targetProperty: "temperature",
    timeframe: {
      start: "2017-05-18T00:00:00.000Z",
      end: "2017-06-02T00:00:00.000Z"
    }
    //timeframe: "today"
  });

  $("#chart-01").knob({
    'angleArc':250,
    'angleOffset':-125,
    'readOnly':true,
    'min':-100,
    'max':120,
    'fgColor': Keen.Dataviz.defaults.colors[1]
  });

  client.run(temperature, function(err, res){
    $("#chart-01").val(res.result).trigger('change');
  });

  // ----------------------------------------
  // humidity
  // ----------------------------------------

  var humidity = new Keen.Query("count", {
    eventCollection: "temperature",
    targetProperty: "temperature",
    timeframe: {
      start: "2017-05-18T00:00:00.000Z",
      end: "2017-06-02T00:00:00.000Z"
    }
    // timeframe: "today"
  });

  $("#chart-02").knob({
    'angleArc':250,
    'angleOffset':-125,
    'readOnly':true,
    'min':0,
    'max':90,
    'fgColor': Keen.Dataviz.defaults.colors[0]
  });

  client.run(humidity, function(err, res){
    $("#chart-02").val(res.result).trigger('change');
  });

  // ----------------------------------------
  // Light
  // ----------------------------------------

  var light = new Keen.Query("average", {
    eventCollection: "climate",
    targetProperty: "light",
    timeframe: {
      start: "2014-10-06T00:00:00.000",
      end: "2014-10-07T00:00:00.000"
    }
    // timeframe: "today"
  });

  $("#chart-03").knob({
    'angleArc':250,
    'angleOffset':-125,
    'readOnly':true,
    'step':0.01,
    'min':0,
    'max':50,
    'fgColor': Keen.Dataviz.defaults.colors[2]
  });

  client.run(light, function(err, res){
    $("#chart-03").val(res.result*100).trigger('change');
  });

  // ----------------------------------------
  // Sound
  // ----------------------------------------

  var sound = new Keen.Query("average", {
    eventCollection: "climate",
    targetProperty: "sound",
    timeframe: {
      start: "2014-10-06T00:00:00.000",
      end: "2014-10-07T00:00:00.000"
    }
    // timeframe: "today"
  });

  $("#chart-04").knob({
    'angleArc':250,
    'angleOffset':-125,
    'readOnly':true,
    'step':0.01,
    'min':0,
    'max':100,
    'fgColor': Keen.Dataviz.defaults.colors[3]
  });

  client.run(sound, function(err, res){
    $("#chart-04").val(res.result*100).trigger('change');
  });


});
