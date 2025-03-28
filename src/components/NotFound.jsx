import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-red-500">404</h1>
        <p className="text-2xl mt-4 text-gray-700">
          Üzgünüz, aradığınız sayfa bulunamadı.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 cursor-pointer"
        >
          Ana Sayfaya Dön
        </button>
      </div>
    </div>
  );
}
