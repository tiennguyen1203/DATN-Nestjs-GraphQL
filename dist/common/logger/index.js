"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeormLoggerContainer = void 0;
class TypeormLoggerContainer {
    logQuery(query) {
        console.info(query);
    }
    log(level, message) {
        console.log(message);
    }
    logMigration(message) {
        console.log(message);
    }
    logQueryError(error, query) {
        console.log(query);
    }
    logQuerySlow(time, query) {
        console.log(query);
    }
    logSchemaBuild(message) {
        console.log(message);
    }
}
exports.TypeormLoggerContainer = TypeormLoggerContainer;
//# sourceMappingURL=index.js.map