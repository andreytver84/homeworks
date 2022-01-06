class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timerId = null;        
    }
    addClock(timeAl,callbackAl,idAl) {
        let findId = this.alarmCollection.find(item => item.id === idAl);
        if (!idAl) {
            throw new Error('id таймера не передан');
        } else if (findId) {
            console.error('звонок существует');
            return;
        } 
         this.alarmCollection.push({time: timeAl, callback: callbackAl, id: idAl });             
    }
    removeClock(idAl) {
        let indexAl = this.alarmCollection.findIndex(item => item.id === idAl);
        if (indexAl !== -1) {
            this.alarmCollection.splice(indexAl,1);
            return true;
        } else {
            return false;
        }
    }
    getCurrentFormattedTime() {
        const date = new Date();
        let hh = date.getHours();
        let mm = date.getMinutes();
        if (date.getHours() < 10) {
            hh = '0' +  date.getHours();
        }
        if (date.getMinutes() < 10) {
            mm = '0' +  date.getMinutes();
        }
        return hh + ':' + mm;
    }
    start() {
        if (!this.timerId) {
            this.timerId = setInterval(function() {
                let findAlarm = this.alarmCollection.find(item => item.time == getCurrentFormattedTime());
                findAlarm.callback();
            });            
        }    
    }
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    printAlarms() {
        this.alarmCollection.forEach((item) => console.log('id звонка: ' + item.id + '; время звонка: ' + item.time));
    }
    clearAlarms() {
        clearInterval(this.timerId);
        this.alarmCollection.splice(0,this.alarmCollection.length-1);
    }
}