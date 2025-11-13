import { getProducts, addProduct, editProduct, deleteProduct } from "../../action/products";
import AdminHeader from "../../components/admin_header.jsx";
import NavbarAdmin from "../../components/navbar_admin.jsx";
import matchaImg from "../../assets/matcha1.png";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CrudProducts() {
  const [produk, setProduk] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", price: "", category: "", image: null, description: "" });
  const [editId, setEditId] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [editForm, setEditForm] = useState({ name: "", price: "", category: "", image: null, description: "" });
  const fileInputRef = useRef(null);
  const editFileInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/api/me", { withCredentials: true })
      .then(res => {
        if (!res.data || !res.data.status) navigate("/login");
      })
      .catch(() => navigate("/login"));
  }, [navigate]);

  useEffect(() => {
    fetchProduk();
  }, []);

  const fetchProduk = async () => {
    setLoading(true);
    try {
      const data = await getProducts();
      setProduk(data || []);
      setLoading(false);
    } catch (err) {
      setError("Gagal fetch produk: " + err.message);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProduct(form);
      fetchProduk();
      setForm({ name: "", price: "", category: "", image: null, description: "" });
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProduk(produk.filter(p => p.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const openEdit = (item) => {
    setEditId(item.id);
    setEditForm({
      name: item.name,
      price: item.price,
      category: item.category || "",
      image: null,
      description: item.description || ""
    });
    setShowEdit(true);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await editProduct(editId, editForm);
      setShowEdit(false);
      setEditId(null);
      fetchProduk();
      // Reset file input
      if (editFileInputRef.current) {
        editFileInputRef.current.value = "";
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f6f5] pb-28">
      <AdminHeader />
      <div className="px-4 pt-6 max-w-xl mx-auto">
        <h2 className="font-serif font-bold text-2xl text-[#504B38] mb-4">Tambah Produk</h2>
        <form className="space-y-3 bg-white shadow p-4 rounded-2xl mb-5" onSubmit={handleSubmit}>
          <input type="text" placeholder="Nama Produk" className="input w-full" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
          <input type="text" placeholder="Deskripsi" className="input w-full" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
          <input type="number" placeholder="Harga" className="input w-full" value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} required />
          <select className="input w-full" value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}>
            <option value="">Pilih Kategori</option>
            <option value="Minuman">Minuman</option>
            <option value="Makanan">Makanan</option>
          </select>
          <input type="file" accept="image/*" ref={fileInputRef} className="input w-full" onChange={e => setForm(f => ({ ...f, image: e.target.files[0] }))} />
          <button type="submit" className="bg-[#504B38] text-white px-5 py-2 rounded-full mt-2 font-bold">Tambah</button>
        </form>

        <h2 className="font-serif font-bold text-2xl text-[#504B38] mt-10 mb-4">Daftar Produk</h2>
        {loading ? <div>Loading...</div> : error ? <div className="text-red-600">{error}</div> : (
          <div className="space-y-4">
            {produk.map((item) => (
              <div 
                key={item.id}
                className="flex flex-col items-stretch border border-gray-300 rounded-2xl px-4 py-3 bg-white gap-2 shadow-sm max-w-sm w-full mx-auto"
              >
                <div className="flex gap-3 items-center">
                  <img 
                    src={item.image || matchaImg}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-xl border bg-gray-100"
                  />
                  <div className="flex flex-col gap-0.5 flex-1">
                    <div className="font-bold text-base line-clamp-1">{item.name}</div>
                    <div className="text-xs text-gray-500">{item.category || "-"}</div>
                    <div className="text-xs text-gray-700 line-clamp-2">{item.description}</div>
                    <div className="text-[#504B38] font-bold text-sm mt-1">Rp {parseInt(item.price).toLocaleString()}</div>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <button onClick={() => openEdit(item)} className="w-1/2 py-1 rounded-full text-white bg-yellow-500 font-semibold text-sm">Edit</button>
                  <button onClick={() => handleDelete(item.id)} className="w-1/2 py-1 rounded-full text-white bg-red-500 font-semibold text-sm">Hapus</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Popup Edit */}
      {showEdit && (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <form className="bg-white p-8 rounded-2xl shadow-xl space-y-4 w-full max-w-md" onSubmit={handleEdit}>
            <h3 className="font-bold text-xl mb-2">Edit Produk</h3>
            <input type="text" placeholder="Nama Produk" className="input w-full" value={editForm.name} onChange={e => setEditForm(f => ({ ...f, name: e.target.value }))} required />
            <input type="text" placeholder="Deskripsi" className="input w-full" value={editForm.description} onChange={e => setEditForm(f => ({ ...f, description: e.target.value }))} />
            <input type="number" placeholder="Harga" className="input w-full" value={editForm.price} onChange={e => setEditForm(f => ({ ...f, price: e.target.value }))} required />
            <select className="input w-full" value={editForm.category} onChange={e => setEditForm(f => ({ ...f, category: e.target.value }))}>
              <option value="">Pilih Kategori</option>
              <option value="Minuman">Minuman</option>
              <option value="Makanan">Makanan</option>
            </select>
            <input type="file" accept="image/*" ref={editFileInputRef} className="input w-full" onChange={e => setEditForm(f => ({ ...f, image: e.target.files[0] }))} />
            <div className="flex gap-2">
              <button type="submit" className="bg-[#504B38] text-white px-4 py-2 rounded-full font-bold">Simpan</button>
              <button type="button" className="bg-gray-400 text-white px-4 py-2 rounded-full font-bold" onClick={() => setShowEdit(false)}>Batal</button>
            </div>
          </form>
        </div>
      )}
      <NavbarAdmin />
    </div>
  );
}
export default CrudProducts;
