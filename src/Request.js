const Request = {
  getProducts: async () => {
    const response = await fetch('https://fakestoreapi.com/products/');
    return await response.json();
  },
};

export default Request;
