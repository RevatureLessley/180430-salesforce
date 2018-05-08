package com.revature.exceptions;

public class CustomException extends Exception{
    @Override
    public String getMessage(){
        return "This is customized, oh no!";
        //Inheriting from RuntimeException creates a custom unchecked exception.
        //Inheriting from Exception creates a custom checked exception.
    }
}