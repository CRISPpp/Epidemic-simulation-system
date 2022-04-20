$(document).ready(function (){
   setInterval(function (){
       $.ajax({
           type:"GET",
           url:"SystemService",
           success:function (result){
               if(result.status === "success"){
                   liveOne = result.data.liveOne;
                   liveTwo = result.data.liveTwo;
                   liveThree = result.data.liveThree;
                   liveFour = result.data.liveFour;

                   deathOne = result.data.deathOne;
                   deathTwo = result.data.deathTwo;
                   deathThree = result.data.deathThree;
                   deathFour = result.data.deathFour;

                   vaccineOne = result.data.vaccineOne;
                   vaccineTwo = result.data.vaccineTwo;
                   vaccineThree = result.data.vaccineThree;
                   vaccineFour = result.data.vaccineFour;

                   illOne = result.data.illOne;
                   illTwo = result.data.illTwo;
                   illThree = result.data.illThree;
                   illFour = result.data.illFour;

                   isoOne = result.data.isoOne;
                   isoTwo = result.data.isoTwo;
                   isoThree = result.data.isoThree;
                   isoFour = result.data.isoFour;

                   province_val["河北"] = result.data.河北;
                   province_val["山西"] = result.data.山西;
                   province_val["辽宁"] = result.data.辽宁;
                   province_val["吉林"] = result.data.吉林;
                   province_val["黑龙江"] = result.data.黑龙江;
                   province_val["江苏"] = result.data.江苏;
                   province_val["浙江"] = result.data.浙江;
                   province_val["安徽"] = result.data.安徽;
                   province_val["福建"] = result.data.福建;
                   province_val["江西"] = result.data.江西;
                   province_val["山东"] = result.data.山东;
                   province_val["河南"] = result.data.河南;
                   province_val["湖北"] = result.data.湖北;
                   province_val["湖南"] = result.data.湖南;
                   province_val["广东"] = result.data.广东;
                   province_val["海南"] = result.data.海南;
                   province_val["四川"] = result.data.四川;
                   province_val["贵州"] = result.data.贵州;
                   province_val["云南"] = result.data.云南;
                   province_val["陕西"] = result.data.陕西;
                   province_val["甘肃"] = result.data.甘肃;
                   province_val["青海"] = result.data.青海;
                   province_val["台湾"] = result.data.台湾;
                   province_val["内蒙古"] = result.data.内蒙古;
                   province_val["广西"] = result.data.广西;
                   province_val["西藏"] = result.data.西藏;
                   province_val["宁夏"] = result.data.宁夏;
                   province_val["新疆"] = result.data.新疆;
                   province_val["北京"] = result.data.北京;
                   province_val["天津"] = result.data.天津;
                   province_val["上海"] = result.data.上海;
                   province_val["重庆"] = result.data.重庆;
                   province_val["香港"] = result.data.香港;
                   province_val["澳门"] = result.data.澳门;
                   province_val["南海诸岛"] = result.data.南海诸岛;
               }else{
                   $("h1").text(Error);
                   console.log("Fail: ", result);
               }
           },
           error:function (e){
               $("h1").text(Error);
               console.log("Fail: ", e);
           }
       });
   },1000);
});
// let rt = [0.08, 0.06, 0.04, 0.02];//传染指数对应不同的疫苗接种数
// let iso_rate = [0.01, 0.1, 0.5, 1];//隔离指数
// let flow = 0.05; //流动指数
// let death_rate = 0.001;//死亡指数
// let vaccine_rate = [0.1, 0.2, 0.4, 0.6];//接种比例
// let heal_rate = 0.01;//治愈概率
//省份
let province = ["河北", "山西", "辽宁", "吉林", "黑龙江", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "海南", "四川", "贵州", "云南", "陕西", "甘肃", "青海", "台湾", "内蒙古", "广西", "西藏", "宁夏", "新疆", "北京", "天津", "上海", "重庆", "香港", "澳门", "南海诸岛"];
// function getRandProvince() {
//     ret = province[Math.floor(Math.random() * province.length)];
//     return ret;
// }
let province_val = {};
//初始化让每个地区例数为0
for (let i = 0; i < province.length; i++) {
    province_val[province[i]] = 0;
}

// setInterval(function () {
//     let sum = 0;
//     for (let i = 0; i < province.length; i++) {
//         sum += province_val[province[i]];
//     }
//     console.log(sum);
// })
//console.log(province.length);
//调试代码
//setInterval(function () { alert(getRandProvince()); }, 1000);

//存活人数
let liveOne = 1000;
let liveTwo = 1000;
let liveThree = 1000;
let liveFour = 1000;
//
// //死亡人数
let deathOne = 0;
let deathTwo = 0;
let deathThree = 0;
let deathFour = 0;
//
// //接种人数
let vaccineOne = 0;
let vaccineTwo = 0;
let vaccineThree = 0;
let vaccineFour = 0;
//
//
// //患病人数
let illOne = 0;
let illTwo = 0;
let illThree = 0;
let illFour = 0;
//
//
// //隔离人数
let isoOne = 0;
let isoTwo = 0;
let isoThree = 0;
let isoFour = 0;
//
//
// class Person {
//     constructor() {
//         this.death = false; //是否死亡
//         this.vaccine = 0; //疫苗接种数0
//         this.illed = false;//是否感染
//         this.iso = false; //是否被隔离
//         this.pos = getRandProvince();
//     }
// }



//随机颜色
let randColor = ["#1089e7", "#f57474", "#56d0e3", "#f8b448", "#8b78f6"];


// let crowdOne = new Array();
// let crowdTwo = new Array();
// let crowdThree = new Array();
// let crowdFour = new Array();


// for (let i = 1; i <= 1000; i++) {
//     crowdOne.push(new Person());
//     crowdTwo.push(new Person());
//     crowdFour.push(new Person());
//     crowdThree.push(new Person());
// }


