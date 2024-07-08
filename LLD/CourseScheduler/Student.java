package CourseScheduler;
import java.util.ArrayList;
import java.util.List;

public class Student {
    private String name;
    private long studentId;
    private List<Course>enrolledCourses;

    public Student(String name, long studentId) {
        this.name = name;
        this.studentId = studentId;
        this.enrolledCourses = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getStudentId() {
        return studentId;
    }

    public void setStudentId(long studentId) {
        this.studentId = studentId;
    }

    public List<Course> getEnrolledCourses() {
        return enrolledCourses;
    }    

    public boolean enrollInCourses(Course course){
        for (Course c: enrolledCourses){
            if (c.getSchedule().getDay().equals(course.getSchedule().getDay()) && c.getSchedule().getStartTime().equals(course.getSchedule().getStartTime())){
                return false;
            }
        }

        if (course.addStudent(this)){
            enrolledCourses.add(course);
            return true;
        }

        return false;
    }

    public boolean dropCourse (Course course){
        if (enrolledCourses.remove(course)){
            course.dropStudent(this);
            return true;
        }
        return false;
    }

    @Override
    public String toString() {
        return "Student [name=" + name + ", studentId=" + studentId + "]";
    }

    

}
