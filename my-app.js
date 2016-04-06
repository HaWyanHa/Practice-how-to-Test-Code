function sum(numbers) {
    var sum = 0;

    if (typeof numbers === "undefined") {
    	return sum;
    } else if (!Array.isArray(numbers)) {
    	return NaN;
    }



    numbers.forEach(function(num) {
        if (!Number(num) && num !==0) {
        	sum = NaN;
        }

        sum += num;
    });
    return sum;
}