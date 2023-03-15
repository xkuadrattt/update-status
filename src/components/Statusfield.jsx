import "../assets/css/statusfield.css";
import imgProfile from "../assets/img/imgprofile.webp";

const Statusfield = () => {
  return (
    <section className="statusfield">
      <img src={imgProfile} alt="profile ganteng" />
      <p className="statusfield--status">
        Saya ingin punya gtx 1660 super untuk main Resident Evil 4 Remake
      </p>
      <button className="statusfield--button">...</button>
    </section>
  );
};

export default Statusfield;
