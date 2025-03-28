const Footer = ({ productData }) => {
  const { instagramImages } = productData;
  return (
    <footer className="flex flex-col bg-[#1A1A1A] text-white font-barlow text-[18px] ">
      <div className="px-5 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-8 mb-10">
        <div className="flex gap-8 justify-center flex-col ">
          <img
            className="max-w-[190px]"
            src="../images/iteration-2-images/footer/logo-footer.svg"
          ></img>
          <div className="flex gap-3 items-center">
            <img
              className="w-[28px] h-[28px]"
              src="../images/iteration-2-images/footer/icons/icon-1.png"
            ></img>
            <p>
              341 Londonderry Road,
              <br />
              Istanbul Türkiye
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <img
              className="w-[28px] h-[28px]"
              src="../images/iteration-2-images/footer/icons/icon-2.png"
            ></img>
            <p>aciktim@teknolojikyemekler.com</p>
          </div>
          <div className="flex gap-3 items-center">
            <img
              className="w-[28px] h-[28px]"
              src="../images/iteration-2-images/footer/icons/icon-3.png"
            ></img>
            <p>+90 216 123 45 67</p>
          </div>
        </div>
        <div className="flex gap-3 justify-center flex-col ">
          <p className="text-[24px] font-medium ">Hot Menu</p>
          <p>Terminal Pizza</p>
          <p>5 Kişilik Hackathlon Pizza</p>
          <p>useEffect Tavuklu Pizza</p>
          <p>Beyaz Console Frosty</p>
          <p>Testler Geçti Mutlu Burger</p>
          <p>Position Absolute Acı Burger</p>
        </div>
        <div className="flex justify-center flex-col  ">
          <div className="flex flex-col justify-center gap-3">
            <p className="text-[24px] font-medium ">Instagram</p>
            <div className="grid gap-5 grid-cols-3">
              {instagramImages.map((name, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center text-white font-bold"
                >
                  <img
                    className="aspect-1/1 w-25 sm:w-30"
                    src={`../images/iteration-2-images/footer/insta/${name}.png`}
                    alt={`Instagram image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex border-t-1 border-[#292929]">
        <div className="px-5 max-w-6xl mx-auto flex gap-4 my-8 w-full justify-between">
          <p>© 2023 Teknolojik Yemekler.</p>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
