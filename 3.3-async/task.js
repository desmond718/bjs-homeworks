'use strict';
 class AlarmClock {
          constructor(id) {
              this.alarmCollection = [];
              this.timerId = id;
     }

     addClock(time, callback, clockId = null) {
         if (clockId === null)  throw new Error('Id not defined');
         if (clockId === this.timerId) return console.error('Id already exist');

         return this.alarmCollection.push({id: clockId, time: time, callback: callback});
     }

     removeClock(clockId) {
          let removeId = this.alarmCollection.findIndex(item => item.id === clockId);
          if (removeId) {
              delete this.alarmCollection[removeId];
              return true;
          }
          return false;
     }

     getCurrentFormattedTime() {
          let currentTime = new Date().toTimeString();
          return currentTime.slice(0,5);
     }

     start() {
          const checkClock = (alarm) => {
              if (alarm === this.getCurrentFormattedTime()) return callback;
          }

     }

 }