// App iniciator
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
		document.addEventListener("backbutton", this.onBackButton, false);						
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		alert("onDeviceReady");
		// app.receivedEvent('deviceready');		

    },
    // backbutton Event Handler
    onBackButton: function(e) {
		 e.preventDefault();
        //app.receivedEvent('backbutton');
		//navigator.app.exitApp(); // To exit the app!
		alert("onBackButton");
		//device.exitApp();
    }
};

