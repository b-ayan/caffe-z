
var userInfo=[];
var userName = prompt("Enter your name to continue:");
userInfo.push(userName);

// Check if the entered value is 'start'
if (userName != null){
        userGender=gender();
        if (userGender=="male"){
            alert("Welcome to caffe Z Mr "+userName+" <3");
        }
        else if (userGender=="female"){
            alert("Welcome to caffe Z Ms "+userName+" <3");
        }
        else alert("Welcome to caffe Z <3");
}
userInfo.push(userGender);

var drinkType=prompt("Do you want to drink a hot or a cold drink?");
if (drinkType!=null){
var drinkName=prompt("write the name of the drink you want:");
    if (drinkName!=null){
        alert("Thank you for your order<3 \n Your "+drinkName+" is getting prepared.");
    }
}
userInfo.push(drinkType);
userInfo.push(drinkName);

console.log("order: "+drinkName+" -- customer name: "+userName);
for(i=0;i<4;i++){
console.log(userInfo[i]);}


function gender(){
    gender= prompt("Are you male or female?") ;
    while(gender!="male" && gender!="female"){
        gender= prompt("Are you male or female?");
    }  
    return gender; 
}


