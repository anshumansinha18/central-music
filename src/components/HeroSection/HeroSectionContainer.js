export default function HeroSectionContainer({ children }) {
  return (
    <div
      className="hero-img text-white bg-center bg-cover h-[80vh]"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/hero-img.png)`,
      }}
    >
      {children}
    </div>
  );
}
