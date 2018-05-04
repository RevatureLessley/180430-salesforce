package com.revature.exceptions;

import java.io.IOException;

public class Driver {
	/*
	 * an exception can safely be described as an incident where something unexpected occurs
	 * -When an application behaves in a manner it should not
	 * 
	 * An exception is not an error, both are 2 separate classes
	 * An error can be described as:
	 * -an incident that cannot be reasonably recovered from
	 */
	public static void main(String[] args)throws IOException{
		Driver d = new Driver();
		//d.divByZero();//causes exception
		d.handledException();
		//d.checked1();
		d.finallyBlocks();
		d.trickyBusiness();
		
	}//main
	
	public void divByZero(){
		System.out.println(1/0);
	}//divByZero
	
	/*
	 * Recover from exceptions using try catch blocks, exception handling
	 * order try-catch most-specific to least
	 */
	
	public void handledException(){
		try{//use try block to surround risky code
			//try block requires at least 1 catch block
			String h = null;
			h.toString();
			System.out.println("Got to here");
		}catch(NullPointerException e){
			/*
			 * In the event of a try-block triggering an exception
			 * program execution will forward to catch block
			 */
			System.out.println("Caught: "+ e);
		}//catch
		catch(RuntimeException e){			
			System.out.println("Caught: " +e);
		}//catch
	}//handledException
	
	public void checked1() throws IOException{
		checked2();
	}
	public void checked2() throws IOException{
		checked3();
	}
	public void checked3() throws IOException{
		throw new IOException();//checked exceptions must be handled
		//throw an exception past main and it will result in a crash
		/*
		 * Throws is used for exception ducking/propagation. You can set it up so that the calling method
		 * will handle the exception instead of just the specific method that triggered it
		 * Why even bother?
		 * -1 try catch block and 18 throws
		 */
	}
	
	public void finallyBlocks(){
		try{
			System.out.println(1/0);
		}catch(Exception e){
			System.out.println("Exception: " + e);
		}//catch
		finally{
			/*
			 * A finally block is the 3rd kind of exception handling block that will trigger
			 * no matter what. If an exception occurs, the catch block occurs, then the finally.
			 * If no exception, the finally still triggers after the try block.
			 * Always triggers except:
			 * 	1. A system crashing error
			 * 	2. User calls system.exit(0);
			 * 		DO NOT DO THIS
			 * 
			 * You want a finally block for code that you want to execute in the event an exception occurs
			 * IE closing streams, files, saving files, etc.
			 * 
			 * NOTE: Catch not required before finally. May only have 1 finally
			 */
			System.out.println("Finally");
		}//finally
	}//finallyBlocks
	
	public String trickyBusiness(){
		try{
			throw new IOException();
		}catch(IOException e){
			return "Catch";
		}//catch
		finally{
			return "Finally";
		}//finally
	}//trickybusiness
	
	public void customException(){
		try{
		throw new customException();
		}catch(Exception e){
			
		}//catch
	}//customException
	
	

}//class
