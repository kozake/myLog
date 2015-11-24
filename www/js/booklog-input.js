var app = {
  initialize: function () {
    this.bindEvents();
  },
  bindEvents: function () {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  onDeviceReady: function () {
  }
};

app.initialize();

$(function () {

  var viewdata = {
    
    chartdata: {

    "config": {
      "title": "シングルページWebアプリケーション",
      "subTitle": "読み始めてから32日目です。",
      "type": "line",
      "useVal": "yes",
      "useMarker": "arc",
      "bg": "#fff",
      "textColor": "#000",
      "xColor": "rgba(100,100,100,0.3)",
      "maxY": 483,
      "minY": 0,
      "lineWidth": "3",
      "valYOffset": 10,
      "markerWidth": 15
    },
    "data": [
      ["日", "3/1", "3/2", "3/3", "3/4", "3/5", "3/6", "3/7"],
      ["シングル~", 30, 43, 50, 164, 175, 265, 378]
    ]
    }
  }

  ccchart.init('hoge', viewdata.chartdata);

  $("#datepicker").datepicker();

  new Vue({
    el: '#app',
    data: viewdata,
    methods: {
      doRegist: function () {
        alert('regist')
      }
    }
  })


});
