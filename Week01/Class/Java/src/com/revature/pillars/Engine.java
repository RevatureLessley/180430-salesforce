package com.revature.pillars;

public class Engine implements CarPart {

    private int age;
    private String quality;

    public Engine(String quality, int age) {
        this.age = age;
        this.quality = quality;
    }

    @Override
    public String checkQuality(String quality) {
        String result = "This ol' engine is sporting some " + quality;
        return result;
    }

    @Override
    public String checkAge(int age) {
        String result = "The engine is " + age + " years old.";
        return result;
    }
}
