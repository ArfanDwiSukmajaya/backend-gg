import { createProduct, getProductByVideoID, deleteProductByProductID, updateProduct } from "../services/productService.js";

export const createProductController = async (req, res) => {
  const productData = req.body;
  try {
    const product = await createProduct(productData);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// controller function for getAllProduct
// export const getAllProductController = async (req, res) => {
//   try {
//     const products = await getAllProduct();
//     res.status(200).json(products);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// controller function for getProductByVideoID
export const getProductByVideoIDController = async (req, res) => {
  try {
    const products = await getProductByVideoID(req.params.videoID);
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// deleteProductByProductIDController
export const deleteProductByProductIDController = async (req, res) => {
  try {
    const product = await deleteProductByProductID(req.params.productID);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// updateProductController
export const updateProductController = async (req, res) => {
  const productID = req.params.productID;
  const productData = req.body;
  try {
    const product = await updateProduct(productID, productData);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
