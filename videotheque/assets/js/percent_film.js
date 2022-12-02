


const toHoursAndMinutes = (totalDuration) => {

const  minutes = totalDuration % 60;
const hours = Math.floor(totalDuration / 60);
return `${hours}h${string2Digits(minutes)}`;
}
const string2Digits = (number) => {
    return number.toString().padStart(2, '0');
}




const perviewCalculation = (currentViewingDuration, totalDuration) => 
(Math.round(currentViewingDuration / totalDuration * 100));
      
  
  