//调试
//setInterval(function () { console.log(crowdOne[0]) })

//初始化，4个人群中随机50个人作为初始感染者
// setTimeout(function () {
//     for (let i = 0; i < 50; i++) {
//         let randNum = Math.floor(Math.random() * crowdOne.length);
//         //调试
//         //console.log(randNum);
//         crowdOne[randNum].illed = true;
//         //调试
//         //console.log(crowdOne[randNum]);
//         province_val[crowdOne[randNum].pos]++;
//         illOne++;
//     }
// });
//
// setTimeout(function () {
//     for (let i = 0; i < 50; i++) {
//         let randNum = Math.floor(Math.random() * crowdTwo.length);
//         //console.log(randNum);
//         crowdTwo[randNum].illed = true;
//         //console.log(crowdTwo[randNum]);
//         province_val[crowdTwo[randNum].pos]++;
//         illTwo++;
//     }
// });
//
// setTimeout(function () {
//     for (let i = 0; i < 50; i++) {
//         let randNum = Math.floor(Math.random() * crowdThree.length);
//         //console.log(randNum);
//         crowdThree[randNum].illed = true;
//         //console.log(crowdThree[randNum]);
//         province_val[crowdThree[randNum].pos]++;
//         illThree++;
//     }
// });
//
// setTimeout(function () {
//     for (let i = 0; i < 50; i++) {
//         let randNum = Math.floor(Math.random() * crowdFour.length);
//         //console.log(randNum);
//         crowdFour[randNum].illed = true;
//         //console.log(crowdFour[randNum]);
//         province_val[crowdFour[randNum].pos]++;
//         illFour++;
//     }
// });
// alert("初始化完成");


// setInterval(function(){
//     console.log(crowdOne[0].pos);
// })

//感染函数,扫描每个地区的人是否感染，在流动后调用
// function getIllOne() {
//     let posMark = {};
//     //初始化哈希表
//     for (let i = 0; i < province.length; i++) {
//         posMark[province[i]] = [];
//     }
//
//     for (let i = 0; i < crowdOne.length; i++) {
//         if (crowdOne[i].death === false) {
//             let tmpPos = crowdOne[i].pos;
//             posMark[tmpPos].push(i);
//         }
//     }
//     for (let i = 0; i < province.length; i++) {
//         let tmpP = posMark[province[i]];
//
//         for (let j = 0; j < tmpP.length; j++) {
//             let jj = tmpP[j];
//             if (crowdOne[jj].illed === false) {
//                 continue;
//             }
//             for (let k = 0; k < tmpP.length; k++) {
//                 if (j != k) {
//                     let kk = tmpP[k];
//                     if (crowdOne[jj].death === false && crowdOne[kk].death === false && crowdOne[jj].illed === true && crowdOne[kk].illed === false) {
//                         let tmpV = crowdOne[kk].vaccine;
//                         if (Math.random() < rt[tmpV]) {
//                             // console.log(i);
//                             crowdOne[kk].illed = true;
//                             province_val[province[i]]++;
//                             illOne++;
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// var start = Date.now();
// console.log(start);
// getIllOne();

// var end = Date.now();

// console.log(end - start);
// function getIllTwo() {
//     let posMark = {};
//     //初始化哈希表
//     for (let i = 0; i < province.length; i++) {
//         posMark[province[i]] = [];
//     }
//
//
//     for (let i = 0; i < crowdTwo.length; i++) {
//         if (crowdTwo[i].death === false) {
//             let tmpPos = crowdTwo[i].pos;
//             posMark[tmpPos].push(i);
//         }
//     }
//
//
//     for (let i = 0; i < province.length; i++) {
//         let tmpP = posMark[province[i]];
//         for (let j = 0; j < tmpP.length; j++) {
//             let jj = tmpP[j];
//             if (crowdTwo[jj].illed === false) {
//                 continue;
//             }
//             for (let k = 0; k < tmpP.length; k++) {
//                 if (j != k) {
//                     let kk = tmpP[k];
//                     if (crowdTwo[jj].death === false && crowdTwo[kk].death === false && crowdTwo[jj].illed === true && crowdTwo[kk].illed === false) {
//                         let tmpV = crowdOne[kk].vaccine;
//                         if (Math.random() < rt[tmpV]) {
//                             crowdTwo[kk].illed = true;
//                             province_val[province[i]]++;
//                             illTwo++;
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// function getIllThree() {
//     let posMark = {};
//     //初始化哈希表
//     for (let i = 0; i < province.length; i++) {
//         posMark[province[i]] = [];
//     }
//
//
//     for (let i = 0; i < crowdThree.length; i++) {
//         if (crowdThree[i].death === false) {
//             let tmpPos = crowdThree[i].pos;
//             posMark[tmpPos].push(i);
//         }
//     }
//
//
//     for (let i = 0; i < province.length; i++) {
//         let tmpP = posMark[province[i]];
//         for (let j = 0; j < tmpP.length; j++) {
//             let jj = tmpP[j];
//             if (crowdThree[jj].illed === false) {
//                 continue;
//             }
//             for (let k = 0; k < tmpP.length; k++) {
//                 if (j != k) {
//                     let kk = tmpP[k];
//                     if (crowdThree[jj].death === false && crowdThree[kk].death === false && crowdThree[jj].illed === true && crowdThree[kk].illed === false) {
//                         let tmpV = crowdThree[kk].vaccine;
//                         if (Math.random() < rt[tmpV]) {
//                             crowdThree[kk].illed = true;
//                             province_val[province[i]]++;
//                             illThree++;
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// function getIllFour() {
//     let posMark = {};
//     //初始化哈希表
//     for (let i = 0; i < province.length; i++) {
//         posMark[province[i]] = [];
//     }
//
//
//     for (let i = 0; i < crowdFour.length; i++) {
//         if (crowdFour[i].death === false) {
//             let tmpPos = crowdFour[i].pos;
//             posMark[tmpPos].push(i);
//         }
//     }
//
//
//     for (let i = 0; i < province.length; i++) {
//         let tmpP = posMark[province[i]];
//         for (let j = 0; j < tmpP.length; j++) {
//             let jj = tmpP[j];
//             if (crowdFour[jj].illed === false) {
//                 continue;
//             }
//             for (let k = 0; k < tmpP.length; k++) {
//                 if (j != k) {
//                     let kk = tmpP[k];
//                     if (crowdFour[jj].death === false && crowdFour[kk].death === false && crowdFour[jj].illed === true && crowdFour[kk].illed === false) {
//                         let tmpV = crowdFour[kk].vaccine;
//                         if (Math.random() < rt[tmpV]) {
//                             crowdFour[kk].illed = true;
//                             province_val[province[i]]++;
//                             illFour++;
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }


