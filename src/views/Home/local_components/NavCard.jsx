import { Link } from "react-router-dom";

const NavCard = ({ title , buttonTitle, linkTo, icon }) => {
  return (
    <div className="px-10 py-8 md:px-16 md:py-12 mb-8 md:m-0 rounded-[8px] md:rounded-[12px] flex flex-col items-center bg-dark-light_blue_bg ">
      <i className="text-[75px] md:text-[150px] mb-2">{icon}</i>
      <h3 className="text-[20px] md:text-[32px] font-bold mb-8 md:mb-16">{title}</h3>
      <Link to={linkTo} className="p-3 md:px-10 md:py-5 w-full rounded-[5px] md:rounded-[10px] md:text-[24px] font-medium bg-dark-light_blue">{buttonTitle}</Link>
    </div>
  );
};

export default NavCard;
