var vm = new Vue({
  el: '#app',
  data: {

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
    },
    read_book_date: "2015/11/28",
    read_book_info: "平均: 20ページ 前回: 32ページ"
  },

  ready: function () {
    ccchart.init('hoge', this.chartdata);

    $("#datepicker").datepicker()

    this.bindEvents();
  },

  methods: {
    bindEvents: function () {
      document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
      console.log('// デバイス API が安全に使用可能になったよ！')
    },
    doRegist: function () {
      this.chartdata.data = [
        ["日", "3/1", "3/2", "3/3", "3/4", "3/5", "3/6", "3/7", "3/8"],
        ["シングル~", 30, 43, 50, 164, 175, 265, 378, 398]
      ]
      ccchart.init('hoge', this.chartdata)
    }
  }
})
