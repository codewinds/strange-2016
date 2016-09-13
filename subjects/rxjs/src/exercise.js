import './util/polyfill'; // first import polyfills
import React from 'react';
import ReactDOM from 'react-dom';
import Rx from 'rxjs';

const { Observable } = Rx;

/*
   See the TODO items below for the exercise details, look for '?'
   for where you are to complete code.

   As you proceed you may need to comment out previous steps as you
   go if your console output becomes too busy.
 */

/* Using Observable.create */

// TODO 1a - create observable that emits 3 items and completes
// const ob1a$ = Observable.create(?);
// ob1a$.subscribe({
//   next: x => console.log('next', x),
//   error: err => console.log('error', err),
//   complete: () => console.log('1a complete')
// });

// TODO 1b - create observable that emits 2 items then errors
// const ob1b$ = Observable.create(?);
// ob1b$.subscribe({
//   next: x => console.log('next', x),
//   error: err => console.log('error', err),
//   complete: () => console.log('complete')
// });

// TODO 1c - create observable that emits 0 items and completes
// const ob1c$ = Observable.create(?);
// ob1c$.subscribe({
//   next: x => console.log('next', x),
//   error: err => console.log('error', err),
//   complete: () => console.log('1c complete')
// });


/* Using Observable.of */

// TODO 2a - create observable that emits 1 item
// const ob2a$ = Observable.of(?);
// ob2a$.subscribe({
//   next: x => console.log('next', x),
//   error: err => console.log('error', err),
//   complete: () => console.log('2a complete')
// });

// TODO 2b - create observable that emits 3 items
// const ob2b$ = Observable.of(?);
// ob2b$.subscribe({
//   next: x => console.log('next', x),
//   error: err => console.log('error', err),
//   complete: () => console.log('2b complete')
// });

// TODO 2c - create observable that emits 0 items
// const ob2c$ = Observable.of(?);
// ob2c$.subscribe({
//   next: x => console.log('next', x),
//   error: err => console.log('error', err),
//   complete: () => console.log('2c complete')
// });


/* Using Observable.throw */

// TODO 3a - create observable that errors
// const ob3a$ = Observable.throw(?);
// ob3a$.subscribe({
//   next: x => console.log('next', x),
//   error: err => console.log('error', err),
//   complete: () => console.log('3a complete')
// });

// TODO 3b - create observable that errors, but catch and emit an
// action object instead with the error as the payload
// const ob3b$ = Observable.throw(?)
//                         .catch(?);
// ob3b$.subscribe({
//   next: x => console.log('next', x),
//   error: err => console.log('error', err),
//   complete: () => console.log('3b complete')
// });


/* Using Observable.from */

const prom4 = new Promise((resolve, reject) => {
  resolve(4);
});
// TODO 4 - create observable from a promise
// const ob4$ = Observable.from(?);
// ob4$.subscribe({
//   next: x => console.log('next', x),
//   error: err => console.log('error', err),
//   complete: () => console.log('4 complete')
// });


/* Using any observable methods and chaining */

// TODO 5 create observable that increments every 0.1 seconds
// const ob5$ = Observable.interval(?)
  /* TODO 5b and stops emitting after 5 values */
  /* TODO 5c and filters out odd values */
  /* TODO 5d and multiplies value by 100 */
// ob5$.subscribe({
//   next: x => console.log('5 next', x),
//   error: err => console.log('5 error', err),
//   complete: () => console.log('5 complete')
// });


/* Using Observable.ajax.getJSON */

/* TODO 6 fetch '/fake-api.json' and transform into
   an action object FETCH_SUCCESS with the results as the payload.
   Also catch any error and emit an error action FETCH_ERROR with
   the error as its payload */
// const ob6$ = ?;
// ob6$.subscribe({
//   next: x => console.log('6 next', x),
//   error: err => console.log('6 error', err),
//   complete: () => console.log('6 complete')
// });



/* Using Observable.interval(1000).take(2) with mergeMap to trigger
   Observable.ajax.getJSON('/fake-api.json') like in step 6
   Hint: you can reuse ob6$ */

/* TODO 7a have an interval observable trigger a refresh of items
   once a second for two seconds and emit actions for each */
// const ob7a$ = ?;
// ob7a$.subscribe({
//   next: x => console.log('7a next', x),
//   error: err => console.log('7a error', err),
//   complete: () => console.log('7a complete')
// });



/* TODO 7b like 7a, but throttle the requests so there is only
   a max of 1 request per 3 seconds (resulting in a single request) */
// const ob7b$ = ?;
// ob7b$.subscribe({
//   next: x => console.log('7b next', x),
//   error: err => console.log('7b error', err),
//   complete: () => console.log('7b complete')
// });


/* TODO 7c like 7a, but debounce the requests so it won't make
   a request until there has been a pause of more than 3 seconds */
// const ob7c$ = ?;
// ob7c$.subscribe({
//   next: x => console.log('7c next', x),
//   error: err => console.log('7c error', err),
//   complete: () => console.log('7c complete')
// });


/* Using Observable.combineLatest combine the latest values from
   2 observables into one observable emitting an object with both values
 */

const ob8a$ = Observable.interval(1000)
                        .take(3)
                        .timestamp()
                        .map(x => x.timestamp);
const ob8b$ = Observable.interval(300)
                        .take(5);
/* TODO 8 - use combineLatest to combine the latest values from ob8a$
   and ob8b$ emitting an object with the values from each */
// const ob8c$ = Observable.combineLatest(
//   ob8a$,
//   ob8b$,
//   (a, b) => ({
//     a: a,
//     b: b
//   })
// );
// ob8c$.subscribe({
//   next: x => console.log('8c next', x),
//   error: err => console.log('8c error', err),
//   complete: () => console.log('8c complete')
// });


const appContainerDiv = document.querySelector('#appContainer');

function render() {
  ReactDOM.render(<div>RxJS Exercise</div>, appContainerDiv);
}

render();
