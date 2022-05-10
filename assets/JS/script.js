const headerElem = document.getElementById("header");
const h1Elem = document.getElementById("h1");
const mainElem = document.getElementById("main");

const renderDayAndDate = () => {
  const dayAndDate = document.createElement("h2");
  dayAndDate.classList.add("header-day-date");
  dayAndDate.textContent = moment().format("MMMM Do YYYY");
  

  headerElem.append(dayAndDate);
};
const renderDailyPlanner = () => {
    const dailyTimeSlots = document.createElement("div");
    dailyTimeSlots.classList.add("input-group");

  for (let index = 6 ; index < 24; index++) {

    const hourlySlot = document.createElement("div");
    hourlySlot.classList.add("hourly-slot")
    hourlySlot.classList.add(getTimeSlotClass(moment(), index));

    const timeElem = document.createElement("span");
    timeElem.classList.add("time-value");
    timeElem.textContent = index;

    const timeSlotElem = document.createElement("input");
    timeSlotElem.setAttribute("type", "text");
    timeSlotElem.classList.add("time-slot");
    timeSlotElem.classList.add(getTimeSlotClass(moment(), index));
    
    hourlySlot.appendChild(timeElem);
    hourlySlot.appendChild(timeSlotElem);
    dailyTimeSlots.appendChild(hourlySlot);
    mainElem.appendChild(dailyTimeSlots);
  }
};

const getTimeSlotClass = (now, hour) => {
  console.log(now.format("H"))
  if (now.format("H") > hour) {
    return 'past-time'
  }
  else if (now.format("H") < hour) {
    return 'future-time'
  }
  return 'present-time';
}

const init = () => {
  renderDayAndDate();
  renderDailyPlanner();
};
init();
