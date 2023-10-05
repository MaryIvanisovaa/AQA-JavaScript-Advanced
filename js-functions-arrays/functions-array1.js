//Function declaration

function firstComparison(a,b) {
    return  (a>b? console.log (a): console.log (b));
} 

let result = firstComparison(5,35);

//Function expression

const secondComparison = function (a,b){
return (a>b? console.log (a): console.log (b));
}

let result1 = secondComparison(25,4);

// Arrow function

let thirdComparison = (a,b) => a>b? console.log (a): console.log (b);
    
let result2 = thirdComparison(15,6);


