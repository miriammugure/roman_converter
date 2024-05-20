function intToRoman(num) {
  const symbolsList = [
      ["I", 1],
      ["IV", 4],
      ["V", 5],
      ["IX", 9],
      ["X", 10],
      ["XL", 40],
      ["L", 50],
      ["XC", 90],
      ["C", 100],
      ["CD", 400],
      ["D", 500],
      ["CM", 900],
      ["M", 1000],
      ['V\u0305', 5000],
      ['X\u0305', 10000],
      ['L\u0305', 50000],
      ['C\u0305', 100000],
      ['D\u0305', 500000],
      ['M\u0305', 1000000],
  ];

  let i = symbolsList.length - 1;
  let roman = "";
  while (num > 0) {
      const currentDivider = symbolsList[i][1];
      const currentSymbol = symbolsList[i][0];
      
      const result = Math.floor(num / currentDivider);
      if (result > 0) {
          let temp = "";
          for (let j = 0; j < result; j++) {
              temp += currentSymbol;
          }
          roman += temp;
          num %= currentDivider;
      }
      i -= 1;
  }
  return roman;
}

// https://www.calculateme.com/roman-numerals/to-roman/


   
    const user_input =document.getElementById('number');
    const error= document.getElementById('error');
    const btn_convert= document.getElementById('convert-button');
    const user_output=document.getElementById('output');
    
    
        btn_convert.addEventListener('click' ,function(ev){
            ev.preventDefault();
            
             let numeral =user_input.value;
            
            user_output.textContent="";
        
             if(numeral=="" ){
              error.textContent="please enter a number"
              
             }else if(numeral < 1){
            error.textContent="Please enter a valid number"
            
             }else if(numeral > 4000000){
            error.textContent="Please enter number less than 4,000,000"
            }else if(numeral % 1 !==0){
                error.textContent="Decimal number is not allowed"
            }
            
        else{  
            error.textContent="";
                let output = intToRoman(numeral);
              user_output.textContent= numeral +'=' + output;
           
            }
           
        })





    
    


// document.addEventListener("keydown" ,function(event){
//     event.preventDefault();
//     if(event.key =='Enter'){
//      roman();
//     }
    
// })



