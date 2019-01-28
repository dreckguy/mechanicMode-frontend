export default class TimeCalc {

     static getLatency(start){

        let duration = new Date(Date.now() - new Date(start).getTime());
        return `${duration.getMinutes()}:${duration.getSeconds()}:${duration.getMilliseconds()}`
    }
}