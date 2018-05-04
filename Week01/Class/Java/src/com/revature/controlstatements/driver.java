package com.revature.controlstatements;

public class driver {

    public static void main(String[] args) {

        //i-- & --i are the same in Java
        for (int i = 5; i > 0; i--) {
            System.out.println(i);
        }

        //int[] is = new int[5];
        int[] is = {1, 2, 3, 4, 5};

        for (int out:is) {
            System.out.println(out);
        }

        int j = 0;
        while (j < 20) {
            System.out.println(j++);
        }

        int option = (int)(Math.random() * 4);
        switch (option) {
            case 0:
                System.out.println("Vegan Hams");
                break;
            case 1:
                System.out.println("Mangoes");
                break;
            case 2:
                System.out.println("Vegan Sausage");
                break;
            case 3:
                System.out.println("Vegan Pizza");
                break;
            default:
                System.out.println("Food not recognized.");
                break;

        }


    }
}
