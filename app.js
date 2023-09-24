document.addEventListener("DOMContentLoaded", setInterval(() =>{
  const now = new Date();
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  let subtract = 0;

  if (now.getHours() > 12){
    subtract = 12
  };
  

  const hours = now.getHours() - subtract + ":" + now.getMinutes();
  const day = now.toLocaleDateString('en-EN', { weekday: 'long' });
  const month = monthNames[now.getMonth()];
  const fullYear = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();

  function setTime() {
    const hoursElement = document.getElementById("hours");
    const dayMonthElement = document.getElementById("dayMonth");
    const fullYearElement = document.getElementById("fullYear");

    if (hoursElement && dayMonthElement && fullYearElement) {
      hoursElement.innerText = hours;
      dayMonthElement.innerText = day + " , " + month;
      fullYearElement.innerText = fullYear;
    }
  }

  setTime();
},1000));