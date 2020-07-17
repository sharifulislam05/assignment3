//start feetToMile solution
function feetToMile(feet) {
    let mileCount = 0;
    if(feet < 0){
        return "invalid input distance doesn't a negative value";
    }
    else{
        mileCount = feet * 0.00018939;
        return mileCount;
    }
} // end feetToMile solution

//start woodCalculator solution
function woodCalculator(chair, table, bed) {
    let totalWoodCount = 0;
    if (chair < 0 || table < 0 || bed < 0) {
        return "chair or table or bed can not negetive value";
    }
    else{
        totalWoodCount = (1 * chair) + (3 * table) + (5 * bed); // Chair = 1 Cubic, Table = 3 Cubic, bed = 5 Cubic wood.
        return totalWoodCount;
    }  
}//end woodCalculator solution

//start brickCalculator solution
function brickCalculator(floor) {
    const firstTenFloor = 15;
    const tenToTweentyFloor = 12;
    const aboveTweentyFloor = 10;
    let amountOfBricks = 0;
    if (floor <= 0) {
        return "Floor Can not zero or negetive.please input valid floor number"
    }
    else{
        if(floor <= 10){
            amountOfBricks =  (firstTenFloor * floor) * 1000;   
        }
        else if(floor <= 20){
            const aboveTenFloor = floor - 10;
            const fristTenBricksCount = (firstTenFloor * 10) * 1000; // Find 1-10 Floor bricks
            amountOfBricks = (fristTenBricksCount + (aboveTenFloor * tenToTweentyFloor) * 1000); //Find total bricks
        }
        else if(floor > 20){ 
            const upTweenty = floor - 20;  
            const fristTenBricksCount = (firstTenFloor * 10) * 1000;// Find 1-10 Floor bricks
            const teenToTweentyBricksCount = (fristTenBricksCount + (10 * tenToTweentyFloor) * 1000); // Find 11-20 Floor bricks
            amountOfBricks = (teenToTweentyBricksCount + (upTweenty * aboveTweentyFloor) * 1000); //Find total bricks
        }
        return amountOfBricks;    
    }
}// end brickCalculator solution

//start tinyFriend solution
function tinyFriend(name){ 
    let smallFriend = name[0];
    if (name.length == 0 ) {
     return "Friend name is empty.please input friend name";
     }
    for (let i = 0; i < name.length; i++) {
        let index = name[i].length;
        if (smallFriend.length > index) {
             smallFriend.length = index;
             smallFriend = name[i];
        } 
    }
    return smallFriend;
 }//end tinyFriend solution

 //please check all the solution

let amountOfMile = feetToMile(500); //feetToMile
console.log(amountOfMile);

let totalWood = woodCalculator(2, 5, 6);//woodCalculator
console.log(totalWood);

let totalBricks = brickCalculator(22);//brickCalculator
console.log('Total Amount Of Bricks =', totalBricks);

const name = ['arifa', 'sorif', 'rafi', 'eva', 'sabana',];//tinyFriend
let tinyFriendName = tinyFriend(name);
console.log(tinyFriendName);