package Elevator;
import java.util.*;

public class ElevatorController {
    private final List<Elevator>elevators;

    public ElevatorController(int numOfElevators){
        elevators = new ArrayList<>();
        for (int i = 0 ; i < numOfElevators; i++){
            Elevator elevator = new Elevator(i);
            elevators.add(elevator);
            new Thread(elevator).start();
        }
    }

    public void RequestElevator(int floor, Direction direction){
        ElevatorRequest request = new ElevatorRequest(floor, direction);
        Elevator besElevator = findBestElevator(request);
        besElevator.addRequest(request);
    }

    private Elevator findBestElevator(ElevatorRequest request) {
        int minDist = Integer.MAX_VALUE;
        Elevator el = null;
        for (Elevator e: elevators){
            int dist = Math.abs(request.getFloor() - e.getCurrentFloor());
            if (minDist > dist){
                minDist = dist;
                el = e;
            }
        }

        return el;
    }
}
