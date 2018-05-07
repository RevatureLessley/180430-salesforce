package com.revature.exceptions;

import java.io.IOException;

public class Driver {
	/*
	 * An exception can safely be described as an incident where something
	 * unexpected occurs.
	 * -When an application behaves in a manner it should not.
	 * 
	 * An exception is NOT an error.
	 * Both are two separate classes.
	 * An error can be described as:
	 * -an incident that cannot be reasonabably recovered from.
	 * -Think: OutOfMemoryError(Heap) and StackOverFlowError(Stack)
	 */
	
	
	public static void main(String[] args) throws IOException{
		Driver d = new Driver();
		//d.divisionByZeroException(); //CAUSES AN EXCEPTION, GOOD GOD
		d.handledException();
		//d.checked1();
		d.finallyBlocks();
		System.out.println(d.trickyBusiness());
		System.out.println("MADE IT TO THE END!");		
	}
	
	public void divisionByZeroException(){
		System.out.println(1/0);
		System.out.println("THIS CODE IS NEVER REACHED");
	}

	/*
	 * We can recover from an exception by utilizing try/catch blocks.
	 * The use of these is called Exception Handling.
	 * 
	 */
	
	public void handledException(){
		
		try{
			/*
			 * Use a try block to surround risky code that might throw an exception.
			 * The try block requires at least ONE catch block assuming you are only using
			 * catch blocks.
			 */
			String h = null;
			h.toString();
			//throw is used to trigger a specific exception.	
			System.out.println("THIS CODE IS NEVER REACHED");
		}catch(NullPointerException e){
			/*
			 * In the event of a try block triggering an exception, program execution
			 * will immediately forward over the catch block.
			 */
			System.out.println("CAUGHT!");
		}catch(ArithmeticException e){
			/*
			 * All these exceptions are unchecked, since they are all a part of RuntimeException,
			 * which does NOT require you have a try catch block.
			 */
		}
		catch(RuntimeException e){
			/*
			 * You cna have multiple catch blocks, but you need ot order them, most specific
			 * to least, or you risk dead code.
			 */
			System.out.println("CAUGHT!");
		}
	}
	
	public void checked1() throws IOException{
		checked2();
	}
	public void checked2() throws IOException{
		checked3();
	}
	public void checked3() throws IOException{
		throw new IOException();
		//Checked exceptions MUST be handled!
		//Throw an exception past the main method, and it will result in a crash.
		/*
		 * 'throws' is used for exception ducking/propagation. You can set it up so 
		 * the calling method/methods will handle the exception instead of just the specific
		 * method that triggered it. 
		 * Why even bother!?
		 * If i had 18 methods that all triggered arithmetic exceptions. I would prefer to
		 * invoke 'throws' on the 18, and have the calling method handle it for me. This would
		 * opposed to writing 18 separate try/catch blocks.
		 */
	}
	
	public void finallyBlocks(){
		try{
			System.out.println("TRYNALLY");
			System.out.println(1/0);
		}catch(Exception e){
			System.out.println("CATCHALLY");
		}finally{
			/*
			 * A finally block, is the 3rd kind of exception handling block that will trigger
			 * no matter what. If an exception occurs, the catch block triggers, then the
			 * finally. If no exception occurs, the finally still triggers after the try 
			 * block.
			 * IT ALWAYS TRIGGERS (except two possibilities)
			 * 1. A system crashing error
			 * 2. If user invokes system.exit(0) before it.
			 * 		Note: system.exit(0), is the equivalent of taking a sledgehammer to your
			 * 		computer. Do NOT rely on it for exiting applications.
			 * 
			 * Typically you want a finally block for code that you want to execute in the 
			 * event an exception occurs. IE, closing open streams, closing files, maybe
			 * even SAVING files. etc.
			 * 
			 * Do note: You do not need to have a catch block, if you have a finally block.
			 * You can only have ONE finally block.
			 */
			System.out.println("FIIIINALLY");
		}
	}
	
	public String trickyBusiness(){
		try{
			throw new IOException();
		}catch(Exception e){
			return "CATCH";
		}finally{
			return "FINALLY";
		}
	}
	
	public void customException(){
		try {
			throw new CustomException();
		} catch (CustomException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
