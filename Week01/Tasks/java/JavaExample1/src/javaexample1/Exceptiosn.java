/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javaexample1;

/*
 * @author Jeff
 */

//whatever is throwable can be caught
//the throwable class branches off to error and exception
//all exceptions are in exception class that branhes int two IO and Runtime exceptions
//Runtime exception branches to null point and arithmatic (sibling exceptions)
    //TO CATCH BOTH NULL POINT AND ARITHMATIC EXCEPTIONS CATCH A RUNTIME EXCEPTION
    //uncheccked exceptions are runtime exceptions
//Difference between unchecked and checked exceptions, unchecked does not require
//Cheked exceptions demand to be surrounded by a try catch block
//reason: unchecked can be caused by user error, checked is done by java and wants to make sure you check for it

public class Exceptiosn {
    //Exception: behavior that java doesn't expect that will crash your program, described as an insidence where someting unexpected occurs, app behaves in manner it should not
    //not error because there is another class that is called error
    //ERRor: incident that cannot be resonably recovered from -think outofmemerror or stackoverflowerror
    public Exceptiosn(){
        try{ //surround risky code with try block, requires at least one catch block assuming you only use catch blocks
            String a="dddd";
            System.out.println(a.toCharArray()[12]);
        }catch(java.lang.Exception e){
            //throw new java.lang.ArithmeticException();//<-exception handling
            System.out.println("EE+"+e);
        }finally{//<- occurs if an exception occurs that isn't catched, or if no exception happens, is not triggered on error or system.exit(0) before it
            
        }
    }
}
