function fixBackgroundSize() {
	var sections = getElementsByClassName("section");
	var images = getElementsByClassName("background_img");
	images[0].style.height = "50px"

	var i;
	for(i = 0; i < sections.length - 1 && i < images.length - 1; i++) {
		images[i].style.height = "50px"
		if(sections[i].style.height > images[i].style.height) {
			images[i].style.height = sections[i].style.height;
		}
	}

}

function navHighlight(elem, home, active) {
    var url = location.href.split("/"); //replace string with location.href
	var navLinks = document.getElementsByTagName(elem)[0].getElementsByTagName("a");
	//naturally you could use something other than the <nav> element
	var i=0;
	var currentPage = url[url.length - 1];
	for(i;i<navLinks.length;i++){
  		var lb = navLinks[i].href.split("/");
  		if(lb[lb.length-1] == currentPage) {
   			navLinks[i].className = "current";

  		}
  	}
}


navHighlight('#navBar', 'index.html#main', 'current'); /* menu link selector, home page, highlight class */


window.onresize = fixBackgroundSize;