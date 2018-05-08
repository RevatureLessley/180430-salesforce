package com.revature.variableshadowing;

public class Driver {

    /*
     * Java is pass by value. What this means is when you pass an argument, you pass
     * a copy of its value into the method. That copy is manipulated, and that's
     * fine and dandy, but unless you accept the returned change, it will be lost.
     */
    public static void main(String[] args) {
        Driver driver = new Driver();
        int i = 10;
        driver.changeInt(i);
        System.out.println(i);

        int[] is = { 1, 2, 3, 4, 5 };
        driver.changeIntArray(is);
        for (int j : is) {
            System.out.println(j);
        }
    }

    public int changeInt(int a) {
        a *= a;
        return a;
    }

    public void changeIntArray(int[] is) {
        for (int i = 0; i < is.length; i++) {
            is[i] *= is[i];
        }
    }

    /*
     * Variable shadowing As mentioned in the polymorphism example, in covariance, a
     * class takes the reference's variable declarations. Thsi is a form of variable
     * shadowing. Another form is when you pass Objects to be altered. Java will
     * pass the value of the array, which turns out to be the memory location of its
     * value. So in changing them, we are indeed changing the values in memory.
     * 
     * We pass the copy of the object, which the copy itself, points to the same
     * location as the original piece.
     */
}