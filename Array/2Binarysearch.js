// Program to implement iterative Binary Search
// divide array in 2 parts


// A iterative binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1

function binarySearch(arr, x)
{
	let l = 0;
	let r = arr.length - 1;
	let mid;
	while (r >= l) {
		mid = l + Math.floor((r - l) / 2);

		// If the element is present at the middle
		// itself
		if (arr[mid] == x)
			return mid;

		// If element is smaller than mid, then
		// it can only be present in left subarray
		// check if middle is greater or not
		if (arr[mid] > x)
			r = mid - 1;
			
		// Else the element can only be present
		// in right subarray
		// middle is smaller so we change l and go to while loop again and than again it start going
		else
			l = mid + 1;
	}

	// We reach here when element is not
	// present in array
	return -1;
}

	arr =new Array(2, 3, 4, 10, 40);
	x = 10;
	n = arr.length;
	result = binarySearch(arr, x);
	
(result == -1) ? console.log("Element is not present in array")
			: console.log ("Element is present at index " + result);
				
// This code is contributed by simranarora5sos and rshuklabbb
