'use strict';
 class AlarmClock {
          constructor(id) {
              this.alarmCollection = [];
              this.timerId = id;
     }

     addClock (time, callback, clockId = null) {
         if (clockId === null)  throw new Error('Id not defined');
         if (clockId === this.timerId) return console.error('Id already exist');
         this.alarmCollection.push({id: clockId, time: time, callback: callback});

     }
 }