
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


var divElement = document.createElement("div");
var paragraphElement = document.createElement("p");
var ulElement = document.createElement("ul");
var liElement1 = document.createElement("li");
var liElement2 = document.createElement("li");
var liElement3 = document.createElement("li");

paragraphElement.textContent=userName;
liElement1.textContent = "Gender : "+userGender;
liElement2.textContent = "Drink Type : "+drinkType;
liElement3.textContent = "Drink : "+drinkName;

ulElement.appendChild(liElement1);
ulElement.appendChild(liElement2);
ulElement.appendChild(liElement3);
paragraphElement.appendChild(ulElement);
divElement.appendChild(paragraphElement);

var container = document.getElementById("userData");
container.appendChild(divElement);