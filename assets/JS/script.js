const headerElem = document.getElementById("header");
const h1Elem = document.getElementById("h1");
const mainElem = document.getElementById("main");

const dayDisplay = () => {
      
    const dayAndDate = document.createElement("h2");
    dayAndDate.setAttribute("class","card-text");
    dayAndDate.textContent = moment().format("MMMM Do YYYY")
    console.log(dayAndDate.textContent);
   
    headerElem.append(dayAndDate);
}    

dayDisplay()