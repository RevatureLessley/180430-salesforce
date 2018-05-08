package com.revature.exceptions;

import java.io.IOException;

import com.sun.org.apache.xerces.internal.dom.AbortException;

public class Driver {
	/*
	 * An exception can safely be described as an incident where something
	 * Unexpected occurs.
	 * 
	 * -When an application behaves in a manner it should not.
	 * 
	 * An exception is NOT an error
	 * Both are two separate classes.
	 * An error can be described as:
	 * - incident that cannot be reasonabably recovered from.
	 * -Think: OutOfMemoryError(Heap) and StackOverFlowError(Stack)
	 */
	public static void main(String[] args) throws IOException {

		Driver d = new Driver();
		d.handledException();
		d.checked1();
		//d.divisionByZeroException();
		// TODO Auto-generated method stub
	}
	public void divisionByZeroException() {
		System.out.println(1/0);
		System.out.println("This line will not execute");
	}
	/*
	 * We can recover from an exception by utilizing try/catch blocks.
	 * The use of these is called Exception Handling.
	 */
	/*
	 * Use a try block to surround risky code that might throw an exception
	 *The try block requires at least ONE catch block assuming you are only using
	 *catch blocks.
	 */
	public void handledException() {
		try{	
			String h = null;
			h.toString();
			//throw is used to trigger a specific exception.

		}catch(NullPointerException e) {
			/*
			 * In the event of a try block triggering an exception, program execution
			 * will immediately forward over the catch block.
			 */
			System.out.println("CAUGHT");
		}catch(ArithmeticException e) {
			/*
			 * All these exceptions are uncheckd, since thye are all a part of RuntimeException
			 * which does NOT require you have try catch
			 */
		}
		catch(RuntimeException e) {
			System.out.println("CAUGHT");

		}
	}
	public void checked1() throws IOException {
		checked2();
	}
	public void checked2() throws IOException {
		checked3();
	}
	//	public void checked3() {
	//		try {
	//			throw new IOException();
	//		} catch (IOException e) {
	//			e.printStackTrace();
	//		}//Checked exceptions MUST be handled
	//	}

	public void checked3() throws IOException {
		throw new IOException(); //Throw an exception past the main method and it will result in a crash
		/*
		 * throws is used for exception ducking/propagation. You can set it up so
		 * the calling method/methods will handle the exception instead of just the specific
		 * method that triggered it.
		 * Why?
		 * It I had 18 methods that all triggered arithmetic exceptions. I would prefer to 
		 * invoke throws on the 18, and have the calling method handle it for me. this would
		 * opposed to writing 18 separated try/catch blocks.
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
	/*
	 * This will display "FINALLY" 
	 */

	public String trickyBusiness() {
		try {
			throw new IOException();
		}catch(Exception e) {
			return "CATCH";
		}finally {
			return "FINALLY";
		}
	}

	public void customException(){
		try {
			throw new CustomException();
		} catch (CustomException e) {
			e.printStackTrace();
		}
	}
}
