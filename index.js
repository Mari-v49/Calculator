 let firstnumVal = document.getElementById("firstnum");
 let SecoundtnumVal = document.getElementById("Secoundtnum");
 let Operator = document.getElementById("Operator");
 let resultval = document.getElementById("result");


 function calculate(){


     if( firstnumVal.value==="" || SecoundtnumVal.value==="" ||Operator.value==="" ){

        resultval.textContent="Please field all the inputes";
         resultval.style.color="Red";
     }
     else{

     
   let Val1= parseInt(firstnumVal.value);
   let val2 =  parseInt(SecoundtnumVal.value);
   let OperatorVal = Operator.value;
        
   switch (OperatorVal) {

      case "+": 
      resultval.textContent=`Your Ans : ${Val1+val2}`;
      resultval.style.color=" green";
      break;

       case "-": 
      resultval.textContent=`Your Ans : ${Val1-val2}`;
      resultval.style.color=" green";
      break;

       case "*": 
      resultval.textContent=`Your Ans : ${Val1*val2}`;
      resultval.style.color="green";
      break;

       case "/": 
      resultval.textContent=`Your Ans : ${Val1/val2}`;
      resultval.style.color="green";
      break;


      default :
      resultval.textContent = "Please provide a Valid operator..?";
      resultval.style.color="Red";

   }

   
     }

  firstnumVal.value="";
  SecoundtnumVal.value="";
  Operator.value = "";
  


 }