package com.revature.controlstatements;
/*
 * naming format for packages is known as Reverse Domain Naming.
 * as the name implies, the package name is your company's site domain, but backwards.
 * i.e. 'com'.companyname.boop
 * just take the website url and type it in backwards order
 */
public class Driver {

	public static void main(String[] args) {
		/*
		 * control statements are any blocks of code that can control the flow of the application
		 * i.e. different branches, loops, etc.
		 */

		/*
		 * examples:
		 * 		for loop
		 * 			for(incrementor; condition; increment block){
		 * 				execution
		 * 			}
		 */
		
		for(int i=5; i>0; i--) {
			System.out.println(i);
		}

		//having --i results in the same output as the above loop. the --i is resolved AFTER the print statement has already run
//		for(int i=5; i>0; --i) {
//			System.out.println(i);
//		}
		
		//enhanced for loops
		//A.K.A. foreach loop
		int[] arr = {1,2,3,4,5}; //create and populate an array simultaneously. the size will be 5, given the amount of input
		
		for(int out:arr) {
			System.out.println(out);
		}
		
		//infinite loop, if you wanted to do that
//		for(int i=0;;) {
//			System.out.println("Infinity and " + i++);
//		}
		
		System.out.println("-----WHILE LOOP-----");
		
		//while loops
		//iterate while condition is true
		int k = 0;
		while(k < 20) {
			System.out.println(k++);
		}
		
		System.out.println("-----DO-WHILE LOOP-----");
		
		//do-while loop
		/*
		 * a do-while loop will execute ONCE before checking the condition
		 */
		do {
			System.out.println(k--);
		}while(k>0); //NOTE: k=20 at this point, given the above while loop
		
		//switch statements
		
		/*
		 * Math.random() is a Java library that is provided by default.
		 * it produces a random double from 0 to 1, lower inclusive, upper exclusive (0 included, 1 excluded).
		 * multiplying the result by 4 guarantees 4 different possibilities, since converting from double to int
		 * will cut off the decimal, effectively rounding down
		 */
		int option = (int)(Math.random()*4); //Math.random returns a random double. we cast this into an int using (int)
		
		switch(option) {
		case 0:
			System.out.println("Beeted Hams");
			break; //takes control out of curly braces. (takes control out of control statement). without break, we would continue executing lines below.
		case 1:
			System.out.println("French-dipped Hams");
			break;
		case 2:
			System.out.println("Grapefruit Hams");
			break; //I initially forgot to put a break here. running the code resulted in printing both this statement and the default statement below.
		default:
			System.out.println("Steamed Hams");
			break;
		}
		
		//continue and break
		/*
		 * break exits a control statement's block
		 * continue skips to the beginning of the next iteration
		 */
		
		//this prints all odd numbers up to 33
		for(int i = 0; i < 50; i++) {
			if(i%2==0)
				continue;
			if(i==35)
				break;
			System.out.println(i);
		}

		//ternary operator
		/*
		 * if (expression) ? [return TRUE result] : [return FALSE result]
		 */
		int r1 = (int)Math.random()*100;
		int r2 = (int)Math.random()*100;
		String result = (r1<r2) ? "yup" : "nope"; 

	}

}
