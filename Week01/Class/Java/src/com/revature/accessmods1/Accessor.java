package com.revature.accessmods1;

public class Accessor {
    private String priv = "Private";
    String def = "Default";
    protected String prot = "Protected";
    public String pub = "Public";

    public void writeStuff() {
        System.out.println(priv);
        System.out.println(def);
        System.out.println(prot);
        System.out.println(pub);
    }
}
