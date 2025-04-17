// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
function calcTime() {
    //Gets the dates
      let start = new Date(document.getElementById("date").value);
      let end = new Date(document.getElementById("date2").value);
      //Makes sure start is before end
      if (start>end) [start,end] = [end,start];
      //Save for later to find the weeks
      const fullStart = new Date(start);
      //Calculate years and months difference
      let years = end.getFullYear() - start.getFullYear();
      let months = end.getMonth() - start.getMonth();
      let days = end.getDate() - start.getDate();
      //Subtract 1 month if there are no days
      if (days<0) {
        months = months-1;
        const prevMonth= new Date(end.getFullYear(),end.getMonth(),0);
        days + prevMonth.getDate();
      }
      //Subtract a year if there are no months
      if (months<0) {
        years-=1;
        months+=12;
      }
      // Create a new date to find weeks
      let tempDate = new Date(fullStart);
      tempDate.setFullYear(tempDate.getFullYear()+years);
      tempDate.setMonth(tempDate.getMonth()+months);
      //Getting milliseconds and converting them to a day
      let remainingMs=end-tempDate;
      let remainingDays=Math.floor(remainingMs/86400000);
      //Calculating amount of weeks and rounding down via Math.floor()
      let weeks = Math.floor(remainingDays/7);
      //Using the modulo operator to get the days left after the division
      let extraDays =remainingDays%7;
      document.getElementById("output").textContent="Difference:"+years+"year(s),"+months+"month(s),"+weeks+"week(s),"+extraDays+"day(s)";
    }
