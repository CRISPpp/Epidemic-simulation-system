package cn.crispz.system.Enity;

import cn.crispz.system.Dao.Province;
import lombok.ToString;

@ToString
public class Person {
    public Boolean death;
    public Integer vaccine;
    public Boolean illed;
    public Boolean iso;
    public String pos;

    public Person(){
        this.death = false; //是否死亡
        this.vaccine = 0; //疫苗接种数0
        this.illed = false;//是否感染
        this.iso = false; //是否被隔离
        this.pos = new Province().getRandProvince();
    }
}
