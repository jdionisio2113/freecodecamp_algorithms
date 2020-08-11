function sumAll(arr) {
	var max = Math.max(arr[0], arr[1]);
	var min = Math.min(arr[0], arr[1]);
	var temp = 0;
	for (var i = min; i <= max; i++) {
		temp += i;
	}
	console.log(temp);
	return temp;
}

sumAll([ 1, 4 ]);

// First create a variable to store the max number between two.
// The same as before for the Smallest number.
// We create a temporary variable to add the numbers.
