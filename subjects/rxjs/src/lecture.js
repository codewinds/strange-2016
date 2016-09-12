import './util/polyfill'; // first import polyfills
import React from 'react';
import ReactDOM from 'react-dom';
import Rx from 'rxjs';

/* https://github.com/ReactiveX/RxJS */

const { Observable, Subject } = Rx;

// locate a div in our html where we want to render
const appContainerDiv = document.querySelector('#appContainer');

ReactDOM.render(<h1>RxJS</h1>, appContainerDiv);

/* Observable.create */

// const ob$ = Observable.create(obs => {
//   obs.next('foo');
//   obs.next('bar');
//   obs.next('baz');
//   obs.complete();
// });
//
// ob$.subscribe({
//   next: x => console.log('next', x),
//   error: err => console.log('error', err),
//   complete: () => console.log('complete')
// });
//
// const ob2$ = Observable.create(obs => {
//   obs.next('foo');
//   obs.error(new Error('my error'));
// });
//
// ob2$.subscribe({
//   next: x => console.log('ob2$ next', x),
//   error: err => console.log('ob2$ error', err),
//   complete: () => console.log('ob2$ complete')
// });


/* Observable.of */

// const ob$ = Observable.of('foo', 'bar');
//
// ob$.subscribe({
//   next: x => console.log('next', x),
//   error: err => console.log('error', err),
//   complete: () => console.log('complete')
// });


/* Observable.throw */

// const ob$ = Observable.throw(new Error('my error'));
//
// ob$.subscribe({
//   next: x => console.log('next', x),
//   error: err => console.log('error', err),
//   complete: () => console.log('complete')
// });


/* Observable.from(arr | promise | obs) */

// const prom = new Promise((resolve, reject) => {
//   resolve('foo');
//   /* or reject(new Error('my error')) */
// });
//
// const ob$ = Observable.from(prom);
//
// ob$.subscribe({
//   next: x => console.log('next', x),
//   error: err => console.log('error', err),
//   complete: () => console.log('complete')
// });



/* Observable.interval */

// const int$ = Observable.interval(1000);
//
// int$.subscribe({
//   next: x => console.log('next', x),
//   error: err => console.log('error', err),
//   complete: () => console.log('complete')
// });


/* take(N) */

// const int$ = Observable.interval(1000)
//   .take(5);
//
// int$.subscribe({
//   next: x => console.log('next', x),
//   error: err => console.log('error', err),
//   complete: () => console.log('complete')
// });


/* filter, map */

// const int$ = Observable.interval(1000)
//                        .take(5)
//                        .filter(x => x % 2)
//                        .map(x => `${x} banana`);
//
// int$.subscribe({
//   next: x => console.log('next', x),
//   error: err => console.log('error', err),
//   complete: () => console.log('complete')
// });


/* catch */

// const ob$ = Observable.throw(new Error('my error'))
//                       .catch(err => Observable.of({ type: 'UNCAUGHT',
//                                                     payload: err,
//                                                     error: true }));
//
// ob$.subscribe({
//   next: x => console.log('next', x),
//   error: err => console.log('error', err),
//   complete: () => console.log('complete')
// });



/* Observable.ajax */

// const ob$ = Observable.ajax.getJSON('/fake-api.json')
//                       .map(payload => payload.items); /* use items prop */
//
// ob$.subscribe({
//   next: x => console.log('next', JSON.stringify(x, null, 2)),
//   error: err => console.log('error', err),
//   complete: () => console.log('complete')
// });


/* mergeMap */

// const ob$ = Observable.create(obs => {
//   obs.next('redux');
//   obs.next('rxjs');
//   obs.complete();
// });
//
// ob$
//   .mergeMap(x =>
//     Observable.ajax({
//       url: `https:npmsearch.com/query?q=${x}&fields=name,description`,
//       crossDomain: true,
//       responseType: 'json'
//     })
//               .map(ret => ret.response.results))  /* use results prop of payload */
//   .subscribe({
//     next: x => console.log('next', JSON.stringify(x, null, 2)),
//     error: err => console.log('error', err),
//     complete: () => console.log('complete')
//   });



/* Subject */

// const sub$ = new Subject();
// sub$.next(10);
//
// sub$.subscribe({
//   next: x => console.log('next', x),
//   error: err => console.log('error', err),
//   complete: () => console.log('complete')
// });
//
// sub$.next(20);
// sub$.next(30);
// sub$.complete();



/* redux-observable http://redux-observable.js.org/ */

// import './examples/redux-observable';


/* redux-logic ajax search https://github.com/jeffbski/redux-logic */

// import './examples/redux-logic-ajax-search';


/* redux-logic ajax search w/processOptions */

// import './examples/redux-logic-ajax-search-process-options';
