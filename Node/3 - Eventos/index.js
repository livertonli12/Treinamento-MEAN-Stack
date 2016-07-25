'use strict';

const em = require('./emiteeventos.js');

setInterval( (function(){
    let i = 1;
    return function () {
        if ( i % 3 === 0) {
            em.emit('resultado', i++);
        } else {
            em.emit('numero', i++);
        }
    }
    
}()), 1000);