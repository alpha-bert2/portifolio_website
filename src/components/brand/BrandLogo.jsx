import logo from "../../assets/logo-portfolio.png";

function BrandLogo({ variant = "nav" }) {
  return (
    <img
      className={`phori-logo phori-logo-${variant}`}
      src={logo}
      alt=""
      aria-hidden="true"
    />
  );
}

export default BrandLogo;
