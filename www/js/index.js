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
		$("#launched").text("Item" + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
	}


    // device APIs are available
    //
    function onDeviceReady() {
		alert("device ready");
        
		window.localStorage.getItem( Book, Severn );
		window.localStorage.getItem( Pen, Black );
		window.localStorage.getItem( Phone, iPhone );
		window.localStorage.getItem( keys, Car );
		window.localStorage.getItem( Laptop, Windows );
		
		updateDisplay();
    }
