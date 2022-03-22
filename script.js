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
var amountOrderStrings = [];

var needsJob = [true, true, true, true, true, true, true, true];

var finalJobs = ["","","","","","","",""]




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
            else{
                x++
            }
        }
        else {
            x++
        }
    }
    var x = 0;
    console.log("Tanks: " + tanksAmount);

    amountOrder.push(tanksAmount);
    amountOrderStrings.push("Tanks")
    console.log(amountOrderStrings);
    console.log(amountOrder);

    while (x < regens.length){
        if (regens[x] === true) {
            regensAmount = regensAmount + 1;
            if (x==0 || x==2 || x==4 || x==6 || x==8 || x==10 || x==12 || x==14){
                x+=2;
            }
            else{
                x++
            }
        }
        else {
            x++
        }
    }
    var x = 0;
    console.log("Regen Healers: " + regensAmount);

    if (tanksAmount>=regensAmount) {
        amountOrder.splice(0, 0, regensAmount);
        amountOrderStrings.splice(0, 0, "Regens");
    }
    else {
    amountOrder.push(regensAmount);
    amountOrderStrings.push("Regens");
    }
    console.log(amountOrderStrings);
    console.log(amountOrder);

    while (x < shields.length){
        if (shields[x] === true) {
            shieldsAmount = shieldsAmount + 1;
            if (x==0 || x==2 || x==4 || x==6 || x==8 || x==10 || x==12 || x==14){
                x+=2;
            }
            else{
                x++
            }
        }
        else {
            x++
        }
    }
    var x = 0;
    console.log("Shield Healers: " + shieldsAmount);

    if (amountOrder[0]>=shieldsAmount) {
        amountOrder.splice(0, 0, shieldsAmount);
        amountOrderStrings.splice(0, 0, "Shields");
    }
    else if (amountOrder[1]>=shieldsAmount) {
        amountOrder.splice(1, 0, shieldsAmount);
        amountOrderStrings.splice(1, 0, "Shields");
    }
    else {
    amountOrder.push(shieldsAmount);
    amountOrderStrings.push("Shields");
    }
    console.log(amountOrderStrings);
    console.log(amountOrder);

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
            else{
                x++
            }
        }
        else {
            x++
        }
    }
    var x = 0;
    console.log("Melee: " + meleesAmount);

    if (amountOrder[0]>=meleesAmount) {
        amountOrder.splice(0, 0, meleesAmount);
        amountOrderStrings.splice(0, 0, "Melees");
    }
    else if (amountOrder[1]>=meleesAmount) {
        amountOrder.splice(1, 0, meleesAmount);
        amountOrderStrings.splice(1, 0, "Melees");
    }
    else if (amountOrder[2]>=meleesAmount) {
        amountOrder.splice(2, 0, meleesAmount);
        amountOrderStrings.splice(2, 0, "Melees");
    }
    else {
    amountOrder.push(meleesAmount);
    amountOrderStrings.push("Melees");
    }
    console.log(amountOrderStrings);
    console.log(amountOrder);

    while (x < ranged.length){
        if (ranged[x] === true) {
            rangedAmount = rangedAmount + 1;
            if (x==0 || x==3 || x==6 || x==9 || x==12 || x==15 || x==18 || x==21){
                x+=3;
            }
            if (x==1 || x==4 || x==7 || x==10 || x==13 || x==16 || x==19 || x==22){
                x+=2;
            }
            else{
                x++
            }
        }
        else {
            x++
        }
    }
    var x = 0;
    console.log("Ranged: " + rangedAmount);

    if (amountOrder[0]>=rangedAmount) {
        amountOrder.splice(0, 0, rangedAmount);
        amountOrderStrings.splice(0, 0, "Ranged");
    }
    else if (amountOrder[1]>=rangedAmount) {
        amountOrder.splice(1, 0, rangedAmount);
        amountOrderStrings.splice(1, 0, "Ranged");
    }
    else if (amountOrder[2]>=rangedAmount) {
        amountOrder.splice(2, 0, rangedAmount);
        amountOrderStrings.splice(2, 0, "Ranged");
    }
    else if (amountOrder[3]>=rangedAmount) {
        amountOrder.splice(3, 0, rangedAmount);
        amountOrderStrings.splice(3, 0, "Ranged");
    }
    else {
    amountOrder.push(rangedAmount);
    amountOrderStrings.push("Ranged");
    }
    console.log(amountOrderStrings);
    console.log(amountOrder);


    while (x < casters.length){
        if (casters[x] === true) {
            castersAmount = castersAmount + 1;
            if (x==0 || x==3 || x==6 || x==9 || x==12 || x==15 || x==18 || x==21){
                x+=3;
            }
            if (x==1 || x==4 || x==7 || x==10 || x==13 || x==16 || x==19 || x==22){
                x+=2;
            }
            else{
                x++
            }
        }
        else {
            x++
        }
    }
    var x = 0;
    console.log("Casters: " + castersAmount);

    if (amountOrder[0]>=castersAmount) {
        amountOrder.splice(0, 0, castersAmount);
        amountOrderStrings.splice(0, 0, "Casters");
    }
    else if (amountOrder[1]>=castersAmount) {
        amountOrder.splice(1, 0, castersAmount);
        amountOrderStrings.splice(1, 0, "Casters");
    }
    else if (amountOrder[2]>=castersAmount) {
        amountOrder.splice(2, 0, castersAmount);
        amountOrderStrings.splice(2, 0, "Casters");
    }
    else if (amountOrder[3]>=castersAmount) {
        amountOrder.splice(3, 0, castersAmount);
        amountOrderStrings.splice(3, 0, "Casters");
    }
    else if (amountOrder[4]>=castersAmount) {
        amountOrder.splice(4, 0, castersAmount);
        amountOrderStrings.splice(4, 0, "Casters");
    }
    else {
    amountOrder.push(castersAmount);
    amountOrderStrings.push("Casters");
    }
    console.log(amountOrderStrings);
    console.log(amountOrder);

}

