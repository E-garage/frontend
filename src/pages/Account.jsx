import { useState, useEffect, useRef } from "react";
import ProfilePicture from "../images/profile_picture.png";
import { FaPen } from "react-icons/fa";
import Setting from "../components/Account/Setting";
import { connect } from "react-redux";
import { setUser } from "../actions/authActions";
import Loader from "react-loader-spinner";
import EditAccount from '../components/Account/EditAccount'

const Account = ({ user, setUser }) => {
  const [followed, setFollowed] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [mentioned, setMentioned] = useState(false);
  const [launched, setLaunched] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [image, setImage] = useState(ProfilePicture)
  const uploadButton = useRef()

  useEffect(() => {
    setUser({ username: "Darth Vader", email: "DarthVader@gmail.com" });
  }, []);

  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleUpload = () => {
    uploadButton.current.click();
  };

  const settings = {
    account: [
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
    application: [
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
  };

  if (!user) {
    return (
      <div className="mx-auto mt-20">
        <Loader type="TailSpin" color="#3730A3" height={100} width={100} />
      </div>
    );
  }

  return (
    <>
      <div className="bg-white flex items-center p-5 mt-3 rounded-2xl">
        <div className="relative">
          <img
            src={image}
            alt="Profile_picture"
            className="rounded-2xl w-20 h-20"
          />
          <input
            type="file"
            ref={uploadButton}
            name="thumbnail"
            onChange={onImageChange}
            className="mb-5 hidden"
            accept="image/*"
          />
          <button className="bg-white text-green-400 absolute shadow-accountEdit p-2 rounded-lg -bottom-2 -right-2 cursor-pointer" onClick={handleUpload}>
            <FaPen />
          </button>
        </div>
        <div className="ml-6">
          <h3>{user.username}</h3>
          <p className="text-gray-400">{user.email}</p>
          <EditAccount />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="bg-white rounded-2xl p-5 mt-10 w-517 mr-10">
          <h3 className="text-xl">Account Settings</h3>
          <h4 className="text-sm mt-5 text-gray-400 uppercase">account</h4>
          {settings.account.map((setting, index) => (
            <Setting
              key={index}
              text={setting.text}
              checked={setting.checked}
              setChecked={setting.setChecked}
            />
          ))}
          <h4 className="text-sm mt-5 text-gray-400 uppercase">application</h4>
          {settings.application.map((setting, index) => (
            <Setting
              key={index}
              text={setting.text}
              checked={setting.checked}
              setChecked={setting.setChecked}
            />
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

const mapStateToProps = state => {
  const { user } = state.authReducer;
  return { user };
};

export default connect(mapStateToProps, { setUser })(Account);
