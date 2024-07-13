package ThreadPool;
import java.util.LinkedList;
import java.util.List;

public class ThreadP {
    private final int poolSize;
    private final Thread[] threads;
    private final List<MessageSender> taskQueue;

    public ThreadP(int poolSize) {
        this.poolSize = poolSize;
        this.threads = new Thread[poolSize];
        this.taskQueue = new LinkedList<>();

        for (int i = 0; i < poolSize; i++) {
            threads[i] = new Thread(() -> {
                while (true) {
                    MessageSender task;
                    synchronized (taskQueue) {
                        while (taskQueue.isEmpty()) {
                            try {
                                taskQueue.wait();
                            } catch (InterruptedException e) {
                                Thread.currentThread().interrupt();
                                return;
                            }
                        }
                        task = taskQueue.remove(0);
                    }
                    // Execute task
                    task.run();
                }
            });
            threads[i].start();
        }
    }

    // Method to submit a message for sending
    public void submit(Message message) {
        synchronized (taskQueue) {
            taskQueue.add(new MessageSender(this, message));
            taskQueue.notify();
        }
    }

    // Method to notify completion of a task
    public void taskComplete(MessageSender task) {
        System.out.println("Task Complete: " + task.getMessage());
    }

    // Shutdown the ThreadPool
    public void shutdown() {
        for (Thread thread : threads) {
            thread.interrupt();
        }
    }

    // Main method for testing
    public static void main(String[] args) {
        ThreadP threadPool = new ThreadP(4); // Create a thread pool of size 4

        // Example messages to send
        Message message1 = new Message("Hello, world!");
        Message message2 = new Message("How are you?");
        Message message3 = new Message("This is a test message.");

        // Submit messages to the thread pool
        threadPool.submit(message1);
        threadPool.submit(message2);
        threadPool.submit(message3);

        // Shutdown the thread pool after all tasks are complete
        threadPool.shutdown();
    }
}