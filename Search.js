/*****************Linear Search************/

function linearSearch(arr, key){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){
            return i
        }
    }
    return -1
}
var arr = [1,2,3,4,5,6,7,];
var key = 4;
var res = linearSearch(arr,key);
console.log("Element found at position " + res);


/*****************Linear Search End************/

/*****************Binary Search************/
/*function binarySearch(sortedArray, key){
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {

        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            // found the key
            return middle;
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
	// key wasn't found
    return -1;
}

var arr = [1,2,3,4,5,6,7,];
var key = 4;
var res = binarySearch(arr,key);
console.log("Element found at position " + res);*/

/*****************Binary Search End************/
