import Switch from "react-switch";

const Setting = ({ text, checked, setChecked }) => (
  <div className="flex mt-5 items-center">
    <Switch
      uncheckedIcon={false}
      checkedIcon={false}
      checked={checked}
      onChange={() => setChecked(prevCheck => !prevCheck)}
      onColor="#000"
      offColor="#E2E8F0"
      className="react-switch"
      width={36}
      height={18}
    />
    <p className="text-gray-400 ml-3 text-sm">{text}</p>
  </div>
);

export default Setting;