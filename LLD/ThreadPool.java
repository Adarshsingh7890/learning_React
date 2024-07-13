

// import java.util.concurrent.ExecutorService;
// import java.util.concurrent.Executors;

// public class ThreadPool {
//     private final int poolSize;
//     private final ExecutorService executorService;


//     public ThreadPool(int poolSize) {
//         this.poolSize = poolSize;
//         this.executorService = Executors.newFixedThreadPool(poolSize);
//     }

//     public void submit(Message message){
//         // executorService.submit(new MessageSender(message));
//     }

//     public void shutdown(){
//         executorService.shutdown();
//     }

//     public static void main(String[] args) {
//         ThreadPool threadPool = new ThreadPool(4);

//         Message message1 = new Message("Hello, world!");
//         Message message2 = new Message("How are you?");
//         Message message3 = new Message("This is a test message.");

//         threadPool.submit(message1);
//         threadPool.submit(message2);
//         threadPool.submit(message3);

//         threadPool.shutdown();
//     }
// }
