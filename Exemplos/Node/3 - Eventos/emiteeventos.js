'use strict';

const events             = require('events');
const em                 = new events.EventEmitter();

em.on('numero', timeEvent);
em.on('resultado', mod3Event);

function timeEvent (interval) {
    console.log(`Número: ${interval}`);
};

function mod3Event (mod3) {
    console.log(`3 % ${mod3} === 0`);
};

module.exports = em;