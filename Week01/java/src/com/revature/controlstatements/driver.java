package com.revature.controlstatements;
/*
 * Naming format for packages is knows as reverse domain naming. The name, as it suggests 
 * is where you put package structure starting with 'com'.stuff.stuff
 * like a url but backawards
 */
public class driver {
	public static void main(String[] args) {
		/*
		 * control statements are any blocks of code that can conrol
		 * the flow of the application. ID, different branches loops, etc
		 */
		//examples
		//For Loop
		//for(incrementor; condtin; increment block) {execution}
		
		for(int i = 5; i > 0; --i) {
			System.out.println(i);
		}
		//enhanced for loops
//		int[] is = new int[5]; make an array
		int[] is = {1,2,3,4,5};
		for( int out:is) {
			System.out.println(out);
		}
		int k = 0;
		while( k < 20) {
			System.out.println(k++);
		}
		
		do {
			System.out.println(k--);
			
		} while(k>0);
		
		int option = (int)(Math.random()*4);
		switch(option) {
		case 0:
			System.out.println("Beeted Hams");
			break;
		case 1:
			System.out.println("French Hams");
			break;
		case 2:
			System.out.println("Grapefruit Hams");
			break;
		default:
			System.out.println("No mo Hams");
		}
		
		//Continue and creak
		/*
		 * break exits a control statements block
		 * continue skips to the begging of the next iteration.
		 */
	
		//ternary operators: if(expression) ? return true result: return false result
		String result = (10<5) ? "yup" : "nope";
		
	}
	
}
