const calculateBtn = document.getElementById("calculate-btn");

calculateBtn.addEventListener("click", ()=>{
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const bmi = weight / (height*height);
    console.log(weight);
    console.log(height);
    console.log(bmi);

    if(bmi<18.5){
        document.getElementById("bmi-report").innerText="Status: Underweight";
    }else if(bmi>=18.5 && bmi<=24.9){
        document.getElementById("bmi-report").innerText="Status: Healthy Weight";
    }else if(bmi>24.9 && bmi<=29.9){
        document.getElementById("bmi-report").innerText="Status: Overweight";
    }else{
        document.getElementById("bmi-report").innerText="Status: Obesity";
    }

    document.getElementById("bmi-value").innerText= "BMI value: " + bmi;
})