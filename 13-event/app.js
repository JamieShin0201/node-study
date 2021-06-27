const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log('first callback - ', args);
};

emitter.on('jamie', callback1);

emitter.on('jamie', (args) => {
  console.log('second callback - ', args);
});

emitter.emit('jamie', { message: 1 });
emitter.emit('jamie', { message: 2 });

emitter.removeListener('jamie', callback1);
emitter.emit('jamie', { message: 3 });

emitter.removeAllListeners();
emitter.emit('jamie', { message: 4 });
