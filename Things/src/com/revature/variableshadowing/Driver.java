package com.revature.variableshadowing;

public class Driver {
	
	/*
	 * Java is pass by value. this means:
	 * 		when you pass an argument, you pass a COPY of its value into a method.
	 * 		the COPY is manipulated, which is fine, but unless you accept the returned change,
	 * 		it will be lost.
	 */
	public static void main(String[] args) {
		Driver dr = new Driver();
		
		int i = 10;
		dr.changeInt(i); //this does nothing. it changes a copy of i, returing 100 in this case, but nothing is here to store that value. the value dies out.
		System.out.println(i); //i remains 10, unchanged.
		
		int[] is = {1,2,3,4,5};
		dr.changeIntArray(is);
		for(int j: is) {
			System.out.println(j);
		}
	}
	
	public int changeInt(int a) {
		a = a*a;
		return a;
	}
	
	/*
	 * variable shadowing
	 * 
	 * as mentioned in the polymorphism example, in covariance, a class takes the reference's variable declarations.
	 * this is a form of variable shadowing.
	 * another form is when you pass Objects to be altered.
	 * Java will pass the value of the array, which turns out to be the memory location of its values.
	 * 		in changing them, we are changing the values in memory.
	 * 
	 */
	public int[] changeIntArray(int[] is) {
		for(int i = 0;i < is.length;i++) {
			is[i] *= is[i];
		}
		return is;
	}

}
