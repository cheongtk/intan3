//fungsi membenarkan taip nombor dan perpuluhan sahaja
function taip_nombor(event) {
	if (event.shiftKey == true) {
		event.preventDefault();
	}

	if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46 || event.keyCode == 190) {

	} else {
		event.preventDefault();
	}
	if($(this).val().indexOf('.') !== -1 && event.keyCode == 190)
		event.preventDefault();
}