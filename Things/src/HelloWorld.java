/*
*    The first line of a java application will always be its package location.
*    packages are simply a folder hierarchy used to organize all of your classes.
*    note: if you use the default package, the first line is omitted.
*/

/*
*   the next piece of a class will be the class declaration itself. the class name must match the filename,
*   and it MUST be public
*/
public class HelloWorld {

    /*
    * this is called the main method in java. it is the method an application looks for 
    * in order to begin executing it. if there is no main method, then your application
    * CANNOT run.
    * NOTE: casing and modifiers must match the casing perfectly.
    * CONSTRAINTS:
    *   public - method must be accessible from ANY location of the application.
    *   static - method must be able to execute, even though we don't instantiate an instance of the class.
    *   void - the method must not return ANYTHING.
    *   lower case methodname (CamelCase) as per convention (required in this case).
    *   take a single paramter of an array of Strings. you CAN, however, name the argument whatever you want.
    */
    public static void main(String[] args){
        System.out.println("Hello world!"); //print to the console
    }

}