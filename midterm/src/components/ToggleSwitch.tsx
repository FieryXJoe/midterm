import { ChangeEventHandler } from "react";

interface Props{
  onToggle: ChangeEventHandler
}
const ToggleSwitch = (props: Props) => {
  return (
    <>
      <label className="switch">
        <input type="checkbox" onChange={props.onToggle} />
        <span className="slider round"></span>
      </label>
    </>
  );
};

export default ToggleSwitch;
