package com.revature.exceptions;

import java.io.IOException;

public class Driver {
	public static void main(String[] args) {
		/*
		 * an exception can safely be described as an incident where something 
		 * unexpected ocurs.
		 * -When an application behaves in a manner it should not.
		 * 
		 * An exception is not an error
		 * both are 2 seperate classes
		 * An error can be described as an incedent that cannot be reasonably revoced from.
		 * Think: OutOfMerroryError(Heap) and StackOverFlowError(Stack)
		 */
		Driver d = new Driver();
		System.out.println("made it to the end");
		d.checked1();
		

	}
	public void divisionByZeroException() {
		System.out.println(1/0);

	}
	
	/*
	 * we can revover from an exception by utilizing try/cathch blocks the use 
	 * of thee is called exception handling
	 */
//	public void handledException() {
//		try {
			/*
			 * the try block surrounds risky code that might throw an exception.
			 * The try bock requires at least one atch block assuming you are ony using
			 * Throwable -> error and exception
			 * exception -> runtime exception io-exception
			 * unchecked exceptions: Runtime exceptions arithmmetic exception null pointer exception
			 * uncheck exception does not require a try catch block to run
			 * 	- found in run time
			 * 	- typically product of user error
			 * check exections will not execute the program
			 * 	- clearly a risk
			 */
//			throw new NullPointerException();
			//thow is used to trigger a specific exemption
//		} catch(NullPointerException())
		
		/*
		 * you can multiple catch blocks but them must be ordered from mmost specific to least of 
		 * risk dead code
		 */
		
//	}
	public void checked1() {
		checked2();
	}
	public void checked2() {
			checked2();
		}
	public void checked3() {
		try {
			throw new IOException(); //checked exceptions must be handled
		} catch(IOException e) {
			e.printStackTrace();
		}
		
		
	}
	
	public void finallyBlocks() {
		try {
			System.out.println(1/0);
		} catch(Exception e) {
			
		}finally {
			/* a finally block is the 3rd kind of exception hadling blcok that will trigger
			 * no matter what. If an exception occurs the catch block triggers then
			 * the finally. If not exception occurs, the finally still triggers after the try block
			 * IT always triggers (except 2 possiblities)
			 * 1. System crashing error
			 * 2. if a user invokes system.exit(0) before it
			 * 	- not above commanbd is the equivalent of taking a sledge hammer t you computer
			 * 
			 * typically you want a finally block for code you want to excute in the event an exception occurs
			 * IE closing open strings, closing files, maby even saving files. 
			 */
		}
//		public string trickyBusiness() {
//			try {
//				throw new IOException();
//			}catch(Exception e) {
//				return "Catch"
//			}finally {
//				return "finally"
//			}
//		}
		
		
	}
	public void customException() {
		try {
			throw CustomException();
		} catch {
			
		}
	}
}
