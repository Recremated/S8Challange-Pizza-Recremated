import { useLocation } from "react-router-dom";
import Header from "../components/Header";

const Success = ({ productData }) => {
  const { products } = productData;
  const location = useLocation();
  const { data } = location.state || {};
  const selectedProduct = products.find((product) => product.id === data?.id);
  return (
    <main className="flex flex-col justify-center min-w-[390px] font-barlow text-white bg-[#CE2829]">
      <Header></Header>
      <div className="flex flex-col justify-center items-center px-6 pb-26 mx-auto w-full max-w-6xl mt-8 text-center">
        <div className="flex flex-col gap-0 border-b border-[#FAF7F2] pb-6">
          <p className="font-satisfy text-[27px] sm:text-[32px] text-[#FDC913]">
            lezzetin yolda
          </p>
          <h2 className="font-roboto-condensed text-[72px] sm:text-[92px] font-light tracking-[1.5px]">
            SİPARİŞ ALINDI
          </h2>
        </div>
        <div className="flex flex-col mt-8 items-center">
          <p className="text-[20px] sm:text-[22px] font-semibold">
            {selectedProduct.name}
          </p>
          <div className="flex flex-col text-left w-4/10 mt-8 mb-10 gap-3">
            <p>
              Boyut:
              <span className="font-bold">{data.size}</span>
            </p>
            {selectedProduct?.type === "Pizza" && (
              <p>
                Hamur:<span className="font-bold">{data.thickness}</span>
              </p>
            )}
            <p>
              Ek Malzemeler:
              <span className="font-bold">{data.ingredients.join(", ")}</span>
            </p>
          </div>
          <div className="flex flex-col justify-center py-[40px] px-[50px] rounded-[6px] gap-3 border-1 w-sm ">
            <div className="flex justify-between">
              <p className="text-[20px] font-semibold">Sipariş Toplamı</p>
            </div>
            <div className="flex justify-between text-[18px] font-semibold">
              <p>Seçimler</p>
              <span className="ml-auto">{data.ingredients.length * 5}₺</span>
            </div>
            <div className="flex justify-between text-[18px] font-semibold">
              <p>Adet</p>
              <span className="ml-auto">{data.amount}x</span>
            </div>
            <div className="flex justify-between text-[18px]  font-semibold">
              <p>Toplam</p>
              <span className="ml-auto">{data.totalPrice.toFixed(2)}₺</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Success;
