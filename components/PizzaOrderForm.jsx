import React from "react";
const PizzaOrderForm = ({
  formData,
  handleChange,
  handleIngredientChange,
  handleAmountChange,
  sizeOptions,
  thicknessOptions,
  selection,
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
          <div className="flex w-full gap-1">
            {sizeOptions.items.map((option) => (
              <label
                htmlFor={option.value}
                key={option.value}
                className={`flex items-center justify-center rounded-full bg-[#faf7f2] w-15 h-15 hover:bg-[#e8e1d9] ${
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
            className="text-[20px] sm:text-[16px] rounded border-7 border-[#faf7f2] text-[#5F5F5F] focus:outline-none focus:ring-2 focus:ring-[#FDC913] bg-[#faf7f2] py-3"
          >
            <option value="">--Hamur Kalınlığı Seç--</option>
            {thicknessOptions.items.map((option) => (
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
          {selection.map((ingredient) => (
            <label key={ingredient}>
              <input
                type="checkbox"
                id={`ingredient-${ingredient}`}
                name="ingredients"
                checked={formData.ingredients.includes(ingredient)}
                onChange={() => handleIngredientChange(ingredient)}
              />
              <span className="ml-3 font-bold text-[20px] sm:text-[16px] text-[#5F5F5F]">
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
          className="text-[20px] sm:text-[16px] text-[#5F5F5F] p-2 border border-gray-300 rounded w-full mt-4 focus:outline-none focus:ring-2 focus:ring-[#FDC913]"
          placeholder="Adınızı girin"
          autoComplete="name"
        />
        {errors.name && <span className="text-[#D80027]">{errors.name}</span>}
      </div>

      <div className="pb-10 border-b border-[#5F5F5F]">
        <label
          htmlFor="note"
          className="font-semibold text-[22px] sm:text-[20px]"
        >
          Sipariş Notu
        </label>
        <textarea
          rows="1"
          className="w-full p-4 mt-4 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FDC913]"
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          value={formData.note}
          onChange={handleChange}
          name="note"
          id="note"
        ></textarea>
      </div>

      <div className="mt-4 py-4 flex flex-col items-center gap-5">
        <div className="flex flex-col justify-center w-full p-4 border border-[#5F5F5F] rounded-[6px] gap-3">
          <div className="flex justify-between">
            <p className="text-[20px] font-semibold">Sipariş Toplamı</p>
          </div>
          <div className="flex justify-between text-[18px] font-semibold">
            <p>Seçimler</p>
            <span className="ml-auto">{formData.ingredients.length * 5}₺</span>
          </div>
          <div className="flex justify-between text-[18px] text-[#CE2829] font-semibold">
            <p>Toplam</p>
            <span className="ml-auto">{currentPrice.toFixed(2)}₺</span>
          </div>
        </div>

        <div className="flex w-full justify-center gap-5">
          <button
            type="submit"
            className="bg-[#FDC913] rounded px-6 hover:bg-[#CE2829] disabled:bg-gray-400 disabled:cursor-not-allowed text-[18px] font-semibold"
            disabled={!isValid}
          >
            SİPARİŞ VER
          </button>
          <div className="flex border rounded-[6px] items-center overflow-hidden">
            <button
              type="button"
              className="px-5 py-4 bg-[#FDC913] text-black font-bold  hover:bg-red-600 transition duration-200"
              onClick={() => handleAmountChange("decrease")}
              id="decrease"
            >
              -
            </button>

            <div className="text-[22px] font-barlow font-semibold mx-7">
              {formData.amount}
            </div>

            <button
              type="button"
              className="px-5 py-4 bg-[#FDC913] text-black font-bold hover:bg-red-600 transition duration-200"
              onClick={() => handleAmountChange("increase")}
              id="increase"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PizzaOrderForm;
