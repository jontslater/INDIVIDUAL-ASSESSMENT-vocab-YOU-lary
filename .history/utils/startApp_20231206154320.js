import getTerm from '../api/termData';
import domBuilder from '../domBuilder';
import viewWords from '../pages/viewWords';

const startApp = () => {
  domBuilder();
  // BUILD THE DOM
  // domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  getTerm().then(viewWords);
};
export default startApp;
