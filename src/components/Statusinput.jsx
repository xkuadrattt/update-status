import imgProfile from "../assets/img/imgprofile.webp";
import "../assets/css/statusinput.css";

const Statusinput = () => {
  return (
    <div className="statusinput" role="section input">
      <img src={imgProfile} alt="profile" className="statusinput--img" />
      <textarea name="status"></textarea>
    </div>
  );
};

export default Statusinput;
