package cn.crispz.system.Service;

import cn.crispz.system.Dao.Province;
import cn.crispz.system.Dao.ServiceResponse;
import cn.crispz.system.Enity.Crowd;
import cn.crispz.system.Enity.Person;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;

@RestController
public class SystemService {
    public double[] rt = {0.008, 0.006, 0.004, 0.002};//传染指数对应不同的疫苗接种数
    public double[] iso_rate = {0.01, 0.1, 0.5, 0.9};//隔离指数
    public double[] flow = {0.1, 0.1,0.05,0.025}; //流动指数
    public double death_rate = 0.0001;//死亡指数
    public double[] vaccine_rate = {0.005, 0.01, 0.02, 0.03};//接种比例
    public double heal_rate = 0.05  ;//治愈概率
    public Integer personSum = 1000;//初始人数
    public Integer personIlled = 50;//初始病人

    //存活人数
    public Integer liveOne = personSum;
    public Integer liveTwo = personSum;
    public Integer liveThree = personSum;
    public Integer liveFour = personSum;

    //死亡人数
    public Integer deathOne = 0;
    public Integer deathTwo = 0;
    public Integer deathThree = 0;
    public Integer deathFour = 0;

    //接种人数
    public Integer vaccineOne = 0;
    public Integer vaccineTwo = 0;
    public Integer vaccineThree = 0;
    public Integer vaccineFour = 0;





    //隔离人数
    public Integer isoOne = 0;
    public Integer isoTwo = 0;
    public Integer isoThree = 0;
    public Integer isoFour = 0;


