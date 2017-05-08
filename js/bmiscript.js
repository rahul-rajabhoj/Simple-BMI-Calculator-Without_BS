function calculateBmi() {
                var weight = document.bmiForm.weight.value;
                var height = document.bmiForm.height.value;
                if(weight > 0 && height > 0){	
                    var finalBmi = weight/(height/100*height/100);
                    document.bmiForm.bmi.value = finalBmi;
                if(finalBmi < 18.5){
                    document.bmiForm.meaning.value = "UNDERWEIGHT";
                }
                else if(finalBmi > 18.5 && finalBmi < 25){
                    document.bmiForm.meaning.value = "NORMAL";
                }
                else if(finalBmi > 25 && finalBmi < 30){
                    document.bmiForm.meaning.value = "OVERWEIGHT";
                }
                else if(finalBmi > 30 && finalBmi < 35){
                    document.bmiForm.meaning.value = "OBESE";
                }
                 else if(finalBmi > 35 && finalBmi < 40){
                    document.bmiForm.meaning.value = "SEVERELY OBESE";
                }
                else if(finalBmi > 40){
                    document.bmiForm.meaning.value = "VERY SEVERELY OBESE";
                }
            }
            else{
                alert("Please Fill in everything correctly");
                }
            }