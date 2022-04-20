package cn.crispz.system.Dao;

import lombok.ToString;

import java.util.HashMap;

@ToString
public class Province {
    public String[] provinces = {"河北", "山西", "辽宁", "吉林", "黑龙江", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "海南", "四川", "贵州", "云南", "陕西", "甘肃", "青海", "台湾", "内蒙古", "广西", "西藏", "宁夏", "新疆", "北京", "天津", "上海", "重庆", "香港", "澳门", "南海诸岛"};
    public String getRandProvince() {
        String ret = provinces[(int)(Math.random() * provinces.length)];
        return ret;
    }
    public HashMap<String,Integer> province_val = new HashMap<>();
    public Province(){
        for(int i = 0; i < provinces.length; i++){
            province_val.put(provinces[i], 0);
        }
    }

}
