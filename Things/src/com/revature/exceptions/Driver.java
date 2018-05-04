package com.revature.exceptions;

import java.io.IOException;

public class Driver {
	/*
	 * an exception can safely be described as "an incident where something unexpected occurs."
	 *  	when an application behaves in a manner it should not.
	 * 
	 * an exception is NOT an error
	 * both are separate classes
	 * an error can be described as:
	 * 		"an incident that cannot be reasonably recovered from"
	 * 		think of: OutOfMemoryError (heap) and StackOverflowError (stack)
	 */

	public static void main(String[] args) throws IOException{
		Driver d = new Driver();
		
//		d.checked1(); //we get an error because of the ducking chain that we created in all the "checked" methods, coupled with our ducking in the main method
		d.finallyBlocks();
		
		System.out.println(d.trickyBusiness());

		//		d.divisionByZeroException(); //this will result in an error. we cannot divide by 0, and the compiler doesn't know what to do.
		System.out.println("We made it!"); //this will not run as long as the above line runs.

	}

	public void divisionByZeroException() {
		System.out.println(1/0);
		System.out.println("This code is never reached");
	}

	/*
	 * we can recover from an exception by utilizing try/catch blocks.
	 * the use of these is called Exception handling
	 */

	public void handledException() {
		
		try {

			/*
			 * use a try block to surround risky code that might throw and exception
			 * the try block requires at least ONE catch block, assuming you are only using catch blocks
			 */

			//these two lines of code will make the print statement below accessible. without these, we get a compile error
			String h = null;
			h.toString();
			//"throw" is used to trigger a specific exception (see JavaDocs for exceptions)
			//			throw new NullPointerException();
			System.out.println("This code is never reached");
		}catch(NullPointerException e) {

			/*
			 * in the event of a try block triggering an exception, program execution will immediately
			 * forward over to the catch block.
			 */
			System.out.println("CAUGHT NULLPOINTEREXCEPTION");
		}catch(ArithmeticException e) { 
			/*
			 * these three exceptions are unchecked, since they are all a part of RuntimeException.
			 * they do not require try/catch blocks.
			 */
			System.out.println("CAUGHT RUNTIME EXCEPTION");
		}catch(RuntimeException e) { 
			//having RuntimeException above NullPointerException results in an error. more specific errors belong higher on the list.
			//doing the opposite risks dead code.
			System.out.println("CAUGHT RUNTIME EXCEPTION");
		}

		/*
		 * Exception Class hierarchy:
		 * 		[IOException]
		 * 		[RuntimeException]
		 * 			somewhere down the line, children of this are:
		 * 				ArithmeticException 
		 * 				NullPointerException
		 * 					these two exceptions are siblings.
		 * 		RuntimeException encompasses both Arithmetic and NullPointer
		 * 			this means that having the children below the parent in catch blocks will result in dead code, which Eclipse doesn't like
		 * 
		 * Throwable encompasses Error and Exception
		 * 
		 * RuntimeException and its children are UNCHECKED exceptions
		 * 		unchecked exceptions DO NOT require try/catch blocks to run
		 * 		ex. can't always predict when we'll get a null value, not your fault
		 * everything else (Throwable, Error, Exception, IOException) are CHECKED exceptions
		 * 		checked exceptions DO require try/catch blocks to run
		 * 		ex. checking to make sure a file exists before running a search for that file
		 */
	}


	/*
	 * ducking/propagation
	 * adding "throws [Exception]" to a method will toss responsibility to the method(s) calling this one, rather than the method that triggered it.
	 * 
	 * why though?
	 * if you had a ton of methods that all triggered the same Exception, it would be more efficient/preferable to invoke "throws" on those methods
	 * and instead have the calling method handle it. this way, you avoid having to write 18 separate try/catch blocks 
	 * 
	 */
	public void checked1() throws IOException{
		checked2();
	}

	public void checked2() throws IOException{
		checked3();	
	}

	public void checked3() throws IOException{
		try {
			throw new IOException();
		}catch(IOException e) { //checked exceptions MUST BE HANDLED
			e.printStackTrace();
			//throwing an exception past the main method will result in a crash. here, we throw it from checked3 to 2 to 1 to main.
		}
	}
	
	public void finallyBlocks() {
		
		try {
			System.out.println("TRY BOIS");
			System.out.println(1/0);
		}catch(Exception e) { //don't catch the entire Exception library if you know what exception you're catching. that's lazy. wastes power.
			System.out.println("CATCHERINO");
		}finally {
			/*
			 * finally is the third type of exception handling block that will trigger NO MATTER WHAT.
			 * if an exception occurs, the catch block triggers, followed by the finally block.
			 * if NO exception occurs, the try block triggers, followed by the finally block.
			 * 
			 * the finally block will trigger UNLESS:
			 * 		1 - a system-crashing error occurs
			 * 		2 - a user invokes system.exit(0) before it
			 * 				NOTE: system.exit(0) is the equivalent of taking a sledgehammer to your computer.
			 * 					  DO NOT rely on this for exiting applications.
			 * 					  this gives your application NO CHANCE to clean up after itself.
			 * 
			 * you typically want a finally block for code that you want to execute in the event that an exception occurs
			 * 		i.e. closing open streams, closing files, maybe saving files, etc.
			 * 
			 * NOTE: you don't need a catch block IF you have a finally block.
			 * 		 only ONE finally block is allowed.
			 */
			
			System.out.println("FINALLY");
		}
	}
	
	public String trickyBusiness() {
		
		try {
			throw new IOException(); //we throw this Exception
		}catch(Exception e) {
			return "CATCH"; //in theory, we should be returning this. we catch the IOException, so we should be here.
		}finally {
			return "FINALLY"; //but finally says "heck you" and takes over. we actually return "FINALLY".
		}
	}
	
	public void customException() {
		try {
			throw new CustomException(); // this is not a child of RuntimeException. this means it is a checked exception, and must be within a try/catch block
		} catch (CustomException e) {
			e.printStackTrace();
		} 
	}

}
