import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const showTerm = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.title} ${item.last_name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.email}</h6>
        <hr>
        <p class="card-text bold">${item.favorite ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden=""></i> Favorite</span></p>${item.favorite}` : `${item.favorite}`}
        <hr>
        <i class="btn btn-success fas fa-eye" id="view-author-btn--${item.firebaseKey}">Edit</i>
        <i class="fas fa-edit btn btn-info" id="update-author--${item.firebaseKey}">Update</i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${item.firebaseKey}">Delete</i>
      </div>
    </div>
    `;
  });
  renderToDOM('#store', domString);
};

export default showTerm;
