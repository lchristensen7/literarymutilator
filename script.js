window.onload = function () {
	replacewords();
};

function replaceWords(){
	//replace words with cheese to goobs
	document.body.innerHTML = document.body.innerHTML.replace(/cheese/g, "goober");
}
