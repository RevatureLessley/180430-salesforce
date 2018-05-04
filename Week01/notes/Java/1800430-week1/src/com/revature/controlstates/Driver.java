package com.revature.controlstates;

public class Driver {
    
    public static void main(String[] args){
        
        // Control statements control the flow of the app.  loops, branches, etc.
        // examples
        // for loops
        // for(init; cond; inc){ }
        
        for(int i = 5; i > 0; i--){
            System.out.println(i);
        }
        
        // enhanced for loops
        
        //int[] is = new int[5];
        int[] is = {1,2,3,4,5};
        for(int out: is){
            System.out.println(out);
        }
        
        int k = 0;
        while(k < 20){
            System.out.println(k++);
        }
        
        int option = (int)(Math.random()*4);
        
        switch(option){
            case 0:
                System.out.println("Beeted Hams");
                break;
            case 1:
                System.out.println("French Dippped Hams");
                break;
            case 2:
                System.out.println("Grapefruit Hams");
                break;
            default:
                System.out.println("Out of hams...");
        }
        
        // break exits a control statement's block
        // continue skips to the beginning of the next iteration
        
        for(int i = 0; i < 50; i++){
            if(i%2 == 0){
                continue;
            }
            if(i == 35){
                break;
            }
            System.out.println(i);
        }
    }
}
