import getTerm from '../api/termData';
import domBuilder from '../domBuilder';
import showTerm from '../pages/term';

const startApp = () => {
  domBuilder();
  getTerm().then(showTerm);
  // BUILD THE DOM
  // domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
};
export default startApp;
