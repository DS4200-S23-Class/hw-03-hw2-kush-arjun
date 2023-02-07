

console.log('click');


document.getElementById('body').style.fontFamily = 'Arial';
function buttonClicked() {
	
	let body = document.getElementById('body');
	let buttonDiv = document.getElementById("button-div");
	

	curr_font = body.style.fontFamily;
	console.log(curr_font);

	if (curr_font == 'Arial') {
		curr_font = 'Times New Roman';
	} else {
		curr_font = 'Arial';
	}

	

	body.style.fontFamily = curr_font;
	buttonDiv.innerHTML = "Current Font: " + curr_font;


}