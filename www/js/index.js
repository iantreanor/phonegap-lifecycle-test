var value = window.localStorage.getItem(Book);
var value = window.localStorage.getItem(Pen);
var value = window.localStorage.getItem(Phone);
var value = window.localStorage.getItem(Keys);
var value = window.localStorage.getItem(Laptop);

    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
    }
	
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
	}


    // device APIs are available
    //
    function onDeviceReady() {
		alert("device ready");
        
		window.localStorage.setItem( Book, Severn );
		window.localStorage.setItem( Pen, Black );
		window.localStorage.setItem( Phone, iPhone );
		window.localStorage.setItem( keys, Car );
		window.localStorage.setItem( Laptop, Windows );
		
		updateDisplay();
    }
