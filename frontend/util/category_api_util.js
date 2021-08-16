export const fetchCategories = () =>
  $.ajax({
    url: `/api/categories`,
    method: "GET",
  });


export const fetchCategory = (categoryId) =>
  $.ajax({
    method: "GET",
    url: `/api/categories/${categoryId}`,
  });
