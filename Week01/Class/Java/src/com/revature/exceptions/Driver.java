package com.revature.exceptions;

import java.io.IOException;

public class Driver {

    public static void main(String[] args) throws IOException {
        Driver d = new Driver();
        //d.divisionByZeroException();
        d.handledException();
        d.checked1();
        d.finallyBlocks();

        System.out.println(d.trickyBusiness());
    }

    public void handledException() {
        try {
            String h = null;
            h.toString();
        } catch (NullPointerException e) {
            System.out.println("Caught");
        } catch (ArithmeticException e) {
            System.out.println("Caught");
        } catch (RuntimeException e) {
            System.out.println("Caught");
        }
    }

    public void checked1() throws IOException {
        checked2();
    }

    public void checked2() throws IOException{
        checked3();
    }

    public void checked3() throws IOException{
        //throw new IOException();
    }

    public void divisionByZeroException(){
        //System.out.println(1 / 0);
    }

    public void finallyBlocks() {
        try {
            System.out.println(1 / 0);
        } catch (Exception e) {
            System.out.println("Catchally");
        } finally {
            System.out.println("Finally");
        }
    }

    public String trickyBusiness() {
        try {
            throw new IOException();
        } catch (Exception e) {
            return "Catch";
        } finally {
            return "finally";
        }
    }

}