function pickJobs(){
    var member = 0;
    var job = 0;
    var jobSpot  = 0;
    var i = 0;
    var y = 0;

    switch (amountOrderStrings[0]) {
        case "Tanks":
            while (i < 2){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*4);
                jobSpot = (member*4) + job;
    
                if (tanks[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "PLD";
                            break;
                        case 1:
                            finalJobs[member] = "WAR";
                            break;
                        case 2:
                            finalJobs[member] = "DRK";
                            break;
                        case 3:
                            finalJobs[member] = "GNB";
                            break;
                        default:
                            pickJobs();
                    }

                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Regens":
            while (i < 1){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*2);
                jobSpot = (member*2) + job;
    
                if (regens[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "WHM";
                            break;
                        case 1:
                            finalJobs[member] = "AST";
                            break;
                        default:
                            pickJobs();
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Shields":
            while (i < 1){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*2);
                jobSpot = (member*2) + job;
    
                if (shields[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "SCH";
                            break;
                        case 1:
                            finalJobs[member] = "SGE";
                            break;
                        default:
                            pickJobs();
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Melees":
            while (i < 2){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*5);
                jobSpot = (member*5) + job;
    
                if (melees[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "MNK";
                            break;
                        case 1:
                            finalJobs[member] = "DRG";
                            break;
                        case 2:
                            finalJobs[member] = "NIN";
                            break;
                        case 3:
                            finalJobs[member] = "SAM";
                            break;
                        case 4:
                            finalJobs[member] = "RPR";
                            break;
                        default:
                            pickJobs();
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Ranged":
            while (i < 1){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*3);
                jobSpot = (member*3) + job;
    
                if (ranged[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "BRD";
                            break;
                        case 1: 
                            finalJobs[member] = "MCH";
                            break;
                        case 2:
                            finalJobs[member] = "DNC";
                            break;
                        default:
                            pickJobs();
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Casters":
            while (i < 1){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*3);
                jobSpot = (member*3) + job;
    
                if (casters[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "BLM";
                            break;
                        case 1: 
                            finalJobs[member] = "SMN";
                            break;
                        case 2:
                            finalJobs[member] = "RDM";
                            break;
                        default:
                            pickJobs();
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;

                }
            }
            break
    
    }
                console.log(member);
                console.log(job);
                console.log(jobSpot);
                console.log(i);
                console.log(needsJob);
                console.log(finalJobs);
    i = 0;
    switch (amountOrderStrings[1]) {
        case "Tanks":
            while (i < 2){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*4);
                jobSpot = (member*4) + job;
    
                if (tanks[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "PLD";
                            break;
                        case 1:
                            finalJobs[member] = "WAR";
                            break;
                        case 2:
                            finalJobs[member] = "DRK";
                            break;
                        case 3:
                            finalJobs[member] = "GNB";
                            break;
                        default:
                            pickJobs();
                    }

                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Regens":
            while (i < 1){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*2);
                jobSpot = (member*2) + job;
    
                if (regens[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "WHM";
                            break;
                        case 1:
                            finalJobs[member] = "AST";
                            break;
                        default:
                            pickJobs();
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Shields":
            while (i < 1){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*2);
                jobSpot = (member*2) + job;
    
                if (shields[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "SCH";
                            break;
                        case 1:
                            finalJobs[member] = "SGE";
                            break;
                        default:
                            pickJobs();
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Melees":
            while (i < 2){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*5);
                jobSpot = (member*5) + job;
    
                if (melees[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "MNK";
                            break;
                        case 1:
                            finalJobs[member] = "DRG";
                            break;
                        case 2:
                            finalJobs[member] = "NIN";
                            break;
                        case 3:
                            finalJobs[member] = "SAM";
                            break;
                        case 4:
                            finalJobs[member] = "RPR";
                            break;
                        default:
                            pickJobs();
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Ranged":
            while (i < 1){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*3);
                jobSpot = (member*3) + job;
    
                if (ranged[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "BRD";
                            break;
                        case 1: 
                            finalJobs[member] = "MCH";
                            break;
                        case 2:
                            finalJobs[member] = "DNC";
                            break;
                        default:
                            pickJobs();
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Casters":
            while (i < 1){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*3);
                jobSpot = (member*3) + job;
    
                if (casters[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "BLM";
                            break;
                        case 1: 
                            finalJobs[member] = "SMN";
                            break;
                        case 2:
                            finalJobs[member] = "RDM";
                            break;
                        default:
                            pickJobs();
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break
    }
                console.log(member);
                console.log(job);
                console.log(jobSpot);
                console.log(i);
                console.log(needsJob);
                console.log(finalJobs);
    i = 0;
    switch (amountOrderStrings[2]) {
        case "Tanks":
            while (i < 2){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*4);
                jobSpot = (member*4) + job;
    
                if (tanks[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "PLD";
                            break;
                        case 1:
                            finalJobs[member] = "WAR";
                            break;
                        case 2:
                            finalJobs[member] = "DRK";
                            break;
                        case 3:
                            finalJobs[member] = "GNB";
                            break;
                        default:
                            pickJobs();
                    }

                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Regens":
            while (i < 1){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*2);
                jobSpot = (member*2) + job;
    
                if (regens[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "WHM";
                            break;
                        case 1:
                            finalJobs[member] = "AST";
                            break;
                        default:
                            pickJobs();
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Shields":
            while (i < 1){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*2);
                jobSpot = (member*2) + job;
    
                if (shields[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "SCH";
                            break;
                        case 1:
                            finalJobs[member] = "SGE";
                            break;
                        default:
                            pickJobs();
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Melees":
            while (i < 2){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*5);
                jobSpot = (member*5) + job;
    
                if (melees[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "MNK";
                            break;
                        case 1:
                            finalJobs[member] = "DRG";
                            break;
                        case 2:
                            finalJobs[member] = "NIN";
                            break;
                        case 3:
                            finalJobs[member] = "SAM";
                            break;
                        case 4:
                            finalJobs[member] = "RPR";
                            break;
                        default:
                            pickJobs();
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Ranged":
            while (i < 1){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*3);
                jobSpot = (member*3) + job;
    
                if (ranged[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "BRD";
                            break;
                        case 1: 
                            finalJobs[member] = "MCH";
                            break;
                        case 2:
                            finalJobs[member] = "DNC";
                            break;
                        default:
                            pickJobs();
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Casters":
            while (i < 1){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*3);
                jobSpot = (member*3) + job;
    
                if (casters[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "BLM";
                            break;
                        case 1: 
                            finalJobs[member] = "SMN";
                            break;
                        case 2:
                            finalJobs[member] = "RDM";
                            break;
                        default:
                            pickJobs();
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break
    }
                console.log(member);
                console.log(job);
                console.log(jobSpot);
                console.log(i);
                console.log(needsJob);
                console.log(finalJobs);
    i = 0;
    switch (amountOrderStrings[3]) {
        case "Tanks":
            while (i < 2){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*4);
                jobSpot = (member*4) + job;
    
                if (tanks[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "PLD";
                            break;
                        case 1:
                            finalJobs[member] = "WAR";
                            break;
                        case 2:
                            finalJobs[member] = "DRK";
                            break;
                        case 3:
                            finalJobs[member] = "GNB";
                            break;
                        default:
                            pickJobs();
                    }

                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Regens":
            while (i < 1){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*2);
                jobSpot = (member*2) + job;
    
                if (regens[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "WHM";
                            break;
                        case 1:
                            finalJobs[member] = "AST";
                            break;
                        default:
                            pickJobs();
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Shields":
            while (i < 1){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*2);
                jobSpot = (member*2) + job;
    
                if (shields[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "SCH";
                            break;
                        case 1:
                            finalJobs[member] = "SGE";
                            break;
                        default:
                            pickJobs();                            
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Melees":
            while (i < 2){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*5);
                jobSpot = (member*5) + job;
    
                if (melees[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "MNK";
                            break;
                        case 1:
                            finalJobs[member] = "DRG";
                            break;
                        case 2:
                            finalJobs[member] = "NIN";
                            break;
                        case 3:
                            finalJobs[member] = "SAM";
                            break;
                        case 4:
                            finalJobs[member] = "RPR";
                            break;
                        default:
                            pickJobs();                            
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Ranged":
            while (i < 1){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*3);
                jobSpot = (member*3) + job;
    
                if (ranged[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "BRD";
                            break;
                        case 1: 
                            finalJobs[member] = "MCH";
                            break;
                        case 2:
                            finalJobs[member] = "DNC";
                            break;
                        default:
                            pickJobs();                            
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Casters":
            while (i < 1){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*3);
                jobSpot = (member*3) + job;
    
                if (casters[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "BLM";
                            break;
                        case 1: 
                            finalJobs[member] = "SMN";
                            break;
                        case 2:
                            finalJobs[member] = "RDM";
                            break;
                        default:
                            pickJobs();                            
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break
    }
                console.log(member);
                console.log(job);
                console.log(jobSpot);
                console.log(i);
                console.log(needsJob);
                console.log(finalJobs);
    i = 0;
    switch (amountOrderStrings[4]) {
        case "Tanks":
            while (i < 2){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*4);
                jobSpot = (member*4) + job;
    
                if (tanks[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "PLD";
                            break;
                        case 1:
                            finalJobs[member] = "WAR";
                            break;
                        case 2:
                            finalJobs[member] = "DRK";
                            break;
                        case 3:
                            finalJobs[member] = "GNB";
                            break;
                        default:
                            pickJobs();                            
                    }

                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }

            }
            break

        case "Regens":
            while (i < 1){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*2);
                jobSpot = (member*2) + job;
    
                if (regens[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "WHM";
                            break;
                        case 1:
                            finalJobs[member] = "AST";
                            break;
                        default:
                            pickJobs();                            
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Shields":
            while (i < 1){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*2);
                jobSpot = (member*2) + job;
    
                if (shields[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "SCH";
                            break;
                        case 1:
                            finalJobs[member] = "SGE";
                            break;
                        default:
                            pickJobs();                            
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Melees":
            while (i < 2){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*5);
                jobSpot = (member*5) + job;
    
                if (melees[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "MNK";
                            break;
                        case 1:
                            finalJobs[member] = "DRG";
                            break;
                        case 2:
                            finalJobs[member] = "NIN";
                            break;
                        case 3:
                            finalJobs[member] = "SAM";
                            break;
                        case 4:
                            finalJobs[member] = "RPR";
                            break;
                        default:
                            pickJobs();                            
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Ranged":
            while (i < 1){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*3);
                jobSpot = (member*3) + job;
    
                if (ranged[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "BRD";
                            break;
                        case 1: 
                            finalJobs[member] = "MCH";
                            break;
                        case 2:
                            finalJobs[member] = "DNC";
                            break;
                        default:
                            pickJobs();                            
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Casters":
            while (i < 1){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*3);
                jobSpot = (member*3) + job;
    
                if (casters[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "BLM";
                            break;
                        case 1: 
                            finalJobs[member] = "SMN";
                            break;
                        case 2:
                            finalJobs[member] = "RDM";
                            break;
                        default:
                            pickJobs();                            
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break
    }
                console.log(member);
                console.log(job);
                console.log(jobSpot);
                console.log(i);
                console.log(needsJob);
                console.log(finalJobs);
    i = 0;
    switch (amountOrderStrings[5]) {
        case "Tanks":
            while (i < 2){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*4);
                jobSpot = (member*4) + job;
    
                if (tanks[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "PLD";
                            break;
                        case 1:
                            finalJobs[member] = "WAR";
                            break;
                        case 2:
                            finalJobs[member] = "DRK";
                            break;
                        case 3:
                            finalJobs[member] = "GNB";
                            break;                       
                    }

                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Regens":
            while (i < 1){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*2);
                jobSpot = (member*2) + job;
    
                if (regens[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "WHM";
                            break;
                        case 1:
                            finalJobs[member] = "AST";
                            break;                    
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Shields":
            while (i < 1){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*2);
                jobSpot = (member*2) + job;
    
                if (shields[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "SCH";
                            break;
                        case 1:
                            finalJobs[member] = "SGE";
                            break;                       
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Melees":
            while (i < 2){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*5);
                jobSpot = (member*5) + job;
                y = member*5;
    
                if (melees[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "MNK";
                            break;
                        case 1:
                            finalJobs[member] = "DRG";
                            break;
                        case 2:
                            finalJobs[member] = "NIN";
                            break;
                        case 3:
                            finalJobs[member] = "SAM";
                            break;
                        case 4:
                            finalJobs[member] = "RPR";
                            break;                           
                    }
                    needsJob[member] = false;
                    i++;    
                }

                else if (member == 2 && needsJob[member]){
                     //alert("Error: Job cannot be assigned due to lack of selection. Please try again.");
                     break
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Ranged":
            while (i < 1){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*3);
                jobSpot = (member*3) + job;
    
                if (ranged[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "BRD";
                            break;
                        case 1: 
                            finalJobs[member] = "MCH";
                            break;
                        case 2:
                            finalJobs[member] = "DNC";
                            break;                    
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break

        case "Casters":
            while (i < 1){
                member = Math.floor(Math.random()*8);
                job = Math.floor(Math.random()*3);
                jobSpot = (member*3) + job;
    
                if (casters[jobSpot] && needsJob[member]){
                    switch (job) {
                        case 0: 
                            finalJobs[member] = "BLM";
                            break;
                        case 1: 
                            finalJobs[member] = "SMN";
                            break;
                        case 2:
                            finalJobs[member] = "RDM";
                            break;                      
                    }
                    needsJob[member] = false;
                    i++;    
                }
                else {
                        member = 0;
                        job = 0;
                        jobSpot  = 0;
                }
            }
            break
    }
                console.log(member);
                console.log(job);
                console.log(jobSpot);
                console.log(i);
                console.log(needsJob);
                console.log(finalJobs);
    i = 0;
}

function printInfo(){
    document.getElementById("results1").innerHTML = staticNames[0] + " will be " + finalJobs[0];
    document.getElementById("results2").innerHTML = staticNames[1] + " will be " + finalJobs[1];
    document.getElementById("results3").innerHTML = staticNames[2] + " will be " + finalJobs[2];
    document.getElementById("results4").innerHTML = staticNames[3] + " will be " + finalJobs[3];
    document.getElementById("results5").innerHTML = staticNames[4] + " will be " + finalJobs[4];
    document.getElementById("results6").innerHTML = staticNames[5] + " will be " + finalJobs[5];
    document.getElementById("results7").innerHTML = staticNames[6] + " will be " + finalJobs[6];
    document.getElementById("results8").innerHTML = staticNames[7] + " will be " + finalJobs[7];
    document.getElementById("resultsFull").innerHTML = "There are " + amountOrder[0] + " " + amountOrderStrings[0] + ", " +
        amountOrder[1] + " " + amountOrderStrings[1] + ", " + amountOrder[2] + " " + amountOrderStrings[2] + ", " + 
        amountOrder[3] + " " + amountOrderStrings[3] + ", " + amountOrder[4] + " " + amountOrderStrings[4] + ", and " + 
        amountOrder[5] + " " + amountOrderStrings[5] +".";
    // document.getElementById("resultsFull").innerHTML = "There are " + tanksAmount + " tanks, " + regensAmount + 
    //         " regen healers, " + shieldsAmount + " shield healers, " + meleesAmount + " melees, " 
    //         + rangedAmount + " ranged, and " + castersAmount + " casters.";
}

//clears variables after each execution
function resetValues(){
    staticNames = [];

    jobs1 = [];
    jobs2 = [];
    jobs3 = [];
    jobs4 = [];
    jobs5 = [];
    jobs6 = [];
    jobs7 = [];
    jobs8 = [];

    tanks = [];
    regens = [];
    shields = [];
    casters = [];
    melees = [];
    ranged = [];

    tanksAmount = 0;
    regensAmount = 0;
    shieldsAmount = 0;
    castersAmount = 0;
    meleesAmount = 0;
    rangedAmount = 0;
    amountOrder = [];
    amountOrderStrings = [];

    finalJobs = ["","","","","","","",""];

    needsJob = [true, true, true, true, true, true, true, true];

}

//function
//Runs each form function in order
function formCompiler(){
    formToArray();
    getNumberOfJobs();
    pickJobs();
    printInfo();
    resetValues();
}

document.getElementById("formSubmit").addEventListener("click",formCompiler);