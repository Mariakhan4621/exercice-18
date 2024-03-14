var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// store the locations in an array
var placesToVisit = ["Tokyo", "Pakistan", "America", "China", "japan"];
//print the array in its original order
console.log("original order:", placesToVisit);
//print the array in alphabetical order without madifying the actual list
console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
//show that the array is still in its original order 
console.log("original order after sorting:", placesToVisit);
//print the array in reverse alphabetical order without changing the order of the orignal list 
console.log("Resverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
//show that the array is still in its original order
console.log("original order after reverse sorting:", placesToVisit);
//reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
//reverse the order of the list again to get vack to the orginal order 
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
//Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabitical order:", placesToVisit);
// // Sort the array in reverse alphabetical order
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", placesToVisit);
