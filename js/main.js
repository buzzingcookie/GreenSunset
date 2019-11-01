const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tab-border');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});


// GoogleMap
function initMap() {
	// The location of Uluru
	var uluru = {lat: 28.060281, lng: -16.733227};
	// The map, centered at Uluru
	var map = new google.maps.Map(
		document.getElementById('map'), {zoom: 17, center: uluru});
	// The marker, positioned at Uluru
	var marker = new google.maps.Marker({position: uluru, map: map});
}

	var map = new google.maps.Map(document.getElementsById('map'), options);


