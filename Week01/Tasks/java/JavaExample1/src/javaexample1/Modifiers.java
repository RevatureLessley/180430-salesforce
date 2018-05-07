/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javaexample1;

/**
 *
 * @author Jeff
 */
public class Modifiers {
    /*
    two kinds of modifiers in java, access and non access
    Access Modifiers:
        private -restricts access to a class entitiy from anywhere that is not the classs itself
            -IE you cannot access private methods or fields from outside of this class
        default is simply a name developers call this access modifier in reality it is simply the access a variable ./method has when you dont add any modifiers at all
                -Access is limited to anything that is within the same package as the class
        Proteted -protected offers access to any class within the same package or any class that is subclass to this class
        Public -accessable everywhere
    
    for non access modifiers we have:
    static: sets resource to be available without instance of class, limits to only one instance shared amoung all things of this class
    final: variable cannot be changed, is constant
    abstract: forgoes body implementation of a class until inherited
    native: no boyd for the method implementation is done outside of java
    strictfp: enforces a rules of IEEE standards on floating points
    volatile: must be accessed via main memory not individual thread's stacks, essentially markin it as important resource that will be hit by multiple threads
    synchronized: limits amount of threads that can access the resource to one at a time
    transient: prevents a specific field frombeing serialized
    */
    
    private String priv="private";
    String def="defalut";
    protected String proc="proc";
    public String pub="public";
    
    public Modifiers(){
        System.out.println(priv);
        System.out.println(def);
        System.out.println(proc);
        System.out.println(pub);
    }
}
