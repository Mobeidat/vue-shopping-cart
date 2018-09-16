import Api from './api';

export default {
  getCategories(category) {
    return Api().get(`/categories/${category}`);
  },

  getCategoriesByPage(category, page) {
    return Api().get(`/categories/${category}?page=${page}`);
  }
};
