package CourseScheduler;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class CourseScheduler{
    private Map<Long, Student> students;
    private Map<Long, Course> courses;

    public CourseScheduler(){
        students = new HashMap<>();
        courses = new HashMap<>();
    }

    public void addStudent(Student student){
        students.put(student.getStudentId(), student);
    }

    public void addCourse(Course course){
        courses.put(course.getId(), course);
    }

    public boolean enrollStudentInCourse(Long studentId, Long courseId){
        Student student = students.get(studentId);
        Course course = courses.get(courseId);

        if (student != null && course != null){
            return student.enrollInCourses(course);
        }

        return false;

    }   

    public boolean deleteStudentFromCourse(Long studentId, Long courseId){
        Student student = students.get(studentId);
        Course course = courses.get(courseId);

        if (student != null && course != null){
            return student.dropCourse(course);
        }

        return false;
    }

    public void printSchedule(){
        for (Course c: courses.values()){
            System.out.println(c);
            List<Student>students = c.getEnrolledStudents();
            for (Student student: students){
                System.out.println(student);
            }
        }
    }


    public static void main(String[] args) {
        Instructor instructor1 = new Instructor("I001", "Dr. Smith");
        Schedule schedule1 = new Schedule("Monday", "10:00", "12:00");
        Course course1 = new Course(instructor1, schedule1, "Math 101", 101, 2);
        Course course2 = new Course(instructor1, schedule1, "Math 102", 102, 2);

        Student student1 = new Student("John Doe", (long)1);
        Student student2 = new Student("John Doe", (long)2);

        CourseScheduler scheduler = new CourseScheduler();
        scheduler.addCourse(course1);
        scheduler.addCourse(course2);
        scheduler.addStudent(student1);
        scheduler.addStudent(student2);

        scheduler.enrollStudentInCourse((long)1, (long)101);
        scheduler.enrollStudentInCourse((long)2, (long)102);
        scheduler.printSchedule();
    }
}