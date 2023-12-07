import getTerm from '../api/termData';
import domBuilder from '../domBuilder';
import viewWords from '../pages/viewWords';

const startApp = () => {
  getTerm().then(viewWords);
  domBuilder();
  // BUILD THE DOM
  // domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
};
export default startApp;
