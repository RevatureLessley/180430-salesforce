/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//first line iw package location, if you don't use packages (use default package)first line is ommited
package javaexample1;
import static java.lang.System.out;
import java.util.stream.IntStream;
import java.util.*;
/**
 *
 * @author Jeff
 */

//anyvariable within the class definition is considered instance scope (global class scope)

public class JavaExample1 {
    //main class will be the same as the roject name, if the class matches the filename it must be public
    /**
     * @param args the command line arguments
     */
    
    //project wide global variables
    public String globalName;
    //instance variables
    private String name;
    
    //static scope: can access this variabel directly without having to instantiate this class as an object
    //anything static can only ever have one instance ever created, that instance is shared among all other
    //instances of the class
    static int whatever =0;
    
    //constructor first method called when making a new object (using new keyword)
    public JavaExample1(){
        name="!!#!#!"; //<- global variables yo
        int i=43;//<-method variable, only used by this method
        for(int j=0;j==0;j++){} //<-j be a local bariable or loop variable, cannot be referenced outside this llooop
        newestClass nc=new newestClass(100,34);
        nc.output();
        newestClass nc2=new newestClass(100,34);
        nc2.output();
        nc.output();
        newestClass.s++;
        newestClass.s++;
        nc2.output();
        nc.output();
        Modifiers mod=new Modifiers();
        String o="";
        for(;!o.equals("hhhh");o+="h"){
            System.out.println(o);
        }
        for(char c:o.toCharArray()){
            out.print(c);
        }
        //continue restarts to next iteration of the loop
        
        int x=(10<5) ? 0:10;//ternary operations
        new Exceptiosn();
    }
 
    public static void main(String[] args) {
        IntStream.range(0,100).forEach(i->killMe(i));
        for(int i=0;i<123;++i){out.println("fdsafdafasf "+i);}
        new JavaExample1();
    }
    
    public static void killMe(int i){
        out.println("SFDFDSDF");
    }
}
