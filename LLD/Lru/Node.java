public class Node<k,v> {
    k key;
    v value;
    Node <k,v> prev;
    Node <k,v>  next;

    public Node (k key, v value){
        this.key = key;
        this.value = value;
    }
}
