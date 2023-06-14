import api from '../api';

export async function getProducts() {
  return api
    .get('products')
    .then(result => result.data)
    .catch(err => {
      console.log(err);
      return [];
    });
}

export async function saveProduct(product) {
  return api
    .post('products', product)
    .then(result => {
      return result.data;
    })
    .catch(err => {
      console.log(err);
      return {};
    });
}

export async function removeProduct(id) {
  return api
    .delete(`products/${id}`)
    .then(() => 'ok')
    .catch(err => {
      console.log(err);
      return 'error';
    });
}
