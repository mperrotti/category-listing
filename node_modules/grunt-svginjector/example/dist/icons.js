(function(){
	var container = document.getElementById('icons-container');
	if (container) {
		container.innerHTML = "<svg>\n\t<defs>\n\t\t<symbol id='icon-square' viewBox='0 0 100 100'>\n\t\t\t<rect x='10' y='10' width='80' height='80'/>\n\t\t</symbol>\n\t\t<symbol id='icon-ellipse'>\n\t\t\t<ellipse cx='50' cy='50' rx='40' ry='40'/>\n\t\t</symbol>\n\t</defs>\n</svg>";
	} else {
		throw new Error("Can't find element: #" + container);
	}
})();