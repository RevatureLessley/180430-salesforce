package com.revature.scopes;

public class Person {
    private String name;
    private int age;
    static int personCount = 0;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
        personCount++;
    }

    public void printPersonInfoThreeTimes() {
        String fullInfo = name + ", who is " + age + " years old.";

        for (int i = 0; i < 3; i++) {
            System.out.println(fullInfo);
        }
    }
}
