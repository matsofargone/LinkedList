// const fibs = function(num) {
//     let result = [];

//     for (let i = 0; i < num; i++) {
//         if (i == 0 || i == 1) {
//             result.push(i);
//         }
//         if (i > 1) { 
//         result.push(result[i-1] + (result[i-2]));
//         }
        
//     }

//     return result;

    
// }

// const fibsRec = function(num) {
//     if (num == 1) return 1;
//     if (num == 0) return 0;


//     return fibsRec(num -1) + fibsRec(num-2);
    
// }

const numbers = [2,3,12,4,5,6,6,7];

function mergeSort(array) {
    if (array.length == 1) {
        return array
    }
    //split array in into right and left 
    const half = Math.ceil(array.length / 2);
    let left = array.slice(0, half);
    let right = array.slice(half);
    
    

    return merge(mergeSort(left), mergeSort(right)
    )
    


}

function merge(left, right) {
    //comparision of numbers
    //compare each element in both array and merge into new array sorted 
    const sortedArray = [];
    
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && 
            rightIndex < right.length) {
                if(left[leftIndex] < right[rightIndex]){
                    sortedArray.push(left[leftIndex]);
                    leftIndex++;
                } else {
                    sortedArray.push(right[rightIndex]);
                    rightIndex++;
                }
            }

    
    return sortedArray.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));
    
  

}








console.log(mergeSort(numbers));

