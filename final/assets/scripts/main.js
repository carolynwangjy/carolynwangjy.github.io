/*Code inspired from HW09 of the WDD DeCal*/

function unhideLightbox(lightboxID) {
	// Removes the .hidden class from the #lightbox-overlay div
	document.getElementById('lightbox-overlay').classList.remove('hidden');

	// Removes the .hidden class from the div with the given id
	document.getElementById(lightboxID).classList.remove('hidden');
}

function unhideLightbox1() {
	unhideLightbox("grass");
}
document.getElementById('picture-1').onclick = unhideLightbox1;

function unhideLightbox2() {
	unhideLightbox("larisa");
}

document.getElementById('picture-2').onclick = unhideLightbox2;

function unhideLightbox3() {
	unhideLightbox("language");
}
document.getElementById('picture-3').onclick = unhideLightbox3;

function unhideLightbox4() {
	unhideLightbox("running");
}
document.getElementById('picture-4').onclick = unhideLightbox4;

function unhideLightbox5() {
	unhideLightbox("writing");
}
document.getElementById('picture-5').onclick = unhideLightbox5;

function unhideLightbox6() {
	unhideLightbox("news");
}
document.getElementById('picture-6').onclick = unhideLightbox6;

function unhideLightbox7() {
	unhideLightbox("math");
}
document.getElementById('picture-7').onclick = unhideLightbox7;

function unhideLightbox8() {
	unhideLightbox("flute");
}
document.getElementById('picture-8').onclick = unhideLightbox8;


function closeLightbox(lightboxID) {
	// This adds the .hidden class to the #lightbox-overlay div
	document.getElementById('lightbox-overlay').classList.add('hidden');

	// TODO: Add the .hidden class to the div with the given id
	document.getElementById(lightboxID).classList.add('hidden');
}


// This function class closeLightbox() for every .lightbox div - WDD
function closeAllLightboxes() {
	// get every .lightbox div, getElementsByClassName gives us an array 
	var lightboxElements = document.getElementsByClassName('lightbox');

	// sneak preview of Javascript loops, which will go through every element in an array of elements
	for (var i = 0; i < lightboxElements.length; i++) {
		// get id of this particular .lightbox div
		var id = lightboxElements[i].id;
		// call closeLightbox for this id
		closeLightbox(id);
	}
}

// TODO: set the closeAllLightboxes function to run when #lightbox-overlay is clicked on.
document.getElementById('lightbox-overlay').onclick = closeAllLightboxes;