//流动函数
// function flowOne() {
//     for (let i = 0; i < crowdOne.length; i++) {
//         if (crowdOne[i].death === false && crowdOne[i].iso === false && Math.random() < flow) {
//             let yPos = crowdOne[i].pos;
//             let nPos = getRandProvince();
//             if (yPos != nPos) {
//                 if (crowdOne[i].illed === true) {
//                     province_val[yPos]--;
//                     province_val[nPos]++;
//                 }
//                 crowdOne[i].pos = nPos;
//             }
//         }
//     }
//
//     getIllOne();
// }
// function flowTwo() {
//     for (let i = 0; i < crowdTwo.length; i++) {
//         if (crowdTwo[i].death === false && crowdTwo[i].iso === false && Math.random() < flow) {
//             let yPos = crowdTwo[i].pos;
//             let nPos = getRandProvince();
//             if (yPos != nPos) {
//                 if (crowdTwo[i].illed === true) {
//                     province_val[yPos]--;
//                     province_val[nPos]++;
//                 }
//                 crowdTwo[i].pos = nPos;
//             }
//         }
//     }
//
//     getIllTwo();
// }
// function flowThree() {
//     for (let i = 0; i < crowdThree.length; i++) {
//         if (crowdThree[i].death === false && crowdThree[i].iso === false && Math.random() < flow) {
//             let yPos = crowdThree[i].pos;
//             let nPos = getRandProvince();
//             if (yPos != nPos) {
//                 if (crowdThree[i].illed === true) {
//                     province_val[yPos]--;
//                     province_val[nPos]++;
//                 }
//                 crowdThree[i].pos = nPos;
//             }
//         }
//     }
//
//     getIllThree();
// }
// function flowFour() {
//     for (let i = 0; i < crowdFour.length; i++) {
//         if (crowdFour[i].death === false && crowdFour[i].iso === false && Math.random() < flow) {
//             let yPos = crowdFour[i].pos;
//             let nPos = getRandProvince();
//             if (yPos != nPos) {
//                 if (crowdFour[i].illed === true) {
//                     province_val[yPos]--;
//                     province_val[nPos]++;
//                 }
//                 crowdFour[i].pos = nPos;
//             }
//         }
//     }
//
//     getIllFour();
// }
//
// setInterval(function () { flowOne() }, 10000);
// setInterval(function () { flowTwo() }, 10000);
// setInterval(function () { flowThree() }, 10000);
// setInterval(function () { flowFour() }, 10000);

//自愈函数，在扫描死亡时调用
// function healFunctionOne() {
//     for (let i = 0; i < crowdOne.length; i++) {
//         //如果感染的话
//         if (crowdOne[i].death === false && crowdOne[i].illed) {
//             let randNum = Math.random();
//             if (randNum < heal_rate) {
//                 crowdOne[i].illed = false;
//                 province_val[crowdOne[i].pos]--;
//                 illOne--;
//                 if (crowdOne[i].iso === true) {
//                     crowdOne[i].iso = false;
//                     isoOne--;
//                 }
//             }
//         }
//     }
// }
// function healFunctionTwo() {
//     for (let i = 0; i < crowdTwo.length; i++) {
//         //如果感染的话
//         if (crowdTwo[i].death === false && crowdTwo[i].illed) {
//             let randNum = Math.random();
//             if (randNum < heal_rate) {
//                 crowdTwo[i].illed = false;
//                 province_val[crowdTwo[i].pos]--;
//                 illTwo--;
//                 if (crowdTwo[i].iso === true) {
//                     crowdTwo[i].iso = false;
//                     isoTwo--;
//                 }
//             }
//         }
//     }
// }
// function healFunctionThree() {
//     for (let i = 0; i < crowdThree.length; i++) {
//         //如果感染的话
//         if (crowdThree[i].death === false && crowdThree[i].illed) {
//             let randNum = Math.random();
//             if (randNum < heal_rate) {
//                 crowdThree[i].illed = false;
//                 province_val[crowdThree[i].pos]--;
//                 illThree--;
//                 if (crowdThree[i].iso === true) {
//                     crowdThree[i].iso = false;
//                     isoThree--;
//                 }
//             }
//         }
//     }
// }
// function healFunctionFour() {
//     for (let i = 0; i < crowdFour.length; i++) {
//         //如果感染的话
//         if (crowdFour[i].death === false && crowdFour[i].illed) {
//             let randNum = Math.random();
//             if (randNum < heal_rate) {
//                 crowdFour[i].illed = false;
//                 province_val[crowdFour[i].pos]--;
//                 illFour--;
//                 if (crowdFour[i].iso === true) {
//                     crowdFour[i].iso = false;
//                     isoFour--;
//                 }
//             }
//         }
//     }
// }


