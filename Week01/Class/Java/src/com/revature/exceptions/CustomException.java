package com.revature.exceptions;

public class CustomException extends Exception {
    @Override
    public String getMessage() {
        return "This is fucking overridden";
    }

    
}
