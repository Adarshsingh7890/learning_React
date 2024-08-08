import java.util.HashMap;
import java.util.Map;

public class LRUCache<k,v> {
    private final int capacity;
    private final Map<k, Node<k,v>>cache;
    private final Node<k,v>head;
    private final Node<k,v> tail;

    public LRUCache(int capacity){
        this.capacity = capacity;
        cache = new HashMap<>();
        head = null;
        tail = null;
        head.next = tail;
        tail.prev = head;
    }

    public synchronized void put (k key, v value){
        Node <k,v>node = cache.get(key);

        if (node != null){
            node.value = value;
            moveToHead(node);
        }else{
            node = new Node <>(key, value);
            cache.put(node);
            addToHead(node);

            if (cache.size() > capacity){
                Node <k,v> removedNode = removeTail();
                cache.remove(removedNode.key);
            }
        }
    }

    private void addToHead(Node<k,v> node){
        node.prev = head;
        node.next = head.next;
        head.next.prev = node;
        head.next = node;
    }

    private void removeNode(Node<K, V> node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    private void moveToHead(Node<K, V> node) {
        removeNode(node);
        addToHead(node);
    }

    private Node<K, V> removeTail() {
        Node<K, V> node = tail.prev;
        removeNode(node);
        return node;
    }
}
