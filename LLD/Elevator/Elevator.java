package Elevator;

import java.util.PriorityQueue;

public class Elevator implements Runnable{
    private int id;
    private int currentFloor;
    private Direction currentDirection;
    PriorityQueue<Integer>downQueue;
    PriorityQueue<Integer>upQueue;

    public Elevator(int id){
        this.id = id;
        this.currentFloor = 0;
        this.currentDirection = Direction.IDLE;

        this.upQueue = new PriorityQueue<>();
        this.downQueue = new PriorityQueue<>((a,b)->b-a);
    }

    public int getCurrentFloor() {
        return currentFloor;
    }

    public Direction getCurrentDirection() {
        return currentDirection;
    }

    public void addRequest(ElevatorRequest request){
        if (request.getDirection() == Direction.UP){
            upQueue.add(request.getFloor());
        }else{
            downQueue.add(request.getFloor());
        }

        updateDirection();
    }

    private void updateDirection() {
        if (!upQueue.isEmpty() || !downQueue.isEmpty()){
            if (currentDirection == Direction.IDLE){
                if (!upQueue.isEmpty()){
                    currentDirection = Direction.UP;
                }else{
                    currentDirection = Direction.DOWN;
                }
            }
        }else{
            currentDirection = Direction.IDLE;
        }
    }

    @Override
    public void run(){
        while(true){
            try {
                Thread.sleep(2000);
                move();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    private void move() {
        if (currentDirection == Direction.UP && !upQueue.isEmpty()){
            currentFloor++;
            if (currentFloor == upQueue.peek()){
                upQueue.poll();
            }
        }else if (currentDirection == Direction.DOWN && !downQueue.isEmpty()){
            currentFloor--;
            if (currentFloor == downQueue.peek()){
                downQueue.poll();
            }
        }

        updateDirection();
        System.out.println("Elevator " + id + " at floor " + currentFloor + " moving " + currentDirection);
    }
}
