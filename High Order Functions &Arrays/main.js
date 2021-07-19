const companies=[
    {name:"company one", category:"Finance", start:1981, end:2003},
    {name:"company two", category:"Retail", start:1992, end:2008},
    {name:"company three", category:"Auto", start:1999, end:2007},
    {name:"company four", category:"Retail", start:1989, end:2010},
    {name:"company five", category:"Technology", start:2009, end:2014},
    {name:"company six", category:"Finance", start:1987, end:2010},
    {name:"company seven", category:"Auto", start:1986, end:1996},
    {name:"company eight", category:"Technology", start:2011, end:2016},
    {name:"company nine", category:"Retail", start:1981, end:1989},
];

const ages=[33,12, 20, 16,5,54,21,44,61,13,15,45,25,64,32, 123];

// for loop
// for (let i=0; i<companies.length;i++){
//     console.log(companies[i]);
// }

//forEach

// companies.forEach(function(company){
//     console.log(company.name)
// })
//filter by using for loop

// let canDrink=[];
// for (let i=0; i<ages.length; i++){
//     if(ages[i]>18){
//         canDrink.push(ages[i]);
//     }
// }

//filter using filter

// const canDrink=ages.filter(function(age, index){
//     if (age>30){
//         return true;
//     }
   
// })

// const canDrink=ages.filter(age=>age>30);
// console.log(canDrink)

//Get Retail companies

// const retailCompanies=companies.filter(function(company){
//     if (company.category==='Retail'){
//         return true
//     }
// })
// const retailCompanies=companies.filter((company)=>company.category==="Retail")
// console.log(retailCompanies)

//Get eighties companies
// const eightiesCompanies=companies.filter(company=>(company.start>=1980&&company.start<1990))
// console.log(eightiesCompanies)
// Get companies lasted for 10 years

// const companies10days=companies.filter(company=>((company.end-company.start)>10));
// console.log(companies10days)

// map

//create array of company names

// const companyName=companies.map(function(company){
//     return company.name
// })

// console.log(companyName)

// const TestMap=companies.map(function(company){
//     return `${company.name} [${company.start}-${company.end}]`
// })

// console.log(TestMap)

// const TestMap=companies.map(company=> `${company.name} [${company.start}-${company.end}]`)

// console.log(TestMap)


// const SquarerootOfages=ages.map(age=>Math.sqrt(age))

// console.log(SquarerootOfages)


// const ageMap=ages
// .map(age=>Math.sqrt(age))
// .map(age=>age*2)

// console.log(ageMap)

// //Sorting of objects by start year

// const sortedCompanies= companies.sort(function (c1,c2){
//     if (c1.start>c2.start){
//         return -1;
//     } else{
//         return 1
//     }
// })
// console.log(sortedCompanies)

// const shortSortedCompanies=companies.sort((c1,c2)=> (c1.start<c2.start)? -1:1)
// console.log(shortSortedCompanies)

// const sortAges=ages.sort((a,b)=>a-b)
// console.log(sortAges)

//Reduce

// let ageSum=0;
// for (i=0;i<ages.length;i++){
//     ageSum=ageSum+ages[i]
// }
// console.log(ageSum-123)

// const ageSumReduce=ages.reduce(function(total, age){
//     return total+age
// },1)
// console.log(ageSumReduce-123)
// const ageSumReduceShort=ages.reduce((total, age)=> total+age,1)
// console.log(ageSumReduceShort-123)

//Get total years for all companies



// const totalCompanyYears=companies.reduce(function(total, yearRange){
//     return total+(yearRange.end-yearRange.start)
// },0);

// console.log(totalCompanyYears)

// const totalCompanyYearsShort=companies.reduce((total,yearRange)=> total+(yearRange.end-yearRange.start),2)

// console.log(totalCompanyYearsShort)

// let totalYears=0

// for (i=0;i<companies.length;i+=1){
// totalYears+=(companies[i].end-companies[i].start)
// }
// console.log(totalYears)

const combined=ages
    .map(age=>age*2)
    .filter(people=>people>40)
    .sort((a, b)=>a-b,1)
    .reduce((total,doubleYears)=>total+doubleYears,0)

console.log(combined)

