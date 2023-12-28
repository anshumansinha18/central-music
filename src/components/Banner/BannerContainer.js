function BannerContainer({ children }) {
  return (
    <div
      className="w-[90%] bg-no-repeat mx-auto bg-cover rounded-lg text-white mt-[-100px]"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/banner-img.png)`,
      }}
    >
      {children}
    </div>
  );
}

export default BannerContainer;
