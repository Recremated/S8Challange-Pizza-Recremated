const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-[#1A1A1A] text-white font-barlow">
      <div className="flex flex-col w-full pt-10">
        <div className="flex justify-center mx-10 md:mx-30  mb-10 flex-wrap gap-5 xl:justify-between">
          <div className="flex gap-5 flex-wrap justify-center md:justify-start">
            <div className="flex flex-col gap-4">
              <img
                className="max-w-[150px]"
                src="../images/iteration-2-images/footer/logo-footer.svg"
                alt="Logo"
              ></img>
              <div className="flex items-center">
                <img
                  className="w-7 h-7"
                  src="../images/iteration-2-images/footer/icons/icon-1.png"
                  alt="Location"
                ></img>
                <p className="ml-2">
                  341 Londonderry Road,<br></br> Istanbul Turkiye
                </p>
              </div>
              <div className="flex items-center">
                <img
                  className="w-7 h-7"
                  src="../images/iteration-2-images/footer/icons/icon-2.png"
                  alt="Location"
                ></img>
                <p className="ml-2">aciktim@teknolojikyemekler.com</p>
              </div>
              <div className="flex items-center">
                <img
                  className="w-7 h-7"
                  src="../images/iteration-2-images/footer/icons/icon-3.png"
                  alt="Location"
                ></img>
                <p className="ml-2">+90 216 123 45 67</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Siccacik Menuler</p>
              <div className="flex flex-col gap-1">
                <p>Terminal Pizza</p>
                <p>5 kisilik Hackathlon Pizza</p>
                <p>use Effect Tavukli Pizza</p>
                <p>Beyaz Console Frosty</p>
                <p>Testler Gecti Mutlu Burger</p>
                <p>Position Absolute Aci Burger</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p>Instagram</p>
            <div className="grid gap-5 grid-cols-3  ">
              <div className=" flex items-center justify-center text-white font-bold">
                <img
                  className="aspect-1/1 w-25 sm:w-30 "
                  src="../images/iteration-2-images/footer/insta/li-0.png"
                  alt="Location"
                ></img>
              </div>
              <div className="items-center justify-center text-white font-bold flex">
                <img
                  className="aspect-1/1 w-25 sm:w-30 "
                  src="../images/iteration-2-images/footer/insta/li-1.png"
                  alt="Location"
                ></img>
              </div>
              <div className="items-center justify-center text-white font-bold flex">
                <img
                  className="aspect-1/1 w-25 sm:w-30 "
                  src="../images/iteration-2-images/footer/insta/li-2.png"
                  alt="Location"
                ></img>
              </div>
              <div className="items-center justify-center text-white font-bold flex">
                <img
                  className="aspect-1/1 w-25 sm:w-30 "
                  src="../images/iteration-2-images/footer/insta/li-3.png"
                  alt="Location"
                ></img>
              </div>
              <div className=" items-center justify-center text-white font-bold flex">
                <img
                  className="aspect-1/1 w-25 sm:w-30 "
                  src="../images/iteration-2-images/footer/insta/li-4.png"
                  alt="Location"
                ></img>
              </div>
              <div className=" items-center justify-center text-white font-bold flex">
                <img
                  className="aspect-1/1 w-25 sm:w-30 "
                  src="../images/iteration-2-images/footer/insta/li-5.png"
                  alt="Location"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between border-t border-[#D9D9D9] h-10 items-center px-30">
          <p>@2023 Teknolojik Yemekler.</p>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
