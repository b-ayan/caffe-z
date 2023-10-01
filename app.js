var userName = prompt("Enter your name to continue:");

// Check if the entered value is 'start'
if (userName != null){
    var userGender= prompt("Are you male or female?")    
        if (userGender != null && userGender=="male"){
            alert("Welcome to caffe Z Mr "+userName+" <3");
        }
        else if (userGender != null && userGender=="female"){
            alert("Welcome to caffe Z Ms "+userName+" <3");
        }
        else alert("Welcome to caffe Z <3");
}

var drinkType=prompt("Do you want to drink a hot or a cold drink?");
if (drinkType!=null){
var drinkName=prompt("write the name of the drink you want:");
    if (drinkName!=null){
        alert("Thank you for your order<3 \n Your "+drinkName+" is getting prepared.");
    }
}

console.log("order: "+drinkName+" -- customer name: "+"userName");