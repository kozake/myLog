/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
    }
};

app.initialize();

new Vue({
  el: '#app',
  data: {
  },
  methods: {
    doRegist: function () {
      alert('regist')
    }
  }
})
      alert('regist')

var chartdata74 = {

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
    ["日","3/1","3/2","3/3","3/4","3/5","3/6","3/7"],
    ["シングル~",30,43,50,164,175,265,378]
  ]
};

ccchart.init('hoge', chartdata74);

$(function() {
  $( "#datepicker" ).datepicker();
});
