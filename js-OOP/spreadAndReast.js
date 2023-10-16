// First exercise

let user1 =[
    name = 'Mariia',
    lastName = 'Ivanisova',
    age = 25
];

let user2 =[
    name = 'Slava',
    lastName = 'Vitruk',
    age=  31
]

let thirdOne = [User1,...User2]
console.log(thirdOne);

// Second exercise

function multiply (multiplier, ...arguments){
   const result = arguments.map((value)=> multiplier * value)
return result;
}
 
const result = multiply (4, 9, 83, 3)
console.log(result)



