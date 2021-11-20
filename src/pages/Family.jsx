import FamilyCard from "../components/FamilyCard";
import { AiOutlinePlus } from "react-icons/ai";

const Family = () => (
  <div className="grid md:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-y-16 mt-20">
    <FamilyCard />
    <FamilyCard />
    <FamilyCard />
    <FamilyCard />
    <FamilyCard />
    <div className="bg-white px-10 py-5 w-96 h-72 md:w-auto md:h-auto rounded-xl">
      <div className="flex flex-col justify-center items-center border border-black rounded-2xl h-full cursor-pointer">
        <AiOutlinePlus className="text-3xl" />
        <p>Create your family</p>
      </div>
    </div>
  </div>
);

export default Family;
