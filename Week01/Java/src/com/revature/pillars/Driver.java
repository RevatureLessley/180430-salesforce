package com.revature.pillars;

public class Driver {

	public static void main(String[] args) {
		Mazda6 mazda = new Mazda6(
				 new Engine("Backfiring", 15),
				 new Transmission("Grinding",22),
				 new Muffler("Pretty muffled", 18),
				 new Wheel("Good",54),
				 new Wheel("Good",54),
				 new Wheel("Good",54),
				 new Wheel("Good",54)
				);
		System.out.println(mazda.vehicleCheck());
		mazda.setSpeed(5);
		System.out.println(mazda.drive());

	}//main

}//class
