export default class TimeCalc {

     static getLatency(start){
        let now = new Date() 
        let then = new Date(start)
        let offset = then.getTimezoneOffset() * 60 * 1000;

        let nowTime = now.getTime();
        let thenTime = then.getTime() - offset;

        return nowTime - thenTime;
    }
}