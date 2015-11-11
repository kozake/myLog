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
 $(document).ready(function() {
   $(".animsition").animsition({
     inClass: 'fade-in',
     outClass: 'fade-out',
     inDuration: 1500,
     outDuration: 800,
     linkElement: '.animsition-link',
     // e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
     loading: true,
     loadingParentElement: 'body', //animsition wrapper element
     loadingClass: 'animsition-loading',
     loadingInner: '', // e.g '<img src="loading.svg" />'
     timeout: false,
     timeoutCountdown: 5000,
     onLoadEvent: true,
     browser: [ 'animation-duration', '-webkit-animation-duration'],
     // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
     // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
     overlay : false,
     overlayClass : 'animsition-overlay-slide',
     overlayParentElement : 'body',
     transition: function(url){ window.location.href = url; }
   });
 });
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
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};

app.initialize();
