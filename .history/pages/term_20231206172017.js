import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const showTerm = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.description}</h6>
        <i class="fas fa-edit btn btn-info" id="update-author--${item.firebaseKey}">Update</i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${item.firebaseKey}">Delete</i>
      </div>
    </div>
    `;
  });
  renderToDOM('#store', domString);
};

export default showTerm;
