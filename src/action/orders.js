import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

const extractError = (error, fallback) =>
  error?.response?.data?.pesan || error?.message || fallback;

const axiosConfig = { withCredentials: true };

export async function createCashOrder(payload) {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/orders`,
      payload,
      axiosConfig
    );
    if (!response.data?.status) {
      throw new Error(response.data?.pesan || "Gagal membuat pesanan");
    }
    return response.data.data;
  } catch (error) {
    throw new Error(extractError(error, "Gagal membuat pesanan"));
  }
}

export async function fetchOrderDetail(orderId) {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/orders/${orderId}`,
      axiosConfig
    );
    if (!response.data?.status) {
      throw new Error(response.data?.pesan || "Gagal mengambil detail pesanan");
    }
    return response.data.data;
  } catch (error) {
    throw new Error(extractError(error, "Gagal mengambil detail pesanan"));
  }
}

export async function fetchOrders(params = {}) {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders`, {
      params,
      ...axiosConfig,
    });
    if (!response.data?.status) {
      throw new Error(response.data?.pesan || "Gagal mengambil daftar pesanan");
    }
    return response.data.data;
  } catch (error) {
    throw new Error(extractError(error, "Gagal mengambil daftar pesanan"));
  }
}

export async function updateOrderStatus(orderId, status) {
  try {
    const response = await axios.patch(
      `${API_BASE_URL}/orders/${orderId}/status`,
      { status },
      axiosConfig
    );
    if (!response.data?.status) {
      throw new Error(
        response.data?.pesan || "Gagal memperbarui status pesanan"
      );
    }
    return response.data.data;
  } catch (error) {
    throw new Error(extractError(error, "Gagal memperbarui status pesanan"));
  }
}
