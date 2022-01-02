class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timerId;        
    }
    addClock(timeAl,callbackAl,idAl) {
        let findId = this.alarmCollection.find(item => item.id === idAl);
        if (!idAl) {
            throw new Error('id таймера не передан');
        } else if (findId) {
            console.error('звонок существует');
            return;
        } else {
            this.alarmCollection.push({time: timeAl, calback: callbackAl, id: idAl })
        }        
    }
    removeClock(idAl) {
        let indexAl = this.alarmCollection.findIndex(item => item.id === idAl);
        if (indexAl !== undefined) {
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

    }
    stop() {

    }
    printAlarms() {
        this.alarmCollection.forEach((item) => console.log('id звонка: ' + item.id + '; время звонка: ' + item.time));
    }
    clearAlarms() {
        clearInterval(this.timerId);
        this.alarmCollection.splice(0,this.alarmCollection.length-1);
    }
}