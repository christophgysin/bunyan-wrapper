# bunyan-wrapper

Convenience wrapper around bunyan and bunyan-prettystream.

## Usage

```javascript
const log = require('bunyan-wrapper')('my-app');

log.error('...')
log.warn('...')
log.info('...')
log.debug('...')
log.trace('...')
```

Reads the LOG_LEVEL environment variable to set the desired log level.
