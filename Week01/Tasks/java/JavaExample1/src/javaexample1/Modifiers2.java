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

//naming format for packages, reverse domain naming, teh name asit suggests is where you put packages tructure starting with 
//'com'.stuff.stuff
public class Modifiers2 extends Modifiers{
    //inherit all non private methods and fields, therefrore you can access them in this class without creating them
    public final static boolean p=true;
    public void doStuff(){
        System.out.println(pub);
        System.out.println(proc);
        System.out.println(def); //wouldn't work if this were a different package
        for(String o="";o!="hhhh";o+="h"){
            System.out.println(o);
        }
    }
}
