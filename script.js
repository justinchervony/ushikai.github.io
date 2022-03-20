var staticNames = [];

var jobs1 = [];
var jobs2 = [];
var jobs3 = [];
var jobs4 = [];
var jobs5 = [];
var jobs6 = [];
var jobs7 = [];
var jobs8 = [];

var tanks = [];
var regens = [];
var shields = [];
var casters = [];
var melees = [];
var ranged = [];

var tanksAmount = 0;
var regensAmount = 0;
var shieldsAmount = 0;
var castersAmount = 0;
var meleesAmount = 0;
var rangedAmount = 0;
var amountOrder = [];
var amountOrder = {tanksAmount, regensAmount, shieldsAmount, meleesAmount, rangedAmount, castersAmount};


//Pushes all form data into respective Arrays
function formToArray(placeholder){
    staticNames.push(document.querySelector('#firstMember').value);
    staticNames.push(document.querySelector('#secondMember').value);
    staticNames.push(document.querySelector('#thirdMember').value);
    staticNames.push(document.querySelector('#fourthMember').value);
    staticNames.push(document.querySelector('#fifthMember').value);
    staticNames.push(document.querySelector('#sixthMember').value);
    staticNames.push(document.querySelector('#seventhMember').value);
    staticNames.push(document.querySelector('#eighthMember').value);
    console.log(staticNames);

    jobs1.push(document.querySelector('#PLD1').checked);
    jobs1.push(document.querySelector('#WAR1').checked);
    jobs1.push(document.querySelector('#DRK1').checked);
    jobs1.push(document.querySelector('#GNB1').checked);
    jobs1.push(document.querySelector('#WHM1').checked);
    jobs1.push(document.querySelector('#SCH1').checked);
    jobs1.push(document.querySelector('#AST1').checked);
    jobs1.push(document.querySelector('#SGE1').checked);
    jobs1.push(document.querySelector('#MNK1').checked);
    jobs1.push(document.querySelector('#DRG1').checked);
    jobs1.push(document.querySelector('#NIN1').checked);
    jobs1.push(document.querySelector('#SAM1').checked);
    jobs1.push(document.querySelector('#RPR1').checked);
    jobs1.push(document.querySelector('#BRD1').checked);
    jobs1.push(document.querySelector('#MCH1').checked);
    jobs1.push(document.querySelector('#DNC1').checked);
    jobs1.push(document.querySelector('#BLM1').checked);
    jobs1.push(document.querySelector('#SMN1').checked);
    jobs1.push(document.querySelector('#RDM1').checked);
    console.log(jobs1);

    jobs2.push(document.querySelector('#PLD2').checked);
    jobs2.push(document.querySelector('#WAR2').checked);
    jobs2.push(document.querySelector('#DRK2').checked);
    jobs2.push(document.querySelector('#GNB2').checked);
    jobs2.push(document.querySelector('#WHM2').checked);
    jobs2.push(document.querySelector('#SCH2').checked);
    jobs2.push(document.querySelector('#AST2').checked);
    jobs2.push(document.querySelector('#SGE2').checked);
    jobs2.push(document.querySelector('#MNK2').checked);
    jobs2.push(document.querySelector('#DRG2').checked);
    jobs2.push(document.querySelector('#NIN2').checked);
    jobs2.push(document.querySelector('#SAM2').checked);
    jobs2.push(document.querySelector('#RPR2').checked);
    jobs2.push(document.querySelector('#BRD2').checked);
    jobs2.push(document.querySelector('#MCH2').checked);
    jobs2.push(document.querySelector('#DNC2').checked);
    jobs2.push(document.querySelector('#BLM2').checked);
    jobs2.push(document.querySelector('#SMN2').checked);
    jobs2.push(document.querySelector('#RDM2').checked);
    console.log(jobs2);

    jobs3.push(document.querySelector('#PLD3').checked);
    jobs3.push(document.querySelector('#WAR3').checked);
    jobs3.push(document.querySelector('#DRK3').checked);
    jobs3.push(document.querySelector('#GNB3').checked);
    jobs3.push(document.querySelector('#WHM3').checked);
    jobs3.push(document.querySelector('#SCH3').checked);
    jobs3.push(document.querySelector('#AST3').checked);
    jobs3.push(document.querySelector('#SGE3').checked);
    jobs3.push(document.querySelector('#MNK3').checked);
    jobs3.push(document.querySelector('#DRG3').checked);
    jobs3.push(document.querySelector('#NIN3').checked);
    jobs3.push(document.querySelector('#SAM3').checked);
    jobs3.push(document.querySelector('#RPR3').checked);
    jobs3.push(document.querySelector('#BRD3').checked);
    jobs3.push(document.querySelector('#MCH3').checked);
    jobs3.push(document.querySelector('#DNC3').checked);
    jobs3.push(document.querySelector('#BLM3').checked);
    jobs3.push(document.querySelector('#SMN3').checked);
    jobs3.push(document.querySelector('#RDM3').checked);
    console.log(jobs3);

    jobs4.push(document.querySelector('#PLD4').checked);
    jobs4.push(document.querySelector('#WAR4').checked);
    jobs4.push(document.querySelector('#DRK4').checked);
    jobs4.push(document.querySelector('#GNB4').checked);
    jobs4.push(document.querySelector('#WHM4').checked);
    jobs4.push(document.querySelector('#SCH4').checked);
    jobs4.push(document.querySelector('#AST4').checked);
    jobs4.push(document.querySelector('#SGE4').checked);
    jobs4.push(document.querySelector('#MNK4').checked);
    jobs4.push(document.querySelector('#DRG4').checked);
    jobs4.push(document.querySelector('#NIN4').checked);
    jobs4.push(document.querySelector('#SAM4').checked);
    jobs4.push(document.querySelector('#RPR4').checked);
    jobs4.push(document.querySelector('#BRD4').checked);
    jobs4.push(document.querySelector('#MCH4').checked);
    jobs4.push(document.querySelector('#DNC4').checked);
    jobs4.push(document.querySelector('#BLM4').checked);
    jobs4.push(document.querySelector('#SMN4').checked);
    jobs4.push(document.querySelector('#RDM4').checked);
    console.log(jobs4);

    jobs5.push(document.querySelector('#PLD5').checked);
    jobs5.push(document.querySelector('#WAR5').checked);
    jobs5.push(document.querySelector('#DRK5').checked);
    jobs5.push(document.querySelector('#GNB5').checked);
    jobs5.push(document.querySelector('#WHM5').checked);
    jobs5.push(document.querySelector('#SCH5').checked);
    jobs5.push(document.querySelector('#AST5').checked);
    jobs5.push(document.querySelector('#SGE5').checked);
    jobs5.push(document.querySelector('#MNK5').checked);
    jobs5.push(document.querySelector('#DRG5').checked);
    jobs5.push(document.querySelector('#NIN5').checked);
    jobs5.push(document.querySelector('#SAM5').checked);
    jobs5.push(document.querySelector('#RPR5').checked);
    jobs5.push(document.querySelector('#BRD5').checked);
    jobs5.push(document.querySelector('#MCH5').checked);
    jobs5.push(document.querySelector('#DNC5').checked);
    jobs5.push(document.querySelector('#BLM5').checked);
    jobs5.push(document.querySelector('#SMN5').checked);
    jobs5.push(document.querySelector('#RDM5').checked);
    console.log(jobs5);

    jobs6.push(document.querySelector('#PLD6').checked);
    jobs6.push(document.querySelector('#WAR6').checked);
    jobs6.push(document.querySelector('#DRK6').checked);
    jobs6.push(document.querySelector('#GNB6').checked);
    jobs6.push(document.querySelector('#WHM6').checked);
    jobs6.push(document.querySelector('#SCH6').checked);
    jobs6.push(document.querySelector('#AST6').checked);
    jobs6.push(document.querySelector('#SGE6').checked);
    jobs6.push(document.querySelector('#MNK6').checked);
    jobs6.push(document.querySelector('#DRG6').checked);
    jobs6.push(document.querySelector('#NIN6').checked);
    jobs6.push(document.querySelector('#SAM6').checked);
    jobs6.push(document.querySelector('#RPR6').checked);
    jobs6.push(document.querySelector('#BRD6').checked);
    jobs6.push(document.querySelector('#MCH6').checked);
    jobs6.push(document.querySelector('#DNC6').checked);
    jobs6.push(document.querySelector('#BLM6').checked);
    jobs6.push(document.querySelector('#SMN6').checked);
    jobs6.push(document.querySelector('#RDM6').checked);
    console.log(jobs6);

    jobs7.push(document.querySelector('#PLD7').checked);
    jobs7.push(document.querySelector('#WAR7').checked);
    jobs7.push(document.querySelector('#DRK7').checked);
    jobs7.push(document.querySelector('#GNB7').checked);
    jobs7.push(document.querySelector('#WHM7').checked);
    jobs7.push(document.querySelector('#SCH7').checked);
    jobs7.push(document.querySelector('#AST7').checked);
    jobs7.push(document.querySelector('#SGE7').checked);
    jobs7.push(document.querySelector('#MNK7').checked);
    jobs7.push(document.querySelector('#DRG7').checked);
    jobs7.push(document.querySelector('#NIN7').checked);
    jobs7.push(document.querySelector('#SAM7').checked);
    jobs7.push(document.querySelector('#RPR7').checked);
    jobs7.push(document.querySelector('#BRD7').checked);
    jobs7.push(document.querySelector('#MCH7').checked);
    jobs7.push(document.querySelector('#DNC7').checked);
    jobs7.push(document.querySelector('#BLM7').checked);
    jobs7.push(document.querySelector('#SMN7').checked);
    jobs7.push(document.querySelector('#RDM7').checked);
    console.log(jobs7);

    jobs8.push(document.querySelector('#PLD8').checked);
    jobs8.push(document.querySelector('#WAR8').checked);
    jobs8.push(document.querySelector('#DRK8').checked);
    jobs8.push(document.querySelector('#GNB8').checked);
    jobs8.push(document.querySelector('#WHM8').checked);
    jobs8.push(document.querySelector('#SCH8').checked);
    jobs8.push(document.querySelector('#AST8').checked);
    jobs8.push(document.querySelector('#SGE8').checked);
    jobs8.push(document.querySelector('#MNK8').checked);
    jobs8.push(document.querySelector('#DRG8').checked);
    jobs8.push(document.querySelector('#NIN8').checked);
    jobs8.push(document.querySelector('#SAM8').checked);
    jobs8.push(document.querySelector('#RPR8').checked);
    jobs8.push(document.querySelector('#BRD8').checked);
    jobs8.push(document.querySelector('#MCH8').checked);
    jobs8.push(document.querySelector('#DNC8').checked);
    jobs8.push(document.querySelector('#BLM8').checked);
    jobs8.push(document.querySelector('#SMN8').checked);
    jobs8.push(document.querySelector('#RDM8').checked);
    console.log(jobs8);

    tanks.push(document.querySelector('#PLD1').checked);
    tanks.push(document.querySelector('#WAR1').checked);
    tanks.push(document.querySelector('#DRK1').checked);
    tanks.push(document.querySelector('#GNB1').checked);
    tanks.push(document.querySelector('#PLD2').checked);
    tanks.push(document.querySelector('#WAR2').checked);
    tanks.push(document.querySelector('#DRK2').checked);
    tanks.push(document.querySelector('#GNB2').checked);
    tanks.push(document.querySelector('#PLD3').checked);
    tanks.push(document.querySelector('#WAR3').checked);
    tanks.push(document.querySelector('#DRK3').checked);
    tanks.push(document.querySelector('#GNB3').checked);
    tanks.push(document.querySelector('#PLD4').checked);
    tanks.push(document.querySelector('#WAR4').checked);
    tanks.push(document.querySelector('#DRK4').checked);
    tanks.push(document.querySelector('#GNB4').checked);
    tanks.push(document.querySelector('#PLD5').checked);
    tanks.push(document.querySelector('#WAR5').checked);
    tanks.push(document.querySelector('#DRK5').checked);
    tanks.push(document.querySelector('#GNB5').checked);
    tanks.push(document.querySelector('#PLD6').checked);
    tanks.push(document.querySelector('#WAR6').checked);
    tanks.push(document.querySelector('#DRK6').checked);
    tanks.push(document.querySelector('#GNB6').checked);
    tanks.push(document.querySelector('#PLD7').checked);
    tanks.push(document.querySelector('#WAR7').checked);
    tanks.push(document.querySelector('#DRK7').checked);
    tanks.push(document.querySelector('#GNB7').checked);
    tanks.push(document.querySelector('#PLD8').checked);
    tanks.push(document.querySelector('#WAR8').checked);
    tanks.push(document.querySelector('#DRK8').checked);
    tanks.push(document.querySelector('#GNB8').checked);
    console.log(tanks);

    regens.push(document.querySelector('#WHM1').checked);
    regens.push(document.querySelector('#AST1').checked);
    regens.push(document.querySelector('#WHM2').checked);
    regens.push(document.querySelector('#AST2').checked);
    regens.push(document.querySelector('#WHM3').checked);
    regens.push(document.querySelector('#AST3').checked);
    regens.push(document.querySelector('#WHM4').checked);
    regens.push(document.querySelector('#AST4').checked);
    regens.push(document.querySelector('#WHM5').checked);
    regens.push(document.querySelector('#AST5').checked);
    regens.push(document.querySelector('#WHM6').checked);
    regens.push(document.querySelector('#AST6').checked);
    regens.push(document.querySelector('#WHM7').checked);
    regens.push(document.querySelector('#AST7').checked);
    regens.push(document.querySelector('#WHM8').checked);
    regens.push(document.querySelector('#AST8').checked);
    console.log(regens);

    shields.push(document.querySelector('#SCH1').checked);
    shields.push(document.querySelector('#SGE1').checked);
    shields.push(document.querySelector('#SCH2').checked);
    shields.push(document.querySelector('#SGE2').checked);
    shields.push(document.querySelector('#SCH3').checked);
    shields.push(document.querySelector('#SGE3').checked);
    shields.push(document.querySelector('#SCH4').checked);
    shields.push(document.querySelector('#SGE4').checked);
    shields.push(document.querySelector('#SCH5').checked);
    shields.push(document.querySelector('#SGE5').checked);
    shields.push(document.querySelector('#SCH6').checked);
    shields.push(document.querySelector('#SGE6').checked);
    shields.push(document.querySelector('#SCH7').checked);
    shields.push(document.querySelector('#SGE7').checked);
    shields.push(document.querySelector('#SCH8').checked);
    shields.push(document.querySelector('#SGE8').checked);
    console.log(shields);

    melees.push(document.querySelector('#MNK1').checked);
    melees.push(document.querySelector('#DRG1').checked);
    melees.push(document.querySelector('#NIN1').checked);
    melees.push(document.querySelector('#SAM1').checked);
    melees.push(document.querySelector('#RPR1').checked);
    melees.push(document.querySelector('#MNK2').checked);
    melees.push(document.querySelector('#DRG2').checked);
    melees.push(document.querySelector('#NIN2').checked);
    melees.push(document.querySelector('#SAM2').checked);
    melees.push(document.querySelector('#RPR2').checked);
    melees.push(document.querySelector('#MNK3').checked);
    melees.push(document.querySelector('#DRG3').checked);
    melees.push(document.querySelector('#NIN3').checked);
    melees.push(document.querySelector('#SAM3').checked);
    melees.push(document.querySelector('#RPR3').checked);
    melees.push(document.querySelector('#MNK4').checked);
    melees.push(document.querySelector('#DRG4').checked);
    melees.push(document.querySelector('#NIN4').checked);
    melees.push(document.querySelector('#SAM4').checked);
    melees.push(document.querySelector('#RPR4').checked);
    melees.push(document.querySelector('#MNK5').checked);
    melees.push(document.querySelector('#DRG5').checked);
    melees.push(document.querySelector('#NIN5').checked);
    melees.push(document.querySelector('#SAM5').checked);
    melees.push(document.querySelector('#RPR5').checked);
    melees.push(document.querySelector('#MNK6').checked);
    melees.push(document.querySelector('#DRG6').checked);
    melees.push(document.querySelector('#NIN6').checked);
    melees.push(document.querySelector('#SAM6').checked);
    melees.push(document.querySelector('#RPR6').checked);
    melees.push(document.querySelector('#MNK7').checked);
    melees.push(document.querySelector('#DRG7').checked);
    melees.push(document.querySelector('#NIN7').checked);
    melees.push(document.querySelector('#SAM7').checked);
    melees.push(document.querySelector('#RPR7').checked);
    melees.push(document.querySelector('#MNK8').checked);
    melees.push(document.querySelector('#DRG8').checked);
    melees.push(document.querySelector('#NIN8').checked);
    melees.push(document.querySelector('#SAM8').checked);
    melees.push(document.querySelector('#RPR8').checked);
    console.log(melees);

    ranged.push(document.querySelector('#BRD1').checked);
    ranged.push(document.querySelector('#MCH1').checked);
    ranged.push(document.querySelector('#DNC1').checked);
    ranged.push(document.querySelector('#BRD2').checked);
    ranged.push(document.querySelector('#MCH2').checked);
    ranged.push(document.querySelector('#DNC2').checked);
    ranged.push(document.querySelector('#BRD3').checked);
    ranged.push(document.querySelector('#MCH3').checked);
    ranged.push(document.querySelector('#DNC3').checked);
    ranged.push(document.querySelector('#BRD4').checked);
    ranged.push(document.querySelector('#MCH4').checked);
    ranged.push(document.querySelector('#DNC4').checked);
    ranged.push(document.querySelector('#BRD5').checked);
    ranged.push(document.querySelector('#MCH5').checked);
    ranged.push(document.querySelector('#DNC5').checked);
    ranged.push(document.querySelector('#BRD6').checked);
    ranged.push(document.querySelector('#MCH6').checked);
    ranged.push(document.querySelector('#DNC6').checked);
    ranged.push(document.querySelector('#BRD7').checked);
    ranged.push(document.querySelector('#MCH7').checked);
    ranged.push(document.querySelector('#DNC7').checked);
    ranged.push(document.querySelector('#BRD8').checked);
    ranged.push(document.querySelector('#MCH8').checked);
    ranged.push(document.querySelector('#DNC8').checked);
    console.log(ranged);

    casters.push(document.querySelector('#BLM1').checked);
    casters.push(document.querySelector('#SMN1').checked);
    casters.push(document.querySelector('#RDM1').checked);
    casters.push(document.querySelector('#BLM2').checked);
    casters.push(document.querySelector('#SMN2').checked);
    casters.push(document.querySelector('#RDM2').checked);
    casters.push(document.querySelector('#BLM3').checked);
    casters.push(document.querySelector('#SMN3').checked);
    casters.push(document.querySelector('#RDM3').checked);
    casters.push(document.querySelector('#BLM4').checked);
    casters.push(document.querySelector('#SMN4').checked);
    casters.push(document.querySelector('#RDM4').checked);
    casters.push(document.querySelector('#BLM5').checked);
    casters.push(document.querySelector('#SMN5').checked);
    casters.push(document.querySelector('#RDM5').checked);
    casters.push(document.querySelector('#BLM6').checked);
    casters.push(document.querySelector('#SMN6').checked);
    casters.push(document.querySelector('#RDM6').checked);
    casters.push(document.querySelector('#BLM7').checked);
    casters.push(document.querySelector('#SMN7').checked);
    casters.push(document.querySelector('#RDM7').checked);
    casters.push(document.querySelector('#BLM8').checked);
    casters.push(document.querySelector('#SMN8').checked);
    casters.push(document.querySelector('#RDM8').checked);
    console.log(casters);
}

