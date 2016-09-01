const FS = require('fs');
const Path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const DOM = React.DOM;

const courseTitle = "Pragmatically Applying Functional React.js";

const subjectsDir = Path.resolve(__dirname, '..', 'subjects');

const subjects = {
  reactjs: 'React.js'
};

function createSubjectHtml(subject, item) {
  return ReactDOMServer.renderToStaticMarkup(
    DOM.html({},
      DOM.body({},
        DOM.div({ id: 'appContainer' }),
          DOM.link({ rel: 'stylesheet', href: `/${subject}/dist/style.min.css` }),
          DOM.script({ src: '/shared/common.js' }),
          DOM.script({ src: `/${subject}/dist/${item}.js` })
      )
    )
  );
}

function writeSubjectHtml(subject) {
  ['lecture', 'exercise', 'solution'].forEach(x => {
    const path = Path.resolve(subjectsDir, subject, `public/${x}.html`);
    FS.writeFileSync(path, createSubjectHtml(subject, x));
  });
}

function createMainIndexHtml() {
  return ReactDOMServer.renderToStaticMarkup(
    DOM.html({},
      DOM.body({},
        DOM.div({ id: 'main' },
          DOM.h1({}, courseTitle),
          DOM.table({},
            DOM.tbody({},
              Object.keys(subjects).map((subject, idx) =>
                DOM.tr({ className: (idx % 2) ? 'odd' : 'even', key: idx },
                  DOM.td({ className: 'idx' }, `${idx + 1}.`),
                  DOM.td({ className: 'lecture' },
                    DOM.a({ href: `/${subject}/lecture.html` }, subjects[subject])),
                  DOM.td({ className: 'exercise' },
                    DOM.a({ href: `/${subject}/exercise.html` }, 'exercise')),
                  DOM.td({ className: 'solution' },
                    DOM.a({ href: `/${subject}/solution.html` }, 'solution'))
                )
              )
            )
          )
        ),
        DOM.link({ rel: 'stylesheet', href: '/dist/style.min.css' })
      )
    )
  );
}

function writeMainIndexHtml() {
  const path = Path.resolve(__dirname, '../public/index.html');
  FS.writeFileSync(path, createMainIndexHtml());
}

Object.keys(subjects).forEach(subject => {
  writeSubjectHtml(subject);
});

writeMainIndexHtml();
