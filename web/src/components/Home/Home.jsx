// eslint-disable-next-line no-unused-vars
import style from "./Home.module.css";
import Register from "../Register/Register";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  const scrolldown = () => {
    const targetElement = document.getElementById("targetDiv");
    targetElement.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={style.hero}>
      <Header />
      <div className={style.heroContent}>
        <div className={style.heading}>
          <p>The internet is</p>
          <p>your Diary</p>
        </div>
        <div className={style.subtext}>
          Gallons is where people blog and share their feelings.
        </div>
        <div className={style.btnContainer}>
          <button className={style.btn} onClick={scrolldown}>
            start for free today
          </button>
        </div>
      </div>
      <div className={style.Logbox} id="targetDiv">
        <Register />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
