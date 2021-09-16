export const getProducts = setDataProducts => {
  setDataProducts(prev => ({ ...prev, loading: true }));
  fetch('https://my-json-server.typicode.com/benirvingplt/products/products', {
    method: 'get',
  })
    .then(res => res.json())
    .then(json => {
      setDataProducts(prev => ({ ...prev, loading: false, data: json }));
    });
};
