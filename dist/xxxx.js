"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = require("ioredis");
const redis = new ioredis_1.default({ db: 0 });
redis.config('SET', 'notify-keyspace-events', 'Ex');
redis.subscribe('');
const delay = (time) => new Promise((resolve) => setTimeout(() => resolve(1), time * 1000));
const a = async () => {
    redis.set('key', 'value', 'EX', 2);
    await delay(2);
    redis.on('EXPIRE', (...args) => {
        global.console.log(args);
    });
    console.log('redis.eventNames: ', redis.eventNames());
};
a().then(() => console.log('done'));
//# sourceMappingURL=xxxx.js.map