//死亡函数
// function deathFunctionOne() {
//     //console.log("function1 调用");
//     for (let i = 0; i < crowdOne.length; i++) {
//         //如果感染的话
//         if (crowdOne[i].death === false && crowdOne[i].illed) {
//             let randNum = Math.random();
//             if (randNum < death_rate) {
//                 crowdOne[i].death = true;
//                 province_val[crowdOne[i].pos]--;
//                 deathOne++;
//                 liveOne--;
//                 illOne--;
//             }
//         }
//     }
//     healFunctionOne();
// }
// function deathFunctionTwo() {
//     for (let i = 0; i < crowdTwo.length; i++) {
//         //如果感染的话
//         if (crowdTwo[i].death === false && crowdTwo[i].illed) {
//             let randNum = Math.random();
//             if (randNum < death_rate) {
//                 crowdTwo[i].death = true;
//                 deathTwo++;
//                 liveTwo--;
//                 illTwo--;
//             }
//         }
//     }
//     healFunctionTwo();
// }
// function deathFunctionThree() {
//     for (let i = 0; i < crowdThree.length; i++) {
//         //如果感染的话
//         if (crowdThree[i].death === false && crowdThree[i].illed) {
//             let randNum = Math.random();
//             if (randNum < death_rate) {
//                 crowdThree[i].death = true;
//                 deathThree++;
//                 liveThree--;
//                 illThree--;
//             }
//         }
//     }
//     healFunctionThree();
// }
// function deathFunctionFour() {
//     for (let i = 0; i < crowdFour.length; i++) {
//         //如果感染的话
//         if (crowdFour[i].death === false && crowdFour[i].illed) {
//             let randNum = Math.random();
//             if (randNum < death_rate) {
//                 crowdFour[i].death = true;
//                 deathFour++;
//                 liveFour--;
//                 illFour--;
//             }
//         }
//     }
//     healFunctionFour();
// }
// setInterval(function () {
//     deathFunctionOne();
// },
//     3000);
// setInterval(function () {
//     deathFunctionTwo();
// },
//     3000);
// setInterval(function () {
//     deathFunctionThree();
// },
//     3000);
// setInterval(function () {
//     deathFunctionFour();
// },
//     3000);

//接种疫苗函数
// function vaccineFunctionOne() {
//     //随机分配50人接种疫苗
//     for (let i = 0; i < crowdOne.length; i++) {
//         let randNum = Math.floor(Math.random() * crowdOne.length);
//         if (crowdOne[randNum].death === false && !crowdOne[randNum].illed && crowdOne[randNum].vaccine < 3) {
//             let randNum2 = Math.random();
//             if (randNum2 < vaccine_rate[0]) {
//                 crowdOne[randNum].vaccine++;
//                 if (crowdOne[randNum].vaccine === 1)
//                     vaccineOne++;
//             }
//         }
//     }
// }
//
// function vaccineFunctionTwo() {
//     //随机分配50人接种疫苗
//     for (let i = 0; i < crowdTwo.length; i++) {
//         let randNum = Math.floor(Math.random() * crowdTwo.length);
//         if (crowdTwo[randNum].death === false && !crowdTwo[randNum].illed && crowdTwo[randNum].vaccine < 3) {
//             let randNum2 = Math.random();
//             if (randNum2 < vaccine_rate[1]) {
//                 crowdTwo[randNum].vaccine++;
//                 if (crowdTwo[randNum].vaccine === 1)
//                     vaccineTwo++;
//             }
//         }
//     }
// }
//
// function vaccineFunctionThree() {
//     //随机分配50人接种疫苗
//     for (let i = 0; i < crowdThree.length; i++) {
//         let randNum = Math.floor(Math.random() * crowdThree.length);
//         if (crowdThree[randNum].death === false && !crowdThree[randNum].illed && crowdThree[randNum].vaccine < 3) {
//             let randNum2 = Math.random();
//             if (randNum2 < vaccine_rate[2]) {
//                 crowdThree[randNum].vaccine++;
//                 if (crowdThree[randNum].vaccine === 1)
//                     vaccineThree++;
//             }
//         }
//     }
// }
//
// function vaccineFunctionFour() {
//     //随机分配50人接种疫苗
//     for (let i = 0; i < crowdFour.length; i++) {
//         let randNum = Math.floor(Math.random() * crowdFour.length);
//         if (crowdFour[randNum].death === false && !crowdFour[randNum].illed && crowdFour[randNum].vaccine < 3) {
//             let randNum2 = Math.random();
//             if (randNum2 < vaccine_rate[3]) {
//                 crowdFour[randNum].vaccine++;
//                 if (crowdFour[randNum].vaccine === 1)
//                     vaccineFour++;
//             }
//         }
//     }
// }
// setInterval(function () {
//     vaccineFunctionOne();
// },
//     3000);
// setInterval(function () {
//     vaccineFunctionTwo();
// },
//     3000);
// setInterval(function () {
//     vaccineFunctionThree();
// },
//     3000);
// setInterval(function () {
//     vaccineFunctionFour();
// },
//     3000);

