package com.revature.datatypesandstrings;

public class Driver {
    int i;
    double d;
    float f;
    short s;
    long l;
    char c;
    byte b;
    boolean bool;
    String string;


    public static void main(String[] args) {
        Driver driver = new Driver();
        driver.demo();
    }

    public void demo() {
        System.out.println("Int = " + i);
        System.out.println("double = " + d);
        System.out.println("float = " + f);
        System.out.println("short = " + s);
        System.out.println("long = " + l);
        System.out.println("char = " + c);
        System.out.println("byte = " + b);
        System.out.println("Bool = " + bool);
        System.out.println("String = " + string);

        i = 52;
        d = i;
        System.out.println("Int = " + d);
        i = (int)d;
        System.out.println("Int = " + i);

        f = 4.0f;
        l = 500000000000000000L;

        //with char, the min val is 0. Only positive numbers are used with char, which makes casting as explicit necessary.
        b = (byte)c;
        c = (char)b;

        String dogs = "Dogs";
        System.out.println(System.identityHashCode(dogs));

        StringBuilder sb = new StringBuilder("Bison");

        int j = 1;
        System.out.println("Looping " + j + " time(s)");
        long curTime;
        String str = "";
        

        curTime = System.currentTimeMillis();
        for (int i = 0; i < j; i++) {
            str += "s";
        }

        curTime = System.currentTimeMillis();
        for (int i = 0; i < j; i++) {
            str += "s";
        }

    }
}
