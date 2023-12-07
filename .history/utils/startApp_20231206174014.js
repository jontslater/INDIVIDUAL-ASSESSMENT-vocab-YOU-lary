import getTerm from '../api/termData';
import domBuilder from '../domBuilder';
import navBar from '../pages/navBar';
import showTerm from '../pages/term';

const startApp = () => {
  domBuilder();
  navBar();
  getTerm().then(showTerm);
  // BUILD THE DOM
  // domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
};
export default startApp;
