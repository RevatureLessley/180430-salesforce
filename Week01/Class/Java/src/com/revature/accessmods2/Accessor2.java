package com.revature.accessmods2;

import com.revature.accessmods1.Accessor;

public class Accessor2 extends Accessor {

    public static void main(String[] args) {

    }

    public void doStuff() {
        //System.out.println(priv);
        //System.out.println(def);
        System.out.println(prot);
        System.out.println(pub);

        Accessor2 a2 = new Accessor2();

        //System.out.println(a2.priv);
        //System.out.println(a2.def);
        System.out.println(a2.prot);
        System.out.println(a2.pub);

        Accessor a = new Accessor();

        //System.out.println(a.priv);
        //System.out.println(a.def);
        //System.out.println(a.prot);
        System.out.println(a.pub);
    }
}
