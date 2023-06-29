const Node = function(value, nextNode=null){
    return {value: value, nextNode: nextNode};
}


const node1 = Node(5);
const node2 = Node(6);


// console.log(node1);


const LinkedList = function(value){

    
    
    let head = Node(value);
    let tail = head;
    let list = [head];
    

    

    function append(value) {
        
       let newNode = Node(value);
    //    console.log('newNode: ', newNode);
       tail.nextNode = newNode;
       tail = newNode;
       list.push(tail);
       
    }

    function prepend(value) {
        let newNode = Node(value);
        newNode.nextNode = head;
        head = newNode;
        list.unshift(head);
    }

    function at(index) {
        console.log(list[index]);
    }

    function insert(i, v){
        let prev = head;

        for (let k = 0; k < i -1 ; k++) {
           prev = prev.nextNode;
          
        }

        let after = prev.nextNode;
        let newNode = Node(v);
        newNode.nextNode = after;
        prev.nextNode = newNode;
        list.splice(i, 0, newNode);
        
    }

    function size() {
        return list.length;
    }

    function pop() {
        //code here
    }

    function remove() {
        //code here
    }

    





    return {list, append, prepend, tail, head, at, insert, size}


}


const ll = LinkedList(10);


ll.append(5);
ll.append(13);
ll.prepend(100);
// ll.prepend(90);
// console.log(ll.list);
// ll.at(2);
ll.insert(1, 90);
ll.insert(3, 99);
ll.insert(4,22);
console.log(ll.list);
console.log(ll.size());
// console.log(ll.length);
// console.log(ll.length);
// console.log(ll.head);
// console.log(ll.tail);

