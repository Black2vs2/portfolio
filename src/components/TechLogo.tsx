interface TechLogoProps {
  src: string;
  alt: string;
}

const TechLogo = ({ src, alt }: TechLogoProps) => {
  return <img src={src} alt={alt} className="w-4 h-4" />;
};

export default TechLogo;
