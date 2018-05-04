package com.revature.exceptions;

import java.io.IOException;

public class Driver {

    public static void main(String[] args){
        Driver d = new Driver();
        //d.divisionByZeroException();
        //d.handleException();
        //d.checked1();
        //d.finallyBlock();
        d.trickyBusiness();
        System.out.println("Made it to the end...");
    }
    
    public void divisionByZeroException(){
        System.out.println(1/0);
    }
    
    public void handleException(){
        try{
            String h = null;
            h.toString();
            //throw new NullPointerException();
            System.out.println("This code is never reached");
        }
        catch(NullPointerException e){
            System.out.println("Caught");
        }
    }
    
    public void checked1(){
        checked2();
    }
    
    public void checked2(){
        checked3();
    }
    
    public void checked3(){
        try{
            throw new IOException();
        }
        catch(IOException e){
            e.printStackTrace();
        }
    }
    
    public void finallyBlock(){
        try{
            System.out.println(1/0);
        }
        catch(Exception e){
            System.out.println("catch");
        }
        finally{
            System.out.println("finally");
        }
    }
    
    public String trickyBusiness(){
        try{
            throw new IOException();
        }
        catch(Exception e){
            return " It's catch";
        }
        finally{
            return "It's finally";
        }
    }
}
