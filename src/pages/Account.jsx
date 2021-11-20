import { useState } from "react";
import ProfilePicture from "../images/profile_picture.png";
import { FaPen } from "react-icons/fa";
import Setting from "../components/Setting";

const Account = () => {
  const [follow, setFollow] = useState(false);
  const [answer, setAnswer] = useState(false);
  const [mention, setMention] = useState(false);
  const [launches, setLaunches] = useState(false);
  const [updates, setUpdates] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  return (
    <>
      <div className="bg-white flex items-center p-5 mt-3 rounded-2xl">
        <div className="relative">
          <img
            src={ProfilePicture}
            alt="Profile_picture"
            className="rounded-2xl"
          />
          <span className="bg-white text-green-400 absolute shadow-accountEdit p-2 rounded-lg -bottom-2 -right-2 cursor-pointer">
            <FaPen />
          </span>
        </div>
        <div className="ml-6">
          <h3>Esthera Jackson</h3>
          <p className="text-gray-400">esthera@simmmple.com</p>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="bg-white rounded-2xl p-5 mt-10 w-517 mr-10">
          <h3 className="text-xl">Account Settings</h3>
          <h4 className="text-sm mt-5 text-gray-400 uppercase">account</h4>
          <Setting
            text="Email me when someone follows"
            state={follow}
            setState={setFollow}
          />
          <Setting
            text="Email me when someone answers on my post"
            state={answer}
            setState={setAnswer}
          />
          <Setting
            text="Email me when someone mentions me"
            state={mention}
            setState={setMention}
          />
          <h4 className="text-sm mt-5 text-gray-400 uppercase">application</h4>
          <Setting
            text="New launches and projects"
            state={launches}
            setState={setLaunches}
          />
          <Setting
            text="Monthly product updates"
            state={updates}
            setState={setUpdates}
          />
          <Setting
            text="Subscribe to newsletter"
            state={newsletter}
            setState={setNewsletter}
          />
        </div>
        <div className="bg-white rounded-2xl p-5 mt-10 w-517">
          <h3 className="text-xl">Profile Information</h3>
          <p className="text-gray-400 mt-5 text-sm">
            Hi. I&apos;m Alec Thompson, Decisions: if you cant decide, the
            answer is no. If two equally difficult paths, choose the one more
            painful. In the short term (pain avoidance is creating an illusion
            of equality).
          </p>
          <p className="mt-10 text-gray-500">
            Full Name: <span className="text-gray-400">Alec M.Thompson</span>
          </p>
          <p className="text-gray-500 mt-5">
            Mobile: <span className="text-gray-400">(44) 123 1234 123</span>
          </p>
          <p className="text-gray-500 mt-5">
            Email: <span className="text-gray-400">alecthompson@gmail.com</span>
          </p>
          <p className="text-gray-500 mt-5">
            Location: <span className="text-gray-400">United States</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Account;
