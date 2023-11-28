class FancyLogger {
    static instance = null;
    constructor() {
        if (FancyLogger.instance == null) {
            this.logArray = [];
            FancyLogger.instance = this;
        }
        return FancyLogger.instance;
    }

    log(message) {
        this.logArray.push(message);
        console.log(`Logs are: ${this.logArray}`);
    }

    printLogCount() {
        console.log(`${this.logArray.length} logs`);
    }
}

const logger = new FancyLogger();
Object.freeze(logger);
export default logger;