package com.revature.exceptions;

/**
 *
 * @author jdhou
 */
public class CustomException extends Exception{
    @Override
    public String getMessage(){
        return "This is customized, oh no!";
    }
}
