package com.revature.pillars;

public class Driver {

	public static void main(String[] args) {
		Mazda6 mazda = new Mazda6(
				 new Engine("Backfiring like a champ!", 15),
				 new Transmission("Grinding gears for days!", 22),
				 new Muffler("Sounds pretty muffled", 18),
				 new Wheel("Lookin good", 54),
				 new Wheel("Lookin good", 54),
				 new Wheel("Lookin good", 54),
				 new Wheel("Lookin good", 54)
				);
		System.out.println(mazda.vehicleCheck());
		mazda.setSpeed(5);
		System.out.println(mazda.drive());
	}

}
