'use strict';
 class AlarmClock {
          constructor() {
              this.alarmCollection = [];
              this.timerId = null;
     }

     addClock(time, callback, clockId = null) {
         if (clockId === null)  throw new Error('Id not defined');
         if (this.alarmCollection.find(item => item.id === clockId)) return console.error('Id already exist');
         this.alarmCollection.push({id: clockId, time: time, callback: callback});
     }

     removeClock(clockId) {
          let removeIndex = this.alarmCollection.findIndex(item => item.id === clockId);
          console.log(removeIndex);
          if (removeIndex || removeIndex === 0) {
              this.alarmCollection.splice(removeIndex, 1);
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
              if (alarm.time === this.getCurrentFormattedTime()) return alarm.callback;
          }
          if (!this.timerId) {
              this.timerId = setInterval(() => this.alarmCollection.forEach(item => checkClock(item)), 60000);
          }
     }

     stop() {
          if (this.timerId) {
              clearInterval(this.timerId);
              this.timerId = null;
          }
     }

     printAlarms () {
          this.alarmCollection.forEach((item) => {
              console.log(item.id, item.time)
          })
     }

     clearAlarms() {
          this.stop();
          this.alarmCollection = [];
     }


 }