const headerElem = document.getElementsByTagName("header")[0];
const h1Elem = document.getElementsByTagName("h1")[0];
const mainElem = document.getElementsByTagName("main")[0];
const inputElem = document.getElementById("input-element");
const currentDate = moment().format("YYYY-MM-DD");

const renderDayAndDate = () => {
  const dayAndDate = document.createElement("h2");
  dayAndDate.classList.add("header-day-date");
  dayAndDate.textContent = moment().format("MMMM Do YYYY");
  
  headerElem.append(dayAndDate);
};
const renderDailyPlanner = () => {
    const dailyTimeSlots = document.createElement("div");
    dailyTimeSlots.classList.add("dailyPlannerTable");

    let storedPlans = JSON.parse(localStorage.getItem(currentDate));
    if (!storedPlans) {
      storedPlans = [];
    }
    
  for (let index = 6 ; index < 24; index++) {

    const hourlySlot = document.createElement("div");
    hourlySlot.classList.add("hourly-slot")
    setInterval(hourlySlot.classList.add(getTimeSlotClass(moment(), index)), 1000 * 60 * 60)

    const timeElem = document.createElement("span");
    timeElem.classList.add("time-value");
    var ampm = index >= 12 ? 'PM' : 'AM';
    timeElem.textContent = index + ampm
    

    const inputElem = document.createElement("input");
    inputElem.setAttribute("type", "text");

    const saveButton = document.createElement("button");
    saveButton.textContent = "save";

    if(storedPlans.length){
      inputElem.value = storedPlans[index-6]
    } 
    saveButton.addEventListener("click", updateInput);
    
    hourlySlot.appendChild(timeElem);
    hourlySlot.appendChild(inputElem);
    hourlySlot.appendChild(saveButton);
    dailyTimeSlots.appendChild(hourlySlot);
    mainElem.appendChild(dailyTimeSlots);
  }
};
const getTimeSlotClass = (now, hour) => {
  if (now.format("H") > hour) {
    return 'past-time'
  }
  else if (now.format("H") < hour) {
    return 'future-time'
  }
  return 'present-time';
}

const updateInput = () => {
     const inputs = [...document.querySelectorAll(".hourly-slot input")]
     .map(x => x.value);
     localStorage.setItem(currentDate, JSON.stringify(inputs));
}

  renderDayAndDate();
  renderDailyPlanner();

