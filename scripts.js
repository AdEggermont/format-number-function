formatNumber = function(number, decimals) {

	// Convert to required decimals
	var multiplier = Math.pow(10, decimals);
	number = Math.round(number * multiplier)/multiplier;

	// Convert number to string
	number = number + '';

	// Split number in units and decimals
	var parts = number.split('.');
	var partUnits = parts[0];
	var partDecimals = parts[1];

	// Add thousand-separator
	var rgx = /(\d+)(\d{3})/;

	while (rgx.test(partUnits)) {
		partUnits = partUnits.replace(rgx, '$1' + '.' + '$2');
	}

	// Reconstruct number
	if(partDecimals) {
		// Add zeros to match number of required decimals
		if(partDecimals.length < decimals) {
			var zerosToAdd = decimals - partDecimals.length;
			var count = 0;
			var zeros = '';

			while (count < zerosToAdd) {
				zeros = zeros + '0';
				count++;
			}
			partDecimals = partDecimals + zeros;
		}
		number = partUnits + ',' + partDecimals;
	} else {
		number = partUnits;
	}

	return number;
}
