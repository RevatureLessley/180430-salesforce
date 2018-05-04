package com.revature.accessmodifiers;

/**
 *
 * @author jdhou
 */
public class Accessor {
/*
* There are two kinds of 'modifiers' in java.
    We have 'access modifiers' and 'non-access modifiers'
    Access modifiers:
    private
    - Restricts access to a class entity from anywhere that is not the class
    itself
    - You can't access private methods from without the class
    default
    - access available when no access modifier is specified
    - Restricted to anything that is within the same package
    protected
    - Restricts access to same package or subclass of this class
    public
    - Full accessibility
    
    non-access modifiers
    static
    - Sets resource to be available without instance, limited to only instance
    of this
    final
    - Constant and immutable variable or removes override ability of methods
    - final classes cannot be subclassed
    abstract
    - forgoes body implementation of a method until inherited
    native
    - no body for the method, implementation is done outside of java
    strictfp
    - enforces all rules of IEEE standards of floating points
    volatile
    - variable must be accessed via main memory, not individual threads (stacks)
    - marks variable as an important resource to be hit by multiple threads
    synchronized
    - limits amounts of threads that can access resource to one at a time
    transient
    - prevents specific field from being serialized
*/
    
    private String priv = "Private";
    String def = "Default";
    protected String prot = "Protected";
    public String pub = "Public";
    
    public void writeStuff(){
        System.out.println(priv);
        System.out.println(def);
        System.out.println(prot);
        System.out.println(pub);
    }
}