    Crowd crowd = new Crowd(personSum, personIlled);
    //感染,流动后调用
    public void  getIllOne() {
        if(crowd.illOne == 0){
            for (int i = 0; i < 5; i++) {
                int randNum = (int)(Math.random() * crowd.crowdOne.size());
                crowd.crowdOne.get(randNum).illed = true;
                Integer lstIll = crowd.province.province_val.get(crowd.crowdOne.get(randNum).pos);
                crowd.province.province_val.put(crowd.crowdOne.get(randNum).pos,lstIll + 1);
                crowd.illOne++;
            }
        }else {
            HashMap<String, ArrayList<Integer>> posMark = new HashMap<>();
            //初始化哈希表
            for (int i = 0; i < crowd.province.provinces.length; i++) {
                posMark.put(crowd.province.provinces[i], new ArrayList<>());
            }

            for (int i = 0; i < crowd.crowdOne.size(); i++) {
                if (!crowd.crowdOne.get(i).death) {
                    String tmpPos = crowd.crowdOne.get(i).pos;
                    posMark.get(tmpPos).add(i);
                }
            }
            for (int i = 0; i < crowd.province.provinces.length; i++) {
                ArrayList<Integer> tmpP = posMark.get(crowd.province.provinces[i]);

                for (int j = 0; j < tmpP.size(); j++) {
                    int jj = tmpP.get(j);
                    if (!crowd.crowdOne.get(jj).illed) {
                        continue;
                    }
                    for (int k = 0; k < tmpP.size(); k++) {
                        if (j != k) {
                            int kk = tmpP.get(k);
                            if (!crowd.crowdOne.get(jj).death && !crowd.crowdOne.get(kk).death && crowd.crowdOne.get(jj).illed && !crowd.crowdOne.get(kk).illed) {
                                int tmpV = crowd.crowdOne.get(kk).vaccine;
                                if (Math.random() < rt[tmpV]) {
                                    crowd.crowdOne.get(kk).illed = true;
                                    int lstN = crowd.province.province_val.get(crowd.province.provinces[i]);
                                    crowd.province.province_val.put(crowd.province.provinces[i], lstN + 1);
                                    crowd.illOne++;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    public void  getIllTwo() {
        HashMap<String, ArrayList<Integer>> posMark = new HashMap<>();
        //初始化哈希表
        if(crowd.illTwo == 0){
            for (int i = 0; i < 5; i++) {
                int randNum = (int)(Math.random() * crowd.crowdTwo.size());
                crowd.crowdTwo.get(randNum).illed = true;
                Integer lstIll = crowd.province.province_val.get(crowd.crowdTwo.get(randNum).pos);
                crowd.province.province_val.put(crowd.crowdTwo.get(randNum).pos,lstIll + 1);
                crowd.illTwo++;
            }
        }
        else {
            for (int i = 0; i < crowd.province.provinces.length; i++) {
                posMark.put(crowd.province.provinces[i], new ArrayList<>());
            }

            for (int i = 0; i < crowd.crowdTwo.size(); i++) {
                if (!crowd.crowdTwo.get(i).death) {
                    String tmpPos = crowd.crowdTwo.get(i).pos;
                    posMark.get(tmpPos).add(i);
                }
            }
            for (int i = 0; i < crowd.province.provinces.length; i++) {
                ArrayList<Integer> tmpP = posMark.get(crowd.province.provinces[i]);

                for (int j = 0; j < tmpP.size(); j++) {
                    int jj = tmpP.get(j);
                    if (!crowd.crowdTwo.get(jj).illed) {
                        continue;
                    }
                    for (int k = 0; k < tmpP.size(); k++) {
                        if (j != k) {
                            int kk = tmpP.get(k);
                            if (!crowd.crowdTwo.get(jj).death && !crowd.crowdTwo.get(kk).death && crowd.crowdTwo.get(jj).illed && !crowd.crowdTwo.get(kk).illed) {
                                int tmpV = crowd.crowdTwo.get(kk).vaccine;
                                if (Math.random() < rt[tmpV]) {
                                    crowd.crowdTwo.get(kk).illed = true;
                                    int lstN = crowd.province.province_val.get(crowd.province.provinces[i]);
                                    crowd.province.province_val.put(crowd.province.provinces[i], lstN + 1);
                                    crowd.illTwo++;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    public void  getIllThree() {
        HashMap<String, ArrayList<Integer>> posMark = new HashMap<>();
        //初始化哈希表
        if(crowd.illThree == 0){
            for (int i = 0; i < 5; i++) {
                int randNum = (int)(Math.random() * crowd.crowdThree.size());
                crowd.crowdThree.get(randNum).illed = true;
                Integer lstIll = crowd.province.province_val.get(crowd.crowdThree.get(randNum).pos);
                crowd.province.province_val.put(crowd.crowdThree.get(randNum).pos,lstIll + 1);
                crowd.illThree++;
            }
        }
        else {
            for (int i = 0; i < crowd.province.provinces.length; i++) {
                posMark.put(crowd.province.provinces[i], new ArrayList<>());
            }

            for (int i = 0; i < crowd.crowdThree.size(); i++) {
                if (!crowd.crowdThree.get(i).death) {
                    String tmpPos = crowd.crowdThree.get(i).pos;
                    posMark.get(tmpPos).add(i);
                }
            }
            for (int i = 0; i < crowd.province.provinces.length; i++) {
                ArrayList<Integer> tmpP = posMark.get(crowd.province.provinces[i]);

                for (int j = 0; j < tmpP.size(); j++) {
                    int jj = tmpP.get(j);
                    if (!crowd.crowdThree.get(jj).illed) {
                        continue;
                    }
                    for (int k = 0; k < tmpP.size(); k++) {
                        if (j != k) {
                            int kk = tmpP.get(k);
                            if (!crowd.crowdThree.get(jj).death && !crowd.crowdThree.get(kk).death && crowd.crowdThree.get(jj).illed && !crowd.crowdThree.get(kk).illed) {
                                int tmpV = crowd.crowdThree.get(kk).vaccine;
                                if (Math.random() < rt[tmpV]) {
                                    crowd.crowdThree.get(kk).illed = true;
                                    int lstN = crowd.province.province_val.get(crowd.province.provinces[i]);
                                    crowd.province.province_val.put(crowd.province.provinces[i], lstN + 1);
                                    crowd.illThree++;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    public void  getIllFour() {
        HashMap<String, ArrayList<Integer>> posMark = new HashMap<>();
        //初始化哈希表
        if(crowd.illFour == 0){
            for (int i = 0; i < 5; i++) {
                int randNum = (int)(Math.random() * crowd.crowdFour.size());
                crowd.crowdFour.get(randNum).illed = true;
                Integer lstIll = crowd.province.province_val.get(crowd.crowdFour.get(randNum).pos);
                crowd.province.province_val.put(crowd.crowdFour.get(randNum).pos,lstIll + 1);
                crowd.illFour++;
            }
        }
        else {
            for (int i = 0; i < crowd.province.provinces.length; i++) {
                posMark.put(crowd.province.provinces[i], new ArrayList<>());
            }

            for (int i = 0; i < crowd.crowdFour.size(); i++) {
                if (!crowd.crowdFour.get(i).death) {
                    String tmpPos = crowd.crowdFour.get(i).pos;
                    posMark.get(tmpPos).add(i);
                }
            }
            for (int i = 0; i < crowd.province.provinces.length; i++) {
                ArrayList<Integer> tmpP = posMark.get(crowd.province.provinces[i]);

                for (int j = 0; j < tmpP.size(); j++) {
                    int jj = tmpP.get(j);
                    if (!crowd.crowdFour.get(jj).illed) {
                        continue;
                    }
                    for (int k = 0; k < tmpP.size(); k++) {
                        if (j != k) {
                            int kk = tmpP.get(k);
                            if (!crowd.crowdFour.get(jj).death && !crowd.crowdFour.get(kk).death && crowd.crowdFour.get(jj).illed && !crowd.crowdFour.get(kk).illed) {
                                int tmpV = crowd.crowdFour.get(kk).vaccine;
                                if (Math.random() < rt[tmpV]) {
                                    crowd.crowdFour.get(kk).illed = true;
                                    int lstN = crowd.province.province_val.get(crowd.province.provinces[i]);
                                    crowd.province.province_val.put(crowd.province.provinces[i], lstN + 1);
                                    crowd.illFour++;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    //流动
    public void flowOne() {
        for (int i = 0; i < crowd.crowdOne.size(); i++) {
            if (!crowd.crowdOne.get(i).death && !crowd.crowdOne.get(i).iso && Math.random() < flow[0]) {
                String yPos = crowd.crowdOne.get(i).pos;
                String nPos = crowd.province.getRandProvince();
                if (yPos != nPos) {
                    if (crowd.crowdOne.get(i).illed) {
                        crowd.province.province_val.put(yPos,crowd.province.province_val.get(yPos) - 1);
                        crowd.province.province_val.put(nPos,crowd.province.province_val.get(nPos) + 1);
                    }
                    crowd.crowdOne.get(i).pos = nPos;
                }
            }
        }

        getIllOne();
    }
    public void flowTwo() {
        for (int i = 0; i < crowd.crowdTwo.size(); i++) {
            if (!crowd.crowdTwo.get(i).death && !crowd.crowdTwo.get(i).iso && Math.random() < flow[1]) {
                String yPos = crowd.crowdTwo.get(i).pos;
                String nPos = crowd.province.getRandProvince();
                if (yPos != nPos) {
                    if (crowd.crowdTwo.get(i).illed) {
                        crowd.province.province_val.put(yPos,crowd.province.province_val.get(yPos) - 1);
                        crowd.province.province_val.put(nPos,crowd.province.province_val.get(nPos) + 1);
                    }
                    crowd.crowdTwo.get(i).pos = nPos;
                }
            }
        }

        getIllTwo();
    }
    public void flowThree() {
        for (int i = 0; i < crowd.crowdThree.size(); i++) {
            if (!crowd.crowdThree.get(i).death && !crowd.crowdThree.get(i).iso && Math.random() < flow[2]) {
                String yPos = crowd.crowdThree.get(i).pos;
                String nPos = crowd.province.getRandProvince();
                if (yPos != nPos) {
                    if (crowd.crowdThree.get(i).illed) {
                        crowd.province.province_val.put(yPos,crowd.province.province_val.get(yPos) - 1);
                        crowd.province.province_val.put(nPos,crowd.province.province_val.get(nPos) + 1);
                    }
                    crowd.crowdThree.get(i).pos = nPos;
                }
            }
        }

        getIllThree();
    }
    public void flowFour() {
        for (int i = 0; i < crowd.crowdFour.size(); i++) {
            if (!crowd.crowdFour.get(i).death && !crowd.crowdFour.get(i).iso && Math.random() < flow[3]) {
                String yPos = crowd.crowdFour.get(i).pos;
                String nPos = crowd.province.getRandProvince();
                if (yPos != nPos) {
                    if (crowd.crowdFour.get(i).illed) {
                        crowd.province.province_val.put(yPos,crowd.province.province_val.get(yPos) - 1);
                        crowd.province.province_val.put(nPos,crowd.province.province_val.get(nPos) + 1);
                    }
                    crowd.crowdFour.get(i).pos = nPos;
                }
            }
        }

        getIllFour();
    }

    //治愈,死亡判定后调用
    public void healFunctionOne() {
        for (int i = 0; i < crowd.crowdOne.size(); i++) {
            //如果感染的话
            if (!crowd.crowdOne.get(i).death && crowd.crowdOne.get(i).illed) {
                double randNum = Math.random();
//                if(crowd.crowdOne.get(i).iso){
//                    randNum /= 2;
//                }
                if (randNum < heal_rate) {
                    crowd.crowdOne.get(i).illed = false;
                    crowd.province.province_val.put(crowd.crowdOne.get(i).pos, crowd.province.province_val.get(crowd.crowdOne.get(i).pos) - 1);
                    crowd.illOne--;
                    if (crowd.crowdOne.get(i).iso) {
                        crowd.crowdOne.get(i).iso = false;
                        isoOne--;
                    }
                }
            }
        }
    }
    public void healFunctionTwo() {
        for (int i = 0; i < crowd.crowdTwo.size(); i++) {
            //如果感染的话
            if (!crowd.crowdTwo.get(i).death && crowd.crowdTwo.get(i).illed) {
                double randNum = Math.random();
//                if(crowd.crowdTwo.get(i).iso){
//                    randNum /= 2;
//                }
                if (randNum < heal_rate) {
                    crowd.crowdTwo.get(i).illed = false;
                    crowd.province.province_val.put(crowd.crowdTwo.get(i).pos, crowd.province.province_val.get(crowd.crowdTwo.get(i).pos) - 1);
                    crowd.illTwo--;
                    if (crowd.crowdTwo.get(i).iso) {
                        crowd.crowdTwo.get(i).iso = false;
                        isoTwo--;
                    }
                }
            }
        }
    }
    public void healFunctionThree() {
        for (int i = 0; i < crowd.crowdThree.size(); i++) {
            //如果感染的话
            if (!crowd.crowdThree.get(i).death && crowd.crowdThree.get(i).illed) {
                double randNum = Math.random();
//                if(crowd.crowdThree.get(i).iso){
//                    randNum /= 2;
//                }
                if (randNum < heal_rate) {
                    crowd.crowdThree.get(i).illed = false;
                    crowd.province.province_val.put(crowd.crowdThree.get(i).pos, crowd.province.province_val.get(crowd.crowdThree.get(i).pos) - 1);
                    crowd.illThree--;
                    if (crowd.crowdThree.get(i).iso) {
                        crowd.crowdThree.get(i).iso = false;
                        isoThree--;
                    }
                }
            }
        }
    }
    public void healFunctionFour() {
        for (int i = 0; i < crowd.crowdFour.size(); i++) {
            //如果感染的话
            if (!crowd.crowdFour.get(i).death && crowd.crowdFour.get(i).illed) {
                double randNum = Math.random();
//                if(crowd.crowdFour.get(i).iso){
//                    randNum /= 2;
//                }
                if (randNum < heal_rate) {
                    crowd.crowdFour.get(i).illed = false;
                    crowd.province.province_val.put(crowd.crowdFour.get(i).pos, crowd.province.province_val.get(crowd.crowdFour.get(i).pos) - 1);
                    crowd.illFour--;
                    if (crowd.crowdFour.get(i).iso) {
                        crowd.crowdFour.get(i).iso = false;
                        isoFour--;
                    }
                }
            }
        }
    }

    //死亡判定
    public void deathFunctionOne() {
        for (int i = 0; i < crowd.crowdOne.size(); i++) {
            //如果感染的话
            if (!crowd.crowdOne.get(i).death && crowd.crowdOne.get(i).illed) {
                double randNum = Math.random();
                if (randNum < death_rate) {
                    crowd.crowdOne.get(i).death = true;
                    crowd.province.province_val.put(crowd.crowdOne.get(i).pos, crowd.province.province_val.get(crowd.crowdOne.get(i).pos) - 1);
                    deathOne++;
                    liveOne--;
                    crowd.illOne--;
                }
            }
        }
        healFunctionOne();
    }
    public void deathFunctionTwo() {
        for (int i = 0; i < crowd.crowdTwo.size(); i++) {
            //如果感染的话
            if (!crowd.crowdTwo.get(i).death && crowd.crowdTwo.get(i).illed) {
                double randNum = Math.random();
                if (randNum < death_rate) {
                    crowd.crowdTwo.get(i).death = true;
                    crowd.province.province_val.put(crowd.crowdTwo.get(i).pos, crowd.province.province_val.get(crowd.crowdTwo.get(i).pos) - 1);
                    deathTwo++;
                    liveTwo--;
                    crowd.illTwo--;
                }
            }
        }
        healFunctionTwo();
    }
    public void deathFunctionThree() {
        for (int i = 0; i < crowd.crowdThree.size(); i++) {
            //如果感染的话
            if (!crowd.crowdThree.get(i).death && crowd.crowdThree.get(i).illed) {
                double randNum = Math.random();
                if (randNum < death_rate) {
                    crowd.crowdThree.get(i).death = true;
                    crowd.province.province_val.put(crowd.crowdThree.get(i).pos, crowd.province.province_val.get(crowd.crowdThree.get(i).pos) - 1);
                    deathThree++;
                    liveThree--;
                    crowd.illThree--;
                }
            }
        }
        healFunctionThree();
    }
    public void deathFunctionFour() {
        for (int i = 0; i < crowd.crowdFour.size(); i++) {
            //如果感染的话
            if (!crowd.crowdFour.get(i).death && crowd.crowdFour.get(i).illed) {
                double randNum = Math.random();
                if (randNum < death_rate) {
                    crowd.crowdFour.get(i).death = true;
                    crowd.province.province_val.put(crowd.crowdFour.get(i).pos, crowd.province.province_val.get(crowd.crowdFour.get(i).pos) - 1);
                    deathFour++;
                    liveFour--;
                    crowd.illFour--;
                }
            }
        }
        healFunctionFour();
    }

    //疫苗
    public void vaccineFunctionOne() {
        for (int i = 0; i < crowd.crowdOne.size(); i++) {
            if (!crowd.crowdOne.get(i).death && !crowd.crowdOne.get(i).illed && crowd.crowdOne.get(i).vaccine < 3) {
                double randNum2 = Math.random();
                if (randNum2 < vaccine_rate[0]) {
                    crowd.crowdOne.get(i).vaccine++;
                    if (crowd.crowdOne.get(i).vaccine == 1)
                        vaccineOne++;
                }
            }
        }
    }
    public void vaccineFunctionTwo() {
        for (int i = 0; i < crowd.crowdTwo.size(); i++) {
            if (!crowd.crowdTwo.get(i).death && !crowd.crowdTwo.get(i).illed && crowd.crowdTwo.get(i).vaccine < 3) {
                double randNum2 = Math.random();
                if (randNum2 < vaccine_rate[1]) {
                    crowd.crowdTwo.get(i).vaccine++;
                    if (crowd.crowdTwo.get(i).vaccine == 1)
                        vaccineTwo++;
                }
            }
        }
    }
    public void vaccineFunctionThree() {
        for (int i = 0; i < crowd.crowdThree.size(); i++) {
            if (!crowd.crowdThree.get(i).death && !crowd.crowdThree.get(i).illed && crowd.crowdThree.get(i).vaccine < 3) {
                double randNum2 = Math.random();
                if (randNum2 < vaccine_rate[2]) {
                    crowd.crowdThree.get(i).vaccine++;
                    if (crowd.crowdThree.get(i).vaccine == 1)
                        vaccineThree++;
                }
            }
        }
    }
    public void vaccineFunctionFour() {
        for (int i = 0; i < crowd.crowdFour.size(); i++) {
            if (!crowd.crowdFour.get(i).death && !crowd.crowdFour.get(i).illed && crowd.crowdFour.get(i).vaccine < 3) {
                double randNum2 = Math.random();
                if (randNum2 < vaccine_rate[3]) {
                    crowd.crowdFour.get(i).vaccine++;
                    if (crowd.crowdFour.get(i).vaccine == 1)
                        vaccineFour++;
                }
            }
        }
    }

    //隔离
    public void isoFunOne() {
        for (int i = 0; i < crowd.crowdOne.size(); i++) {
            if (!crowd.crowdOne.get(i).death && crowd.crowdOne.get(i).illed && !crowd.crowdOne.get(i).iso) {
                if (Math.random() < iso_rate[0]) {
                    isoOne++;
                    crowd.crowdOne.get(i).iso = true;
                }
            }
        }
    }
    public void isoFunTwo() {
        for (int i = 0; i < crowd.crowdTwo.size(); i++) {
            if (!crowd.crowdTwo.get(i).death && crowd.crowdTwo.get(i).illed && !crowd.crowdTwo.get(i).iso) {
                if (Math.random() < iso_rate[1]) {
                    isoTwo++;
                    crowd.crowdTwo.get(i).iso = true;
                }
            }
        }
    }
    public void isoFunThree() {
        for (int i = 0; i < crowd.crowdThree.size(); i++) {
            if (!crowd.crowdThree.get(i).death && crowd.crowdThree.get(i).illed && !crowd.crowdThree.get(i).iso) {
                if (Math.random() < iso_rate[2]) {
                    isoThree++;
                    crowd.crowdThree.get(i).iso = true;
                }
            }
        }
    }
    public void isoFunFour() {
        for (int i = 0; i < crowd.crowdFour.size(); i++) {
            if (!crowd.crowdFour.get(i).death && crowd.crowdFour.get(i).illed && !crowd.crowdFour.get(i).iso) {
                if (Math.random() < iso_rate[3]) {
                    isoFour++;
                    crowd.crowdFour.get(i).iso = true;
                }
            }
        }
    }


    @GetMapping("/SystemService")
    public ResponseEntity<Object> systenService(){
        long t1=System.currentTimeMillis();

        flowOne();
        flowTwo();
        flowThree();
        flowFour();

        deathFunctionOne();
        deathFunctionTwo();
        deathFunctionThree();
        deathFunctionFour();

        vaccineFunctionOne();
        vaccineFunctionTwo();
        vaccineFunctionThree();
        vaccineFunctionFour();

        isoFunOne();
        isoFunTwo();
        isoFunThree();
        isoFunFour();

        HashMap<String,Integer> ret = new HashMap<>();
        ret.put("liveOne",liveOne);
        ret.put("liveTwo", liveTwo);
        ret.put("liveThree", liveThree);
        ret.put("liveFour", liveFour);

        ret.put("deathOne", deathOne);
        ret.put("deathTwo", deathTwo);
        ret.put("deathThree", deathThree);
        ret.put("deathFour", deathFour);

        ret.put("vaccineOne", vaccineOne);
        ret.put("vaccineTwo", vaccineTwo);
        ret.put("vaccineThree", vaccineThree);
        ret.put("vaccineFour", vaccineFour);

        ret.put("illOne", crowd.illOne);
        ret.put("illTwo", crowd.illTwo);
        ret.put("illThree", crowd.illThree);
        ret.put("illFour", crowd.illFour);

        ret.put("isoOne", isoOne);
        ret.put("isoTwo", isoTwo);
        ret.put("isoThree", isoThree);
        ret.put("isoFour", isoFour);

        ret.put("河北", crowd.province.province_val.get("河北"));
        ret.put("山西", crowd.province.province_val.get("山西"));
        ret.put("辽宁", crowd.province.province_val.get("辽宁"));
        ret.put("吉林", crowd.province.province_val.get("吉林"));
        ret.put("黑龙江", crowd.province.province_val.get("黑龙江"));
        ret.put("江苏", crowd.province.province_val.get("江苏"));
        ret.put("浙江", crowd.province.province_val.get("浙江"));
        ret.put("安徽", crowd.province.province_val.get("安徽"));
        ret.put("福建", crowd.province.province_val.get("福建"));
        ret.put("江西", crowd.province.province_val.get("江西"));
        ret.put("山东", crowd.province.province_val.get("山东"));
        ret.put("河南", crowd.province.province_val.get("河南"));
        ret.put("湖北", crowd.province.province_val.get("湖北"));
        ret.put("湖南", crowd.province.province_val.get("湖南"));
        ret.put("广东", crowd.province.province_val.get("广东"));
        ret.put("海南", crowd.province.province_val.get("海南"));
        ret.put("四川", crowd.province.province_val.get("四川"));
        ret.put("贵州", crowd.province.province_val.get("贵州"));
        ret.put("云南", crowd.province.province_val.get("云南"));
        ret.put("陕西", crowd.province.province_val.get("陕西"));
        ret.put("甘肃", crowd.province.province_val.get("甘肃"));
        ret.put("青海", crowd.province.province_val.get("青海"));
        ret.put("台湾", crowd.province.province_val.get("台湾"));
        ret.put("内蒙古", crowd.province.province_val.get("内蒙古"));
        ret.put("广西", crowd.province.province_val.get("广西"));
        ret.put("西藏", crowd.province.province_val.get("西藏"));
        ret.put("宁夏", crowd.province.province_val.get("宁夏"));
        ret.put("新疆", crowd.province.province_val.get("新疆"));
        ret.put("北京", crowd.province.province_val.get("北京"));
        ret.put("天津", crowd.province.province_val.get("天津"));
        ret.put("上海", crowd.province.province_val.get("上海"));
        ret.put("重庆", crowd.province.province_val.get("重庆"));
        ret.put("香港", crowd.province.province_val.get("香港"));
        ret.put("澳门", crowd.province.province_val.get("澳门"));
        ret.put("南海诸岛", crowd.province.province_val.get("南海诸岛"));

        ServiceResponse<HashMap<String, Integer>> response = new ServiceResponse<>("success", ret);
        long t2 =  System.currentTimeMillis();
        System.out.println(t2 - t1);
        return new ResponseEntity<Object>(response, HttpStatus.OK);
    }
}
