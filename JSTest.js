let TotalNFTs=[ ]
function checkNFT (_name, _hairColor, _accountType, _city) {

let NewNFT = {
"name": _name,
"hairColor": _hairColor,
"accountType": _accountType,
"city": _city
}
TotalNFTs.push(NewNFT);
console.log("Checked: " + _name);
}

function listofNFTs () {

    for(let i=0; i < TotalNFTs.length; i++) {
    console.log("\nID: \t\t" + (i + 1)); 
    console.log("Name: \t\t" + TotalNFTs[i].name);
    console.log("Eyecolor: \t" + TotalNFTs[i].hairColor);
    console.log("Shirt Type: " + TotalNFTs[i].accountType);
    console.log("Bling \t\t" + TotalNFTs[i].city);
    }
    }

function getInfo() {
    console.log("\n" + TotalNFTs.length);
    }

checkNFT("Rahul", "Brown", "Savings", "Delhi"); 
checkNFT("Suresh", "Black", "Current", "Mumbai"); 
checkNFT("Harish", "Black", "Current", "Ahmedabad");
checkNFT("Satwinder", "White", "Savings", "Punjab");
checkNFT("Mohan", "Brown", "Savings", "Mohali");

listofNFTs();
getInfo();
