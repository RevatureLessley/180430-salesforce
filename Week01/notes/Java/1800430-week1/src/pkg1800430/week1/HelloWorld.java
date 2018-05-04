package pkg1800430.week1;

/**
 * The first line will always be the package.  Packages are simply a folder
 * hierarchy used to organize all of yoru classes.  Do note: If you don't use
 * any packages (i.e. the default package) then the first line will be omitted
 */
public class HelloWorld {
/*
    Classes follow Pascal Case
* The next piec of a class will be the class declaration itself.  If the
* class name matches
* the filename and public.
*/
    
    public static void main(String[] args){
/*
*   If there is no main method, your app can not run.
*   Constraints:  public
*   static - no instance
*   void - no return value
*   lowercase method name - required
*   arg - Takes a single parameter of an array of strings.  Can be named
*   whatever you want.
*/
        
        System.out.println("Hello World!");
        Person person = new Person("Bobbert", 24);
        Person person2 = new Person("Doug", 50);
        Person person3 = new Person("Lisa", 14);
        person.printPersonInfoThreeTimes();
        person2.printPersonInfoThreeTimes();
        person3.printPersonInfoThreeTimes();
        System.out.println(Person.personCount);
        System.out.println(person.personCount);
    }
}
