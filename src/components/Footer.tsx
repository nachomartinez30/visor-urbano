import Image from "next/image";
import visor_urbano_logo from "../assets/images/logo_visor.svg";
import boomergang_logo from "../assets/images/logo_bloomberg.svg";
import jalisco_logo from "../assets/images/logo_jal.svg";
/* redes sociales */
import facebook_logo from "../assets/images/facebook.svg";
import twitter_logo from "../assets/images/twitter.svg";
import instagram_logo from "../assets/images/instagram.svg";
import linkedin_logo from "../assets/images/linkedin.png";

export const Footer = () => {
  return (
    <div className="footerBg h-[323.03px]">
      <div className="grid grid-cols-3 gap-4">
        <Image
          className="mx-auto mt-11"
          src={visor_urbano_logo}
          alt="visor_urbano_logo"
          width={222}
          height={99.48}
        />
        <Image
          className="mx-auto mt-11"
          src={boomergang_logo}
          alt="boomergang_logo"
          width={222}
          height={99.48}
        />
        <Image
          className="mx-auto mt-11"
          src={jalisco_logo}
          alt="jalisco_logo"
          width={222}
          height={99.48}
        />
        <div className="grid grid-flow-col">
          <Image
            alt="facebook_logo_logo"
            src={facebook_logo}
            width={18.45}
            height={18.45}
          />
          <Image
            alt="twitter_logo"
            src={twitter_logo}
            width={18.45}
            height={18.45}
          />
          <Image
            alt="instagram_logo"
            src={instagram_logo}
            width={18.45}
            height={18.45}
          />
          <Image
            alt="linkedin_logo"
            src={linkedin_logo}
            width={18.45}
            height={18.45}
          />
        </div>
        <div className="">
          <h3 className="text-VerdeTextos">AVISO DE PRIVACIDAD</h3>
        </div>
      </div>
    </div>
  );
};
