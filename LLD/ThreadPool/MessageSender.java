package ThreadPool;
import java.util.concurrent.*;;

public class MessageSender implements Runnable{
    
    private Message message;
    private ThreadP threadP;

    public MessageSender(ThreadP threadP, Message message) {
        this.threadP = threadP;
        this.message = message;
    }
    @Override
    public void run(){
        System.out.println("Sending Messages " + message.getMessage() + "Thread Info" + Thread.currentThread().getName());
        threadP.taskComplete(this);
    }

    public String getMessage(){
        return this.message.getMessage();
    }

}
