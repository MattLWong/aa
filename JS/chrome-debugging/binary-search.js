function binarySearch(arr, target) {
  if (arr.length == 0 || (arr.length == 1 && arr[0] != target)) {
    return -1;
  }

  let middle = Math.floor(arr.length / 2);
  if (arr[middle] == target) {
    return middle;
  } else if (target > arr[middle]) {
    let laterHalf = arr.slice(middle+1);
    if (binarySearch(laterHalf, target) == -1) {
      return -1;
    } else {
      return (binarySearch(laterHalf, target) + middle + 1);
    }
  } else {
    let firstHalf = arr.slice(0,middle);
    if (binarySearch(firstHalf, target) == -1) {
      return -1;
    } else {
      return binarySearch(firstHalf, target)
    }
  }
}

console.log(binarySearch([0,1,2,3,4,5,6,7,8], 7));
