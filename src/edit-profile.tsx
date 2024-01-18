import "./edit-profile.css";
import { Dispatch, SetStateAction } from "react";
interface Props {
  updateProfilePic: Dispatch<SetStateAction<string>>;
}
function EditProfile(props: Props) {
  return (
    <div className="edit-profile-container">
      <p>Mickey and Friends</p>
      <div className="profile-pic-container">
        <img
          className="profile-icon"
          src="images/mickey.png"
          alt=""
          onClick={() => {
            props.updateProfilePic("images/mickey.png");
          }}
        />
        <img
          className="profile-icon"
          src="images/minnie.png"
          alt=""
          onClick={() => {
            props.updateProfilePic("images/minnie.png");
          }}
        />
        <img
          className="profile-icon"
          src="images/donald.png"
          alt=""
          onClick={() => {
            props.updateProfilePic("images/donald.png");
          }}
        />
        <img
          className="profile-icon"
          src="images/goofie.png"
          alt=""
          onClick={() => {
            props.updateProfilePic("images/goofie.png");
          }}
        />
      </div>
    </div>
  );
}
export default EditProfile;
