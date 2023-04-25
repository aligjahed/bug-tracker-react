import NavCard from "./local_components/NavCard";
import { BsPersonFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi2";

const Home = () => {
  return (
    <div className="bg-container px-7 py-16 lg:py-0 flex f-ac-jc text-center text-dark-white f-ac-jc bg-dark-dark_blue">
      <div className="flex flex-col justify-evenly  max-w-[1120px] ">
        <div>
          <h1 className="text-dark-light_blue font-black text-[25px] md:text-[40px] mb-6 md:mb-0">
            BugTracker
          </h1>
        </div>
        <section className="mb-12">
          <h3 className="text-[20px] md:text-[64px] font-medium mb-2">
            <span className="text-dark-light_blue">Manage your team</span> ,
            projects and clients with BugTracker
          </h3>
          <p className="font-thin text-[14px] md:text-[24px]">
            BugTracker provides you with tools you need to manage issues for
            your projects
          </p>
        </section>
        <section className="md:flex  justify-evenly md:mb-8">
          <NavCard
            title={"Are you a manager?"}
            buttonTitle={"Login/Create your team"}
            icon={<BsPersonFill />}
          />
          <NavCard
            title={"Are you an employee?"}
            buttonTitle={"Login"}
            icon={<HiUserGroup />}
          />
        </section>
        <div>
          <p className="text-sm md:text-xl">
            Ali G.Jahed | 2023 -{" "}
            <a
              href="https://github.com/aligjahed"
              className="text-dark-light_blue"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