//Calculates number of each job
function getNumberOfJobs(){
    var x = 0;
    while (x < tanks.length){
        if (tanks[x] === true) {
            tanksAmount = tanksAmount + 1;
            if (x==0 || x==4 || x==8 || x==12 || x==16 || x==20 || x==24 || x==28){
                x+=4;
            }
            if (x==1 || x==5 || x==9 || x==13 || x==17 || x==21 || x==25 || x==29){
                x+=3;
            }
            if (x==2 || x==6 || x==10 || x==14 || x==18 || x==22 || x==26 || x==30){
                x+=2;
            }
        }
        else {
            x++
        }
    }
    var x = 0;
    console.log("Tanks: " + tanksAmount);

    while (x < regens.length){
        if (regens[x] === true) {
            regensAmount = regensAmount + 1;
            if (x==0 || x==2 || x==4 || x==6 || x==8 || x==10 || x==12 || x==14){
                x+=2;
            }
        }
        else {
            x++
        }
    }
    var x = 0;
    console.log("Regen Healers: " + regensAmount);

    while (x < shields.length){
        if (shields[x] === true) {
            shieldsAmount = shieldsAmount + 1;
            if (x==0 || x==2 || x==4 || x==6 || x==8 || x==10 || x==12 || x==14){
                x+=2;
            }
        }
        else {
            x++
        }
    }
    var x = 0;
    console.log("Shield Healers: " + shieldsAmount);

    while (x < melees.length){
        if (melees[x] === true) {
            meleesAmount = meleesAmount + 1;
            if (x==0 || x==5 || x==10 || x==15 || x==20 || x==25 || x==30 || x==35){
                x+=5;
            }
            if (x==1 || x==6 || x==11 || x==16 || x==21 || x==26 || x==31 || x==36){
                x+=4;
            }
            if (x==2 || x==7 || x==12 || x==17 || x==22 || x==27 || x==32 || x==37){
                x+=3;
            }
            if (x==3 || x==8 || x==13 || x==18 || x==23 || x==28 || x==33 || x==38){
                x+=2;
            }
        }
        else {
            x++
        }
    }
    var x = 0;
    console.log("Melee: " + meleesAmount);

    while (x < ranged.length){
        if (ranged[x] === true) {
            rangedAmount = rangedAmount + 1;
            if (x==0 || x==3 || x==6 || x==9 || x==12 || x==15 || x==18 || x==21){
                x+=3;
            }
            if (x==1 || x==4 || x==7 || x==10 || x==13 || x==16 || x==19 || x==22){
                x+=2;
            }
        }
        else {
            x++
        }
    }
    var x = 0;
    console.log("Ranged: " + rangedAmount);

    while (x < casters.length){
        if (casters[x] === true) {
            castersAmount = castersAmount + 1;
            if (x==0 || x==3 || x==6 || x==9 || x==12 || x==15 || x==18 || x==21){
                x+=3;
            }
            if (x==1 || x==4 || x==7 || x==10 || x==13 || x==16 || x==19 || x==22){
                x+=2;
            }
        }
        else {
            x++
        }
    }
    var x = 0;
    console.log("Casters: " + castersAmount);
    console.log(amountOrder);
    amountOrder.sort();
    console.log(amountOrder);
}

//function
//Runs each form function in order
function formCompiler(){
    formToArray();
    getNumberOfJobs();
}