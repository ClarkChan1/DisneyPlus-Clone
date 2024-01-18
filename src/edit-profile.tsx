import "./edit-profile.css";
function EditProfile() {
  return (
    <div className="edit-profile-container">
      <p>Mickey and Friends</p>
      <div className="profile-pic-container">
        <img className="profile-icon" src="images/mickey.png" alt="" />
        <img className="profile-icon" src="images/minnie.png" alt="" />
        <img className="profile-icon" src="images/donald.png" alt="" />
        <img className="profile-icon" src="images/goofie.png" alt="" />
      </div>
    </div>
  );
}
export default EditProfile;