//隔离函数
// function isoFunOne() {
//     for (let i = 0; i < crowdOne.length; i++) {
//         if (crowdOne[i].death === false && crowdOne[i].illed === true && crowdOne[i].iso === false) {
//             if (Math.random() < iso_rate[0]) {
//                 isoOne++;
//                 crowdOne[i].iso = true;
//             }
//         }
//     }
// }
// function isoFunTwo() {
//     for (let i = 0; i < crowdTwo.length; i++) {
//         if (crowdTwo[i].death === false && crowdTwo[i].illed === true && crowdTwo[i].iso === false) {
//             if (Math.random() < iso_rate[1]) {
//                 isoTwo++;
//                 crowdTwo[i].iso = true;
//             }
//         }
//     }
// }
// function isoFunThree() {
//     for (let i = 0; i < crowdThree.length; i++) {
//         if (crowdThree[i].death === false && crowdThree[i].illed === true && crowdThree[i].iso === false) {
//             if (Math.random() < iso_rate[2]) {
//                 isoThree++;
//                 crowdThree[i].iso = true;
//             }
//         }
//     }
// }
// function isoFunFour() {
//     for (let i = 0; i < crowdFour.length; i++) {
//         if (crowdFour[i].death === false && crowdFour[i].illed === true && crowdFour[i].iso === false) {
//             if (Math.random() < iso_rate[3]) {
//                 isoFour++;
//                 crowdFour[i].iso = true;
//             }
//         }
//     }
// }
// setInterval(function () { isoFunOne() }, 3000);
// setInterval(function () { isoFunTwo() }, 3000);
// setInterval(function () { isoFunThree() }, 3000);
// setInterval(function () { isoFunFour() }, 3000);
//死亡人数的限定函数
(function () {
    var myChart = echarts.init(document.querySelector('.mainbox .column .bar .chart'));
    //调试代码
    //const data = [];
    // for (let i = 0; i < 4; ++i) {
    //     data.push(Math.round(Math.random() * 200));
    // }
    const data = [deathOne, deathTwo, deathThree, deathFour];
    var option = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow"
                // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            //是否显示刻度标签
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['措施1', '措施2', '措施3', '措施4'],
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                }
            },
            axisLine: {
                //刻度线
                show: true
            },
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                }
            },
            axisLine: {
                //更改y轴线条样式
                lineStyle: {
                    width: 2,
                    color: "rgba(255,255,255,.1)"
                },

                //y轴分割线样式、
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            },
        },
        series: [
            {
                //数据名
                //name: "直接访问",
                //形状
                type: "bar",
                //宽度
                barWidth: "35%",
                data: data,
                type: 'bar',

                //圆角
                itemStyle: {
                    barBorderRadius: 5
                }
            },
        ],
        legend: {
            show: true
        },
        //动画相关
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
    };



    //run函数用来更新各个data
    function run() {
        //console.log(deathOne);
        data[0] = deathOne;
        data[1] = deathTwo;
        data[2] = deathThree;
        data[3] = deathFour;
        myChart.setOption(option);
    }
    setInterval(function () { run() }, 1000);

    //3s后循环执行run函数

    myChart.setOption(option);

    //让图表跟屏幕自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();


//疫苗接种人数的限定函数
(function () {
    var myChart = echarts.init(document.querySelector('.bar-1 .chart'));
    const data = [vaccineOne, vaccineTwo, vaccineThree, vaccineFour];
    const data1 = [data[0] * 1.5, data[1] * 1.5, data[2] * 1.5, data[3] * 1.5];
    var option = {
        //修改大小
        grid: {
            top: "10%",
            left: "20%",
            bottom: "10%",
            //containLabel: true
        },
        xAxis: {
            //x轴不显示
            show: false
        },
        yAxis: [
            {
                //不显示线和相关刻度
                axisLine: {
                    show: false
                },
                //不显示刻度
                axisTick: {
                    show: false
                },
                //刻度标签颜色
                axisLabel: {
                    color: "white"
                },

                type: 'category',
                data: ['措施1', '措施2', '措施3', '措施4'],
                inverse: true,
                animationDuration: 300,
                animationDurationUpdate: 300,
                max: 3 // 显示所有4条线


            },
            {
                show: true,
                //不显示线和相关刻度
                axisLine: {
                    show: false
                },
                //不显示刻度
                axisTick: {
                    show: false
                },
                //刻度标签颜色
                axisLabel: {
                    color: "white"
                },

                type: 'category',
                data: data,
                inverse: true,
                animationDuration: 300,
                animationDurationUpdate: 300,
                max: 3 // 显示所有4条线


            },
        ],
        series: [
            {
                realtimeSort: true,
                name: 'X',
                type: 'bar',
                data: data,
                label: {
                    normal: {
                        show: true,
                        position: "inside",
                        formatter: "{c}",
                    }
                },
                //更改y轴的权重
                yAxisIndex: 0,
                //修改圆角
                itemStyle: {
                    barBorderRadius: 20,
                    color: function (params) {
                        //params的dataIndex对象是柱子的索引号
                        return randColor[params.dataIndex % randColor.length];
                    }
                },

                //bar距离
                barCategotyGap: 50,
                //bar宽度
                barWidth: 10,
            },
            //第二组单纯用于美化233333
            {
                name: "框",
                type: "bar",
                yAxisIndex: 1,
                barCategoryGap: 50,
                data: data1,
                barWidth: 15,
                label: {
                    fontmatter: "{c%}",
                },
                itemStyle: {
                    normal: {
                        color: "none",
                        borderColor: "#00c1de",
                        borderWidth: 3,
                        barBorderRadius: 15
                    }
                }
            }
        ],
        legend: {
            show: false
        },
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
    };

    function run() {
        data[0] = vaccineOne;
        data[1] = vaccineTwo;
        data[2] = vaccineThree;
        data[3] = vaccineFour;
        data1[0] = data[0] * 1.3;
        data1[1] = data[1] * 1.3;
        data1[2] = data[2] * 1.3;
        data1[3] = data[3] * 1.3;
        myChart.setOption(option);
    }
    setInterval(function () { run() }, 1000);

    setInterval(function () {
        run();
    }, 3000);

    //3s后循环执行run函数


    myChart.setOption(option);

    //让图表跟屏幕自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();




//患病人数的限定函数
(function () {
    var myChart = echarts.init(document.querySelector(".line .chart"));
    const dataOne = [illOne];
    const dataTwo = [illTwo];
    const dataThree = [illThree];
    const dataFour = [illFour];
    var option = {
        legend: {
            data: ['措施1', '措施2', '措施3', '措施4']
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['措施1', '措施2', '措施3', '措施4'],
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#4c9bfd"
            }
            // 如果series 里面设置了name，此时图例组件的data可以省略
        },
        xAxis: {
            //去除轴间距
            boundaryGap: false,
            type: 'category',
            //不显示线和相关刻度
            axisLine: {
                show: false
            },
            //不显示刻度
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "rgba(0,0,0,0)"
            }

        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            axisLine: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a',
                }
            }
        },
        series: [
            {
                //让线圆滑
                smooth: true,
                name: "措施1",
                data: dataOne,
                type: 'line',
                //不显示拐点
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                //修改拐点样式
                itemStyle: {
                    normal: {

                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    }
                },
            },
            {
                //让线圆滑
                smooth: true,
                name: "措施2",
                data: dataTwo,
                type: 'line',
                //不显示拐点
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                //修改拐点样式
                itemStyle: {
                    normal: {

                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    }
                },
            },
            {
                //让线圆滑
                smooth: true,
                name: "措施3",
                data: dataThree,
                type: 'line',
                //不显示拐点
                symbol: "none",
                showSymbol: "false",
                //修改拐点样式
                itemStyle: {
                    normal: {

                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    }
                },
            },
            {
                //让线圆滑
                smooth: true,
                name: "措施4",
                data: dataFour,
                type: 'line',
                //不显示拐点
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                //修改拐点样式
                itemStyle: {
                    normal: {

                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    }
                },
            },
        ],
        //动画相关
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
    };
    function run() {
        dataOne.push(illOne);
        dataTwo.push(illTwo);
        dataThree.push(illThree);
        dataFour.push(illFour);
        myChart.setOption(option);
    }
    setInterval(function () { run() }, 1000);
    myChart.setOption(option);

    //让图表跟屏幕自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();







