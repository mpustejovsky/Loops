const person = { firstName: "Jane",
                    lastName: "Doe",
                    birthDate: "Jan 5, 1925",
                    gender: "female"}

let x;
                    
for (x in person){

  if (x=='birthDate'){
      let temp = person[x].trim()
      let year = temp.slice( temp.length-4, temp.length)
      if (year%2){console.log (`Step 1: log birthdate if odd ${person.birthDate}`)}}
}


const arrayofPersons =  [{firstName: "Jane",
                            lastName: "Doe",
                            birthDate: "Jan 5, 1925",
                            gender: "female"},

                            {firstName: "Jon",
                            lastName: "Doe",
                            birthDate: "March 3, 1944",
                            gender: "male"},

                            {firstName: "Shay",
                            lastName: "Stiff",
                            birthDate: "July 1, 1998",
                            gender: "female"},

                            {firstName: "Jack",
                            lastName: "Black",
                            birthDate: "Feb 1, 1991",
                            gender: "male"},

                            {firstName: "Jerry",
                            lastName: "Jane",
                            birthDate: "Dec 15, 1990",
                            gender: "other"}
                            ]

console.log ("Step 2:  Use map() to map over the array and console.log their info ")
const map1 = arrayofPersons.map((value) => {
  console.log (value);
});

console.log ("Step 3: Use filter() to filter the persons array and consol.log only the males in the array")

const males = arrayofPersons.filter((val)=>{
   if (val.gender=='male'){console.log (val)}
});

console.log ("Step 4: Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990. ")

const youngsters= arrayofPersons.filter((val)=>{   
    if (new Date (val.birthDate)>= new Date ('Jan 1, 1990')){console.log (val)}
 });