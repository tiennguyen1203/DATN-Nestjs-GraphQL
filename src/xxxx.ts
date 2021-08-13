import Redis from 'ioredis';

const redis = new Redis({ db: 0 });
redis.config('SET', 'notify-keyspace-events', 'Ex');
redis.subscribe('');

const delay = (time) =>
  new Promise((resolve) => setTimeout(() => resolve(1), time * 1000));

const a = async () => {
  redis.set('key', 'value', 'EX', 2);
  await delay(2);
  redis.on('EXPIRE', (...args) => {
    global.console.log(args);
  });
  console.log('redis.eventNames: ', redis.eventNames());
  // redis.
};

a().then(() => console.log('done'));
