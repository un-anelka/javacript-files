document.getElementById('btn').addEventListener("click", BMICalculator);
    function BMICalculator(e){
        const h=document.getElementById("h").value;
        const w=document.getElementById("w").value;    
        const bmi=(w/(h/100*h/100));
        const bmio=(bmi.toFixed(2))
        const BMIresult=document.getElementById("result");
        

        if (bmio<=21){
            BMIresult.innerHTML="your BMI is "+bmio+ " <p> you are safe</p>"
        }
        else if(21<bmio<28){
            BMIresult.innerHTML="your BMI is "+bmio+ " <p> your life is on risk</p>" 
        }
        else {
            BMIresult.innerHTML="your BMI is "+bmio+ " <p> your life is in danger</p>" 
        }
    console.log(bmio)
    }

// function BMi(){
// const w=document.getElementById("w").value;
// const h=document.getElementById("h").value;
// const bmi=(w/(h/100*h/100));
// const bmio=(bmi.toFixed(2))
// console.log(bmi)
// }