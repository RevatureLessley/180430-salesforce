package com.revature.controlstatement;
/*
 * Naming format for package is known as 
 * reverse domain naming. The name, as it suggestes
 * is where you put package structure stating with
 * .com .stuff.stuff
 */
public class Drive {
	public static void main(String[] args) {
		/*
		 * Control statement are any blocks of code that can control 
		 * the flow of the application. IE, different branches loops, etc
		 * 
		 */
		
		//For loop
		//for(incrementor; condition; increment block){ execution }
		for (int i = 5; i > 0; i--) {
			System.out.println(i);
		}
		
		//enhanced for loop
		int[] is = {1,2,3,4,5};
		//this particular line create an array of size 5, due to the amount of input;
		for(int out:is) {
			System.out.println(out);
		}
		
		System.out.println("========== WHILE =========");
		//iterate while condition is true
		int k = 0;
		while(k < 20) {
			System.out.println("K value: "+k++);
		}

		System.out.println("========== DO WHILE =========");
		/*
		 * a do while loop will execute ONCE before checking the condition 
		 */
		do{
			System.out.println(k--);
		}while(k!=20);

		int option = (int) (Math.random() * 4) ; 
		//This converts Math.random() which return a random double into int 
		/*
		 * Math.random() is a java library that is provided by default.
		 * It produces a random double in between 0-1. Not including 1.
		 * I times that number by 4 guaranteeing 4 different possibilities, since when i convert
		 * a double to an int, it will cut off the decimal, effectively rounding the number down.
		 */
		
		switch(option) {
		case 0:
			System.out.println("case0");
			break; // Takes control out of the curly braces (Takes control out of a control statement)
		case 1:
			System.out.println("case1");
			break;
		case 2:
			System.out.println("case2");
			break;
		default:
			System.out.println("Deafault");
		}
		
		//Continue and break
		/*
		 * Break exits a control statement's block
		 * Continue skips to the beginning of the next iteration
		 */
		
		for(int i =0; i < 50; i++) {
			if(i%2 == 0) { //
				continue;
			}
			if(i == 35) { //stop at 35
				break;
			}
			System.out.println(i);
		}
		
		//Ternary operator : if (expression) ? return true result : return false result
		String result = (10<5) ? "up":"donw";
		
		
	}
}