//隔离人数限定函数
(function () {
    var myChart = echarts.init(document.querySelector('.line2 .chart'));
    const dataOne = [isoOne];
    const dataTwo = [isoTwo];
    const dataThree = [isoThree];
    const dataFour = [isoFour];
    var option = {

        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['措施1', '措施2', '措施3', '措施4'],
            top: "0%",
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },

        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                //去除轴间距
                boundaryGap: false,
                //不显示线和相关刻度
                axisLine: {
                    show: false
                },
                //不显示刻度
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "rgba(0,0,0,0)"
                }

            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    },
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                //让线圆滑
                smooth: true,
                name: '措施1',
                type: 'line',
                stack: 'Total',
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(1, 132, 213, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(1, 132, 213, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                emphasis: {
                    focus: 'series'
                },
                data: dataOne,
                //不显示拐点
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
            },
            {
                //让线圆滑
                smooth: true,
                name: '措施2',
                type: 'line',
                stack: 'Total',
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                emphasis: {
                    focus: 'series'
                },
                data: dataTwo,
                //不显示拐点
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                //修改拐点样式
                itemStyle: {
                    normal: {

                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    }
                },
                lineStyle: {
                    color: "#0184d5",
                    width: 2,
                },
            },
            {
                //让线圆滑
                smooth: true,
                name: '措施3',
                type: 'line',
                stack: 'Total',
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(238,99 ,99 ,0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(186, 85, 211, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                emphasis: {
                    focus: 'series'
                },
                data: dataThree,
                //不显示拐点
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                //修改拐点样式
                itemStyle: {
                    normal: {

                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    }
                },
            },
            {
                //让线圆滑
                smooth: true,
                name: '措施4',
                type: 'line',
                stack: 'Total',
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(255, 255, 0,0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(238, 121, 66, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                emphasis: {
                    focus: 'series'
                },
                data: dataFour,
                //不显示拐点
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                //修改拐点样式
                itemStyle: {
                    normal: {

                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    }
                },


            },
        ],
        //动画相关
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
    };


    myChart.setOption(option);

    function run() {
        dataOne.push(isoOne);
        dataTwo.push(isoTwo);
        dataThree.push(isoThree);
        dataFour.push(isoFour);
        myChart.setOption(option);
    }
    setInterval(function () { run() }, 1000);
    myChart.setOption(option);
    //让图表跟屏幕自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();






//存活人数
(function () {
    var myChart = echarts.init(document.querySelector(".line3 .chart"));
    const dataOne = [liveOne];
    const dataTwo = [liveTwo];
    const dataThree = [liveThree];
    const dataFour = [liveFour];
    var option = {

        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['措施1', '措施2', '措施3', '措施4'],
            top: "0%",
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },

        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                //去除轴间距
                boundaryGap: false,
                //不显示线和相关刻度
                axisLine: {
                    show: false
                },
                //不显示刻度
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "rgba(0,0,0,0)"
                }

            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    },
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                //让线圆滑
                smooth: true,
                name: '措施1',
                type: 'line',
                stack: 'Total',
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(1, 132, 213, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(1, 132, 213, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                emphasis: {
                    focus: 'series'
                },
                data: dataOne,
                //不显示拐点
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
            },
            {
                //让线圆滑
                smooth: true,
                name: '措施2',
                type: 'line',
                stack: 'Total',
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "red"
                                },
                                {
                                    offset: 0.8,
                                    color: "green"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                emphasis: {
                    focus: 'series'
                },
                data: dataTwo,
                //不显示拐点
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                //修改拐点样式
                itemStyle: {
                    normal: {

                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    }
                },
                lineStyle: {
                    color: "#0184d5",
                    width: 2,
                },
            },
            {
                //让线圆滑
                smooth: true,
                name: '措施3',
                type: 'line',
                stack: 'Total',
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(123,243 ,245 ,0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(253, 124, 1, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                emphasis: {
                    focus: 'series'
                },
                data: dataThree,
                //不显示拐点
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                //修改拐点样式
                itemStyle: {
                    normal: {

                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    }
                },
            },
            {
                //让线圆滑
                smooth: true,
                name: '措施4',
                type: 'line',
                stack: 'Total',
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(255, 255, 0,0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(238, 121, 66, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                emphasis: {
                    focus: 'series'
                },
                data: dataFour,
                //不显示拐点
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                //修改拐点样式
                itemStyle: {
                    normal: {

                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    }
                },


            },
        ],
        //动画相关
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
    };


    myChart.setOption(option);

    function run() {
        dataOne.push(liveOne);
        dataTwo.push(liveTwo);
        dataThree.push(liveThree);
        dataFour.push(liveFour);
        myChart.setOption(option);
    }
    setInterval(function () { run() }, 1000);
    //让图表跟屏幕自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();



//各省感染人数限定函数
(function () {
    myChart = echarts.init(document.querySelector(".pie .chart"));
    var data = [
        {
            name: "北京",
            value: province_val["北京"],
        },
        {
            name: "天津",
            value: province_val["天津"],
        },
        {
            name: "上海",
            value: province_val["上海"],
        },
        {
            name: "重庆",
            value: province_val["重庆"],
        },
        {
            name: "河北",
            value: province_val["河北"],
        },
        {
            name: "河南",
            value: province_val["河南"],
        },
        {
            name: "云南",
            value: province_val["云南"],
        },
        {
            name: "辽宁",
            value: province_val["辽宁"],
        },
        {
            name: "黑龙江",
            value: province_val["黑龙江"],
        },
        {
            name: "湖南",
            value: province_val["湖南"],
        },
        {
            name: "安徽",
            value: province_val["安徽"],
        },
        {
            name: "山东",
            value: province_val["山东"],
        },
        {
            name: "新疆",
            value: province_val["新疆"],
        },
        {
            name: "江苏",
            value: province_val["江苏"],
        },
        {
            name: "浙江",
            value: province_val["浙江"],
        },
        {
            name: "江西",
            value: province_val["江西"],
        },
        {
            name: "湖北",
            value: province_val["湖北"],
        },
        {
            name: "广西",
            value: province_val["广西"],
        },
        {
            name: "甘肃",
            value: province_val["甘肃"],
        },
        {
            name: "山西",
            value: province_val["山西"],
        },
        {
            name: "内蒙古",
            value: province_val["内蒙古"],
        },
        {
            name: "陕西",
            value: province_val["陕西"],
        },
        {
            name: "吉林",
            value: province_val["吉林"],
        },
        {
            name: "福建",
            value: province_val["福建"],
        },
        {
            name: "贵州",
            value: province_val["贵州"],
        },
        {
            name: "广东",
            value: province_val["广东"],
        },
        {
            name: "青海",
            value: province_val["青海"],
        },
        {
            name: "西藏",
            value: province_val["西藏"],
        },
        {
            name: "四川",
            value: province_val["四川"],
        },
        {
            name: "宁夏",
            value: province_val["宁夏"],
        },
        {
            name: "海南",
            value: province_val["海南"],
        },
        {
            name: "台湾",
            value: province_val["台湾"],
        },
        {
            name: "香港",
            value: province_val["香港"],
        },
        {
            name: "澳门",
            value: province_val["澳门"],
        },
        {
            name: "南海诸岛",
            value: province_val["南海诸岛"],
        },
    ];
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },

        series: [
            {
                name: 'Area Mode',
                type: 'pie',
                radius: ['10%', '70%'],
                center: ['50%', '50%'],
                roseType: 'radius',
                itemStyle: {
                    borderRadius: 5
                },
                data: data,
                //文字标签
                label: {
                    fontSize: 10
                },

            }
        ],
        //动画相关
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
    };

    myChart.setOption(option);
    function run() {
        data[0].value = province_val["北京"];
        data[1].value = province_val["天津"];
        data[2].value = province_val["上海"];
        data[3].value = province_val["重庆"];
        data[4].value = province_val["河北"];
        data[5].value = province_val["河南"];
        data[6].value = province_val["云南"];
        data[7].value = province_val["辽宁"];
        data[8].value = province_val["黑龙江"];
        data[9].value = province_val["湖南"];
        data[10].value = province_val["安徽"];
        data[11].value = province_val["山东"];
        data[12].value = province_val["新疆"];
        data[13].value = province_val["江苏"];
        data[14].value = province_val["浙江"];
        data[15].value = province_val["江西"];
        data[16].value = province_val["湖北"];
        data[17].value = province_val["广西"];
        data[18].value = province_val["甘肃"];
        data[19].value = province_val["山西"];
        data[20].value = province_val["内蒙古"];
        data[21].value = province_val["陕西"];
        data[22].value = province_val["吉林"];
        data[23].value = province_val["福建"];
        data[24].value = province_val["贵州"];
        data[25].value = province_val["广东"];
        data[26].value = province_val["青海"];
        data[27].value = province_val["西藏"];
        data[28].value = province_val["四川"];
        data[29].value = province_val["宁夏"];
        data[30].value = province_val["海南"];
        data[31].value = province_val["台湾"];
        data[32].value = province_val["香港"];
        data[33].value = province_val["澳门"];
        data[34].value = province_val["南海诸岛"];
        myChart.setOption(option);
    }
    setInterval(function () { run() }, 1000);
    //让图表跟屏幕自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();





//模拟疫情地图
(function () {
    var myChart = echarts.init(document.querySelector(".map .chart"));
    var data = [
        {
            name: "北京",
            value: province_val["北京"],
        },
        {
            name: "天津",
            value: province_val["天津"],
        },
        {
            name: "上海",
            value: province_val["上海"],
        },
        {
            name: "重庆",
            value: province_val["重庆"],
        },
        {
            name: "河北",
            value: province_val["河北"],
        },
        {
            name: "河南",
            value: province_val["河南"],
        },
        {
            name: "云南",
            value: province_val["云南"],
        },
        {
            name: "辽宁",
            value: province_val["辽宁"],
        },
        {
            name: "黑龙江",
            value: province_val["黑龙江"],
        },
        {
            name: "湖南",
            value: province_val["湖南"],
        },
        {
            name: "安徽",
            value: province_val["安徽"],
        },
        {
            name: "山东",
            value: province_val["山东"],
        },
        {
            name: "新疆",
            value: province_val["新疆"],
        },
        {
            name: "江苏",
            value: province_val["江苏"],
        },
        {
            name: "浙江",
            value: province_val["浙江"],
        },
        {
            name: "江西",
            value: province_val["江西"],
        },
        {
            name: "湖北",
            value: province_val["湖北"],
        },
        {
            name: "广西",
            value: province_val["广西"],
        },
        {
            name: "甘肃",
            value: province_val["甘肃"],
        },
        {
            name: "山西",
            value: province_val["山西"],
        },
        {
            name: "内蒙古",
            value: province_val["内蒙古"],
        },
        {
            name: "陕西",
            value: province_val["陕西"],
        },
        {
            name: "吉林",
            value: province_val["吉林"],
        },
        {
            name: "福建",
            value: province_val["福建"],
        },
        {
            name: "贵州",
            value: province_val["贵州"],
        },
        {
            name: "广东",
            value: province_val["广东"],
        },
        {
            name: "青海",
            value: province_val["青海"],
        },
        {
            name: "西藏",
            value: province_val["西藏"],
        },
        {
            name: "四川",
            value: province_val["四川"],
        },
        {
            name: "宁夏",
            value: province_val["宁夏"],
        },
        {
            name: "海南",
            value: province_val["海南"],
        },
        {
            name: "台湾",
            value: province_val["台湾"],
        },
        {
            name: "香港",
            value: province_val["香港"],
        },
        {
            name: "澳门",
            value: province_val["澳门"],
        },
        {
            name: "南海诸岛",
            value: province_val["南海诸岛"],
        },
    ];
    // 指定图表的配置项和数据
    var option = {
        // title: {
        //     text: "中国疫情图",
        //     left: "center",
        // },
        tooltip: {
            trigger: "item",
        },
        legend: {
            orient: "vertical",
            left: "left",
            data: ["中国疫情图"],
        },
        visualMap: {
            type: "piecewise",
            pieces: [
                {
                    min: 200,
                    max: 1000000,
                    label: "大于等于200人",
                    color: "#372a28",
                },
                {
                    min: 100,
                    max: 199,
                    label: "确诊100-199人",
                    color: "#4e160f"
                },
                {
                    min: 50,
                    max: 99,
                    label: "确诊50-99人",
                    color: "#974236"
                },
                {
                    min: 10,
                    max: 49,
                    label: "确诊10-49人",
                    color: "#ee7263"
                },
                {
                    min: 1,
                    max: 9,
                    label: "确诊1-9人",
                    color: "#f5bba7"
                },
                {
                    min: 0,
                    max: 0,
                    label: "确诊0人",
                    color: "white"
                }
            ],
            color: ["#E0022B", "#E09107", "#A3E00B"],
        },
        toolbox: {
            show: true,
            orient: "vertical",
            left: "right",
            top: "center",
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true },
            },
        },
        roamController: {
            show: true,
            left: "right",
            //   mapTypeControl: {
            //     china: true,
            //   },
        },
        // bmap: {
        //   //
        // },
        geo: {
            //地理坐标系组件用于地图的绘制
            map: "china",
            zoom: 1.2,
            roam: false, //不开启缩放和平移
            label: {
                normal: {
                    show: true,
                    fontSize: "10",
                    color: "rgba(0,0,0,0.7)",
                },
            },
            itemStyle: {
                normal: {
                    borderColor: "rgba(0, 0, 0, 0.2)",
                },
                emphasis: {
                    areaColor: "#F3B329", //鼠标选择区域颜色
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)",
                },
            },
        },
        series: [
            {
                name: "确诊数",
                type: "map", //图表类型
                geoIndex: 0,
                data: data, //图表的数据
            },

        ],
        //动画相关
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
    };

    myChart.setOption(option);



    function run() {
        data[0].value = province_val["北京"];
        data[1].value = province_val["天津"];
        data[2].value = province_val["上海"];
        data[3].value = province_val["重庆"];
        data[4].value = province_val["河北"];
        data[5].value = province_val["河南"];
        data[6].value = province_val["云南"];
        data[7].value = province_val["辽宁"];
        data[8].value = province_val["黑龙江"];
        data[9].value = province_val["湖南"];
        data[10].value = province_val["安徽"];
        data[11].value = province_val["山东"];
        data[12].value = province_val["新疆"];
        data[13].value = province_val["江苏"];
        data[14].value = province_val["浙江"];
        data[15].value = province_val["江西"];
        data[16].value = province_val["湖北"];
        data[17].value = province_val["广西"];
        data[18].value = province_val["甘肃"];
        data[19].value = province_val["山西"];
        data[20].value = province_val["内蒙古"];
        data[21].value = province_val["陕西"];
        data[22].value = province_val["吉林"];
        data[23].value = province_val["福建"];
        data[24].value = province_val["贵州"];
        data[25].value = province_val["广东"];
        data[26].value = province_val["青海"];
        data[27].value = province_val["西藏"];
        data[28].value = province_val["四川"];
        data[29].value = province_val["宁夏"];
        data[30].value = province_val["海南"];
        data[31].value = province_val["台湾"];
        data[32].value = province_val["香港"];
        data[33].value = province_val["澳门"];
        data[34].value = province_val["南海诸岛"];
        myChart.setOption(option);
    }
    setInterval(function () { run() }, 1000);


    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();