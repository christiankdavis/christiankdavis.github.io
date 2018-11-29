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
	//var url = window.location.href.split("#"); //replace string with location.href
	var listItems = document.getElementById("navBar").getElementsByTagName("li");
	var i=0;
	//var currentPage = url[url.length - 1];
	for(i;i<listItems.length;i++){
  		var lb = listItems[i].getElementsByTagName("a")[0].href.split("#");
  		if(lb[lb.length-1] == currentPage) {
   			listItems[i].className = "current";
  		}else {
  			listItems[i].className = "notCurrent";
  		}
  	}
}


//navHighlight('#navBar', 'index.html#main', 'current'); /* menu link selector, home page, highlight class */

window.onload = fixBackgroundSize;
window.onresize = fixBackgroundSize;