package com.revature.controlstatements;
/*
 * Reverse domain naming: start with "com".stuff.stuff.
 * Like website but backwards
 */

public class Driver {

	public static void main(String[] args) {
		/*
		 * Control statements are any blocks that can control the flow of the application
		 * IE, different branches, loops, etc
		 */
		
		//examples
		//for loop
		//for(incrementor;condition;incrementblock){execution}

		for (int i =5;i >0;i--){
			System.out.println(i);
		}//for
		
		//for each
		//int[] is = new int[5]; //declaration
		int[] is = {1,2,3,4,5};//initialization
		
		for(int out:is){
			System.out.println(out);
		}//for each
		
		int k = 0;
		while(k <20){//iterate while condition is true
			System.out.println(k++);			
		}//while
		
		//do-while loop will execute once before checking condition
		do{
			System.out.println(k--);
		}while(k>0);
		
		int option = (int)Math.random()*4;//casting
		/*
		 * Math.random is a java library provided by default
		 * It produces a random double in between 0-1. Not including 1
		 * I times that number by 4 guaranteeing 4 diff possibilities
		 * because the double to int casting will round the number
		 */
		switch(option){
			case 0:
				System.out.println("Beeted hams");
				break;//takes control out of a control statement
			case 1:
				System.out.println("French dipped hams");
				break;
			case 2:
				System.out.println("Grapefruit hams");
				break;
			default:
				System.out.println("Out of Hams");
				break;				
		}//switch
		
		//continue and break
		/*
		 * Break exits a control statement's block
		 * Continue skips to the beginning of the next iteration
		 */
		
		for (int i =0;i<50;i++){
			if (i%2==0)
				continue;
			if(i==35)
				break;
			System.out.println(i);
		}//for
		
		
		
		
		
	}//main

}//class
