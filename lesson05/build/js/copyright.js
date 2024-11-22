"use strict";
/* const convertToString = (year: number): string => {
    return "" + year;
};
const year = document.getElementById("year")!;

const thisyear = new Date().getFullYear();

year.setAttribute("currYear", convertToString(thisyear));
year.textContent = convertToString(thisyear);
 */
const year = document.getElementById("year");
const thisyear = new Date().getFullYear().toString();
year.setAttribute("datatimg", thisyear);
year.textContent = thisyear;
