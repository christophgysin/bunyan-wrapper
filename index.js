const bunyan = require('bunyan');
const PrettyStream = require('bunyan-prettystream');

function RawStream() {}

RawStream.prototype.write = (rec) => {
  // eslint-disable-next-line no-console
  console.log('%s: %s: %s',
    bunyan.nameFromLevel[rec.level].toUpperCase(),
    rec.name,
    rec.msg);
};

const createStream = () => {
  if (process.stdout.isTTY) {
    const stream = new PrettyStream();
    stream.pipe(process.stdout);
    return stream;
  }

  return new RawStream();
};

module.exports = name => bunyan.createLogger({
  name,
  streams: [
    {
      level: process.env.LOG_LEVEL || 'info',
      type: 'raw',
      stream: createStream(),
    },
  ],
});
