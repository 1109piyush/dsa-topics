
	/* Function to get the missing number
	The reason n+1 and n+2 are used in the formula is because the array a is expected to contain numbers from 1 to n, with one number missing. By using n+1 in the formula, we account for the missing number as well. Adding n+2 ensures that the sum includes the number after the missing number, which would be n+1 if all numbers were present.

In summary, the n+1 and n+2 are used in the calculation of total to consider the range of numbers from 1 to n and account for the missing number in the sum.*/
	function getMissingNo(a, n) {

		let total = Math.floor((n + 1) * (n + 2) / 2);
		for (let i = 0; i < n; i++)
			total -= a[i];
		return total;
	}

	// Driver Code

	let arr = [ 1, 2, 3, 5 ];
	let N = arr.length;
	let miss = getMissingNo(arr, N);
	document.write(miss);


