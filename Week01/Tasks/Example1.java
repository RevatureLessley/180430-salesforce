
// classes should follow PascalCase
public static void main (String[] args){
    System.out.println("hello yo");
    System.out.println();
    
}


public class Person{
    /*
    instance scope
    -any variable within the class definition, but outside of any methods of the class, is considered 
    instance scope
    */

    //instance variable
    private String name;
    private int age;
    static int personcount = 0;

    // static scope- we can access this variable directly without having to instantiate the class
    // as an object more importantly , anything static can only ever have one instance created

    // a method that matches the classname directly is called the constructor.
    //the constructor
    public Person(String nam, int age){
        this.name = name;
        this.age = age;
        personcount++;

    }


    public void printPersonInfoThreeTimes(){
        //method scope
        /* any variable that is created within a method is considered method scope.
        As per rule  */

        String fullinfo = name + "who is " + age " years old";

        for (int i = 0; i < 3; i++){
            System.out.println(fullinfo);
        }

    }


    public class Driver{
        public void demo(){
            Person p1 = new Person ("Bobbert", "10");
            p1.printPersonInfoThreeTimes();
        }
    }


}