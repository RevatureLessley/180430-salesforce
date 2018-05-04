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
public class newestClass {
    public int i=0;
    public int j=0;
    public static int s=0;
    public newestClass(int i, int j){
        this.i=i;
        this.j=j;
        s++;
    }
    public void increment(){
        s++;
    }
    public void output(){
        System.out.println(i+" "+j+" "+s);
    }
    public static void statMeth(){
        System.out.println("outpute static meth");
    }
}
