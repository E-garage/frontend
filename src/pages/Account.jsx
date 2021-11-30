import { useState } from "react";
import ProfilePicture from "../images/profile_picture.png";
import { FaPen } from "react-icons/fa";
import Setting from "../components/Setting";

const Account = () => {
  const [followed, setFollowed] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [mentioned, setMentioned] = useState(false);
  const [launched, setLaunched] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const settings = [
    {
      header: "account",
      items: [
        {
          text: "Email me when someone follows",
          checked: followed,
          setChecked: setFollowed,
        },
        {
          text: "Email me when someone answers on my post",
          checked: answered,
          setChecked: setAnswered,
        },
        {
          text: "Email me when someone mentions me",
          checked: mentioned,
          setChecked: setMentioned,
        },
      ],
    },
    {
      header: "application",
      items: [
        {
          text: "New launches and projects",
          checked: launched,
          setChecked: setLaunched,
        },
        {
          text: "Monthly product updates",
          checked: updated,
          setChecked: setUpdated,
        },
        {
          text: "Subscribe to newsletter",
          checked: subscribed,
          setChecked: setSubscribed,
        },
      ],
    },
  ];

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
          {settings.map((setting, index) => (
            <div key={index}>
              <h4 className="text-sm mt-5 text-gray-400 uppercase">
                {setting.header}
              </h4>
              {setting.items.map((item, index) => (
                <Setting
                  key={index}
                  text={item.text}
                  checked={item.checked}
                  setChecked={item.setChecked}
                />
              ))}
            </div>
          ))}
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
