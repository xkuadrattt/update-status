import "../assets/css/statusfield.css";
import imgProfile from "../assets/img/imgprofile.webp";
import Toggleeditdelete from "./Toggleeditdelete";

const Statusfield = () => {
  return (
    <section className="statusfield">
      <img src={imgProfile} alt="profile ganteng" />
      <p className="statusfield--status">
        Saya ingin punya gtx 1660 super untuk main Resident Evil 4 Remake
      </p>
      <button className="statusfield--button">...</button>
      <Toggleeditdelete />
    </section>
  );
};

export default Statusfield;
