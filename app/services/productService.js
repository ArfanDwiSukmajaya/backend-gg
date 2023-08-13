import Video from "../models/video.js";
import { v4 as uuid } from "uuid";

// create product function
export const createProduct = async (productData) => {
  const product = {
    productID: uuid(),
    videoID: productData.videoID,
    title: productData.title,
    price: productData.price,
    link: productData.link,
  };

  // cek if videoID exist from video collection
  const cekVideo = await Video.findOne({ videoID: productData.videoID });

  if (!cekVideo) {
    return { status: 400, message: "Video not found" };
  }
  try {
    // push product to video collection
    cekVideo.products.push(product);
    return await cekVideo.save();
  } catch (err) {
    throw new Error(err);
  }
};

// get product function by videoID
export const getProductByVideoID = async (videoID) => {
  try {
    const products = await Video.find({ videoID: videoID }, { products: 1, _id: 0 });
    return products;
  } catch (err) {
    throw new Error(err);
  }
};

// detele product function by productID;
export const deleteProductByProductID = async (productID) => {
  try {
    const cekProduct = await Video.findOne({ products: { $elemMatch: { productID: productID } } });
    if (!cekProduct) {
      return { status: 400, message: "Product not found" };
    }
    // const product = Video.products.find((product) => product.productID === productID);
    const productIndex = cekProduct.products.findIndex((product) => product.productID === productID);
    cekProduct.products.splice(productIndex, 1);
    return await cekProduct.save();
  } catch (err) {
    throw new Error(err);
  }
};

// update product function by productID
export const updateProduct = async (productID, productData) => {
  try {
    const cekProduct = await Video.findOne({ products: { $elemMatch: { productID: productID } } });
    if (!cekProduct) {
      return { status: 400, message: "Product not found" };
    }
    const productIndex = cekProduct.products.findIndex((product) => product.productID === productID);
    cekProduct.products[productIndex].title = productData.title;
    cekProduct.products[productIndex].price = productData.price;
    cekProduct.products[productIndex].link = productData.link;
    return await cekProduct.save();
  } catch (err) {
    throw new Error(err);
  }
};
