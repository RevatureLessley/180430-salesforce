package pkg1800430.week1;

public class Person {
    private String name;
    private int age;
    static int personCount = 0;
    
    public Person(){
        personCount++;
    }
    
    public Person(String name){
        this.name = name;
        personCount++;
    }
    
    public Person(int age){
        this.age = age;
        personCount++;
    }
    
    public Person(String name, int age){
        this.name = name;
        this.age = age;
        personCount++;
    }
    
    public void printPersonInfoThreeTimes(){
        String fullInfo = name + ", who is " + age + " years old...";
        
        for(int i = 0; i < 3; i++){
            System.out.println(fullInfo);
        }
    }
    
    public void setName(String name){
        this.name = name;
    }
    
    public void setAge(int age){
        this.age = age;
    }
    
    public String getName(){
        return name;
    }
    
    public int getAge(){
        return age;
    }
}
