package com.revature.accessmod2;

import com.revature.accessmodifiers.Accessor;

/**
 *
 * @author jdhou
 */
public class acc2 extends Accessor{
    
    public void doStuff(){
        System.out.println(prot);
        System.out.println(pub);
        //System.out.println(def);
        //System.out.println(priv);
        
        acc2 a2 = new acc2();
        
        System.out.println(a2.pub);
        System.out.println(a2.prot);
        //System.out.println(a2.def);
        //System.out.println(a2.priv);
        
        Accessor a = new Accessor();
        
        System.out.println(a.pub);
        //System.out.println(a.prot);
        //System.out.println(a.def);
        //System.out.println(a.priv);
        
    }
}
