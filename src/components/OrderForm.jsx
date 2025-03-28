import React from "react";
const OrderForm = ({
  formData,
  handleChange,
  handleIngredientChange,
  handleAmountChange,
  size,
  thickness,
  toppings,
  errors,
  isValid,
  currentPrice,
  handleSubmit,
}) => {
  return (
    <form className="font-barlow" onSubmit={handleSubmit}>
      <div className="flex my-10">
        <div className="flex flex-col w-1/2 gap-3">
          <p className="text-[22px] sm:text-[20px] font-semibold">
            Boyut Seç
            {errors.size && <span className="text-[#D80027]"> *</span>}
          </p>
          <div className="flex w-full gap-2">
            {size.map((option) => (
              <label
                htmlFor={option.value}
                key={option.value}
                className={`flex items-center justify-center rounded-full bg-[#faf7f2] w-15 h-15 hover:bg-[#fdc913] transition-all duration-170 shadow-md cursor-pointer  ${
                  formData.size === option.value ? "bg-[#fdc913]" : ""
                }`}
              >
                <input
                  id={option.value}
                  type="radio"
                  name="size"
                  value={option.value}
                  checked={formData.size === option.value}
                  onChange={handleChange}
                  className="hidden"
                />
                <span
                  className={`text-[20px] sm:text-[16px] text-[#5F5F5F]  ${
                    formData.size === option.value ? "text-white" : ""
                  }`}
                >
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-1/2 gap-3">
          <label
            className="text-[22px] sm:text-[20px] font-semibold"
            htmlFor="thickness"
          >
            Hamur Seç
            {errors.thickness && <span className="text-[#CE2829]"> *</span>}
          </label>
          <select
            id="thickness"
            name="thickness"
            value={formData.thickness}
            onChange={handleChange}
            className="text-[20px] sm:text-[16px] rounded border-7 border-[#faf7f2] text-[#5F5F5F] focus:outline-none focus:ring-2 focus:ring-[#FDC913] bg-[#faf7f2] py-3 cursor-pointer"
          >
            <option value="">--Hamur Kalınlığı Seç--</option>
            {thickness.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-10">
        <p className="font-semibold text-[22px] sm:text-[20px]">
          Ek Malzemeler
        </p>
        <p className="my-4 text-[20px] sm:text-[16px] text-[#5F5F5F]">
          En Fazla 10 malzeme seçebilirsiniz. 5₺
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {toppings.map((ingredient) => (
            <label key={ingredient} className="flex items-center">
              <input
                type="checkbox"
                id={`ingredient-${ingredient}`}
                name="ingredients"
                checked={formData.ingredients.includes(ingredient)}
                onChange={() => handleIngredientChange(ingredient)}
                className="hover:border-1 hover:transition-colors flex pt-1 items-center text-2xl justify-center font-satisfy appearance-none w-10 h-10 rounded-md bg-[#faf7f2] checked:bg-[#FDC913] checked:after:content-['✓'] transition-all duration-120 shadow-md cursor-pointer"
              />
              <span className="ml-3 font-bold text-[20px] sm:text-[16px] text-[#5F5F5F] cursor-pointer">
                {ingredient}
              </span>
            </label>
          ))}
        </div>
      </div>
      <div className="pb-10 flex-row">
        <label
          className="text-[22px] sm:text-[20px] font-semibold"
          htmlFor="name"
        >
          İsim
          {errors.name && <span className="text-[#D80027]"> *</span>}
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="text-[20px] sm:text-[16px] text-[#5F5F5F] p-2 rounded w-full mt-4 focus:outline-none focus:ring-2 focus:ring-[#FDC913] bg-[#faf7f2]"
          placeholder="Adınızı girin"
          autoComplete="name"
        />
        {errors.name && <span className="text-[#D80027]">{errors.name}</span>}
      </div>

      <div className="pb-10 border-b border-[#D9D9D9]">
        <label
          htmlFor="note"
          className="font-semibold text-[22px] sm:text-[20px]"
        >
          Sipariş Notu
        </label>
        <textarea
          rows="1"
          className="w-full p-4 mt-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FDC913] bg-[#faf7f2]"
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          value={formData.note}
          onChange={handleChange}
          name="note"
          id="note"
        ></textarea>
      </div>

      <div className="mt-4 py-4 flex items-start gap-5 flex-wrap-reverse sm:flex-nowrap ">
        <div className="flex justify-center gap-5 w-full">
          <button
            type="submit"
            className="rounded w-full disabled:bg-gray-400 disabled:cursor-not-allowed text-[18px] font-semibold sm:hidden bg-[#FDC913] hover:bg-[#CE2829] transition-all duration-200 shadow-md "
            disabled={!isValid}
          >
            SİPARİŞ VER
          </button>
          <div className="flex  rounded-[6px] items-center w-full bg-[#faf7f2]">
            <button
              type="button"
              className="w-full py-4 text-black font-bold  hover:bg-[#FDC913] transition duration-150 rounded-l-[6px] cursor-pointer"
              onClick={() => handleAmountChange("decrease")}
              id="decrease"
            >
              -
            </button>

            <div className="text-[22px] font-barlow font-semibold px-7 py-3">
              {formData.amount}
            </div>

            <button
              type="button"
              className="w-full py-4  text-black font-bold hover:bg-[#FDC913] transition duration-150 rounded-r-[6px] cursor-pointer"
              onClick={() => handleAmountChange("increase")}
              id="increase"
            >
              +
            </button>
          </div>
        </div>
        <div className="container w-full sm:w-4/2 ">
          <div className="flex flex-col justify-center w-full py-[40px] px-[50px] rounded-t-[6px] gap-3 bg-[#faf7f2] ">
            <div className="flex justify-between">
              <p className="text-[20px] font-semibold">Sipariş Toplamı</p>
            </div>
            <div className="flex justify-between text-[18px] font-semibold">
              <p>Seçimler</p>
              <span className="ml-auto">
                {formData.ingredients.length * 5}₺
              </span>
            </div>
            <div className="flex justify-between text-[18px] text-[#CE2829] font-semibold">
              <p>Toplam</p>
              <span className="ml-auto">{currentPrice.toFixed(2)}₺</span>
            </div>
          </div>
          <div className="container">
            <button
              type="submit"
              className="hidden sm:block rounded-b-[6px] disabled:bg-gray-400 disabled:cursor-not-allowed text-[18px] font-semibold w-full h-15 bg-[#FDC913] hover:bg-[#CE2829] transition-all duration-200 shadow-md cursor-pointer"
              disabled={!isValid}
            >
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default OrderForm;
