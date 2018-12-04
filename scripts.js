function fixBackgroundSize() {
	var sections = document.getElementsByClassName("section");
	var images = document.getElementsByClassName("background_img");
	var divHeight = sections[0].clientHeight;

	var i;
	for(i = 0; i < images.length - 1; i++) {
		if(divHeight > images[i].clientHeight) {
			images[i].style.height = sections[i].clientHeight + "px";
		}
	}
}

function navHighlight(currentPage) {
	var listItems = document.getElementById("navBar").getElementsByTagName("li");
	var i=0;
	for(i;i<listItems.length;i++){
  		var lb = listItems[i].getElementsByTagName("a")[0].href.split("#");
  		if(lb[lb.length-1] == currentPage) {
   			listItems[i].className = "active";
  		}else {
  			listItems[i].className = "inactive";
  		}
  	}
}

function checkVisible(elm) {
  	var rect = elm.getBoundingClientRect();
  	var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
 	return !(rect.bottom < viewHeight/2 || rect.top - viewHeight >= -viewHeight/2);
}

function scrollNavHighlight() {
	var listItems = document.getElementsByClassName("section");
	var i=0;
	for(i;i<listItems.length;i++){
		elem = listItems[i];
		if(checkVisible(elem)) {
			navHighlight(elem.id);
		}
	}	
}


window.onscroll = scrollNavHighlight;
window.onload = fixBackgroundSize;
window.onresize = fixBackgroundSize;