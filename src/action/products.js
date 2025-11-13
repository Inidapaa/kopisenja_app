import axios from "axios";
const API_URL = "http://localhost:3000/api/products";

export async function getProducts() {
  const res = await axios.get(API_URL, { withCredentials: true });
  return res.data.data;
}

// Untuk menu publik/non-admin
export async function getAllMenu() {
  const res = await axios.get(API_URL);
  return res.data.data;
}

// Helper function to convert File to Base64
function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export async function addProduct(form) {
  let imageBase64 = null;
  if (form.image) {
    imageBase64 = await toBase64(form.image);
  }
  
  const payload = {
    name: form.name,
    description: form.description,
    price: form.price,
    category: form.category || null,
    imageBase64, // Send base64 string
  };
  await axios.post(API_URL, payload, { withCredentials: true });
}

// FIX: hanya kirim field yang perlu update, bentuk JSON
export async function editProduct(id, form) {
  let imageBase64 = null;
  if (form.image) {
    imageBase64 = await toBase64(form.image);
  }
  
  const payload = {
    name: form.name,
    description: form.description,
    price: form.price,
    category: form.category,
    imageBase64, // Send base64 string if new image provided
  };
  
  // Remove imageBase64 from payload if null to avoid overwriting with null
  if (!imageBase64) {
    delete payload.imageBase64;
  }
  
  await axios.put(`${API_URL}/${id}`, payload, { withCredentials: true });
}

export async function deleteProduct(id) {
  await axios.delete(`${API_URL}/${id}`, { withCredentials: true });
}
