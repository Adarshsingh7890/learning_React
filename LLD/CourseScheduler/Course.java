package CourseScheduler;
import java.util.*;

public class Course {
    private String name;
    private long id;
    private Instructor instructor;
    private Schedule schedule;
    private List<Student>enrolledStudents;
    private int capacity;

    public Course(Instructor instructor, Schedule schedule, String name, long id, int capacity){
        this.instructor = instructor;
        this.schedule = schedule;
        this.name = name;
        this.id = id;
        this.capacity = capacity;
        this.enrolledStudents = new ArrayList<>();
    }

    public void setName(String name){
        this.name = name;
    }
    public void setId(long id){
        this.id = id;
    }
    public void setCapacity(int capacity){
        this.capacity = capacity;
    }

    public String getName() {
        return name;
    }

    public long getId() {
        return id;
    }

    public Instructor getInstructor() {
        return instructor;
    }

    public Schedule getSchedule() {
        return schedule;
    }

    public List<Student> getEnrolledStudents() {
        return enrolledStudents;
    }

    public int getCapacity() {
        return capacity;
    }

    public boolean addStudent (Student student){
        if (enrolledStudents.size() < capacity){
            enrolledStudents.add(student);
            return true;
        }
        return false;
    }   

    public void dropStudent(Student student){
        enrolledStudents.remove(student);
    }

    @Override
    public String toString() {
        return "Course [name=" + name + ", id=" + id + ", instructor=" + instructor + ", schedule=" + schedule
                + ", capacity=" + capacity + "]";
    }


}
