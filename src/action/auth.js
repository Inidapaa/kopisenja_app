import axios from "axios";

export async function register(email, password) {
  const res = await axios.post("http://localhost:3000/api/register", {
    email,
    password
  });
  if (!res.data || res.data.status === false) {
    throw new Error(res.data?.pesan || "Gagal registrasi");
  }
  return res.data;
}

export async function loginUser(email, password) {
  const res = await axios.post("http://localhost:3000/api/login", {
    email,
    password
  }, { withCredentials: true });
  if (!res.data || res.data.status === false) {
    throw new Error(res.data?.pesan || "Gagal login");
  }
  return res.data;
}
