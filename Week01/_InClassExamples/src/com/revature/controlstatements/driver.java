package com.revature.controlstatements;

import java.util.ArrayList;
import java.util.List;

/*
 * Naming format for packages is known as 
 * reverse domain naming. The name, as it suggests
 * is where you put package structure starting with
 * 'com'.stuff.stuff.
 * Like a website URL, but backwards.
 */

public class driver {

	public static void main(String[] args) {
		/*
		 * Control statements are any blocks of code that can contorl
		 * the flow of the application. IE, different branches loops, etc.
		 */
		
		//examples
		//For loop
		//for(incrementor; condition; increment block){ execution }
		
		for(int i = 5; i >0; --i){
			System.out.println(i);
		}
		
		//enhanced for loops (Ryan calls it a foreach loop)
		//int[] is = new int[5]; THAS HOW YOU MAKE ARRAYS!
		int[] is = {1,2,3,4,5}; //This makes the array and populates at the same time!
		//This particular line creates an array of size 5, due to the amount of input.
		
		for(int out:is){
			System.out.println(out);
		}
		
/*		for(int i = 0;;){
			System.out.println("infinity and " + i++);
		}*/ //infinite for loop
		System.out.println("=====WHILE=====");
		
		//iterate while condition is true
		int k=0;
		while(k < 20){
			System.out.println(k++);
			
		}
		
		System.out.println("=====DO WHILE=====");
		/*
		 * A do while loop will execute ONCE before checking the condition.
		 */
		do{
			System.out.println(k);
		}while(k!=20); //Note k=20 at this point.
		
		
		int option = (int)(Math.random()*4);
					//^This converts Math.random(), which returns a random double into int.
		/*
		 * Math.random() is a java library that is provided by default.
		 * It produces a random double in between 0-1. Not including 1.
		 * I times that number by 4 guaranteeing 4 different possibilities, since when i convert
		 * a double to an int, it will cut off the decimal, effectively rounding the number down.
		 */
		
		switch(option){
		case 0:
			System.out.println("Beeted Hams");
			break; //Takes control out of the curly braces (Takes control out of a control statement)
		case 1:
			System.out.println("French Dipped Hams");
			break;
		case 2:
			System.out.println("Grapefruit Hams");
			break;
		default:
			System.out.println("Out of hams...");
		}
		
		//Continue and break
		/*
		 * Break exits a control statement's block.
		 * Continue skips to the beginning of the next iteration.
		 */
		
		System.out.println("=====break and continue=====");
		
		for(int i = 0; i < 50; i++){
			if(i%2==0){
				continue;
			}
			if(i==35){
				break;
			}
			System.out.println(i);
		}
		
		//Ternary operator: if (expression) ? return true result : return false result
		String result = (10<5) ? "yup" : "nope";
	}

}
