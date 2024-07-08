package Elevator;

public class Main {
    
    public static void main(String ...args){
        ElevatorController controller = new ElevatorController(3);
        controller.RequestElevator(5, Direction.UP);
        controller.RequestElevator(2, Direction.DOWN);
        controller.RequestElevator(8, Direction.UP);
    }
}
