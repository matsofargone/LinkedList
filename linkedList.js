const Node = function(value, nextNode=null){
    return {value: value, nextNode: nextNode};
}


// const node1 = Node(5);
// const node2 = Node(6);


// console.log(node1);


const LinkedList = function(value){

    
    
    let head = Node(value);
    let tail = head;
    // let list = [head];
    

    

    function append(value) {
        
       let newNode = Node(value);
    //    console.log('newNode: ', newNode);
       tail.nextNode = newNode;
       tail = newNode;
    //    list.push(tail);
       
    }

    function prepend(value) {
        let newNode = Node(value);
        newNode.nextNode = head;
        head = newNode;
        // list.unshift(head);
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
        // list.splice(i, 0, newNode);
        
    }

    function size() {
        return list.length;
    }

    function pop() {
        if (head == null){
            return console('Nothing to pop');
        }
        
        let prev = head;
        let temp;

        // console.log('head: ', prev);
        // console.log('temp: ', temp);
        // console.log('temp Next: ', temp.nextNode);

        while (prev.nextNode != null) {
           
             temp = prev;
             prev = prev.nextNode;
            //  console.log(prev.nextNode);
            
            
            
        }
        temp.nextNode = null;
            // list.pop();
        delete temp,  tail = prev;;
       
        

            
       
      

    }

    function remove(index) {
        if (head == '') {
            return 'Empty list';
        }

        let prev = head;

        for (let k = 0; k < index-1; k++) {
            prev = prev.nextNode;
            
        }

        let del = prev.nextNode, aft = del.nextNode;
        // console.log('Node to be deleted: ', del);
        prev.nextNode = aft 
        // console.log(del);
        delete del;
    }

    function printList() {
        const list = [];
        let currentNode = head;
        while(currentNode != null) {
            list.push(`( ${currentNode.value} )`);
            currentNode = currentNode.nextNode;
        }
        list.push('null');
        let display = list.join(' -> ');

        console.log(display);
    }

    





    return { append, prepend, tail, head, at, insert, size, pop, printList, remove}


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
ll.pop();
ll.pop();
ll.printList();


// console.log(ll.list);
// console.log(ll.size());


