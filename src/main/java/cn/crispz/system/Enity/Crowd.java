package cn.crispz.system.Enity;

import cn.crispz.system.Dao.Province;
import lombok.ToString;

import java.util.ArrayList;

@ToString
public class Crowd {
    public ArrayList<Person> crowdOne = new ArrayList<>();
    public ArrayList<Person> crowdTwo = new ArrayList<>();
    public ArrayList<Person> crowdThree = new ArrayList<>();
    public ArrayList<Person> crowdFour = new ArrayList<>();
    public Province province = new Province();
    //患病人数
    public Integer illOne = 0;
    public Integer illTwo = 0;
    public Integer illThree = 0;
    public Integer illFour = 0;

    public Crowd(int n, int n1){
        for(int i = 0; i < n; i++){
            crowdOne.add(new Person());
            crowdTwo.add(new Person());
            crowdThree.add(new Person());
            crowdFour.add(new Person());
        }
        for (int i = 0; i < n1; i++) {
            int randNum = (int)(Math.random() * crowdOne.size());
            crowdOne.get(randNum).illed = true;
            Integer lstIll = province.province_val.get(crowdOne.get(randNum).pos);
            province.province_val.put(crowdOne.get(randNum).pos,lstIll + 1);
            illOne++;
        }
        for (int i = 0; i < n1; i++) {
            int randNum = (int)(Math.random() * crowdTwo.size());
            crowdTwo.get(randNum).illed = true;
            Integer lstIll = province.province_val.get(crowdTwo.get(randNum).pos);
            province.province_val.put(crowdTwo.get(randNum).pos,lstIll + 1);
            illTwo++;
        }
        for (int i = 0; i < n1; i++) {
            int randNum = (int)(Math.random() * crowdThree.size());
            crowdThree.get(randNum).illed = true;
            Integer lstIll = province.province_val.get(crowdThree.get(randNum).pos);
            province.province_val.put(crowdThree.get(randNum).pos,lstIll + 1);
            illThree++;
        }
        for (int i = 0; i < n1; i++) {
            int randNum = (int)(Math.random() * crowdFour.size());
            crowdFour.get(randNum).illed = true;
            Integer lstIll = province.province_val.get(crowdFour.get(randNum).pos);
            province.province_val.put(crowdFour.get(randNum).pos,lstIll + 1);
            illFour++;
        }
    }
}
