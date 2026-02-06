const fetchProducts = async () => {
  return fetch("http://localhost:3001/products");
};

const createProduct = async (newProduct) => {
  const response = await fetch("http://localhost:3001/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });

  if (!response.ok) {
    throw new Error("Failed to create product");
  }

  return response.json();
};

export { fetchProducts, createProduct };
