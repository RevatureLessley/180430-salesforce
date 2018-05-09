package com.revature.pillars;

public class Driver {
	
	public static void main(String[] args) {
		Mazda6 mazda = new Mazda6(
				new Engine("Backfirin' to Betsy!", 15),
				new Transmission("Woah there, Lassy!", 22), 
				new Muffler("Muffled...", 18), 
				new Wheel("A bit tired...", 43), 
				new Wheel("A bit tired...", 43), 
				new Wheel("A bit tired...", 43), 
				new Wheel("A bit tired...", 43) 
				);
		
		System.out.println(mazda.vehicleCheck());
		mazda.setSpeed(69);
		System.out.println(mazda.drive());
	}

	
	
}
