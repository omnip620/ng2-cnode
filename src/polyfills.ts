import 'core-js/es6';
import 'core-js/es7/reflect';
import {enableProdMode} from "@angular/core";
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
  enableProdMode();
} else {
  // Development
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
