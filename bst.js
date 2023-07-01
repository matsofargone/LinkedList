function Node(value, left, right) {
  return {value: value, left: left, right: right};
}





function BinarySearchTree() {
  let root = null;

  function sortAndRemoveDups(arr) {
    let result = [];

    mergeSort(arr);

    result = [...new Set(arr)];

    return result;
  }

  function buildTree(array, start, end) {
    if (start > end) {
      return null;
    }

    let mid = parseInt((start + end) / 2);
    let root = Node(array[mid]);
    
    root.left = buildTree(array, start, mid - 1);
    root.right = buildTree(array, mid + 1, end);


    return root;
  }

  const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };






  return {root, buildTree, sortAndRemoveDups, prettyPrint }
}


let data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];



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


const treeB = BinarySearchTree();

let sortedArray = treeB.sortAndRemoveDups(data);

// console.log(sortedArray);

let n = sortedArray.length;

let tree = treeB.buildTree(sortedArray, 0, n - 1); 

// console.log(treeB.root);

treeB.prettyPrint(tree);


