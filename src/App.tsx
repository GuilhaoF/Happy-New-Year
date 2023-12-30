import { useEffect, useState } from "react";
import "./index.css";
import Modal from "./components/Modal";

function App() {
  const [leftdays, setLeftDays] = useState<number>(0);
  const [lefthr, setLefthr] = useState<number>(0);
  const [leftmin, setLeftMins] = useState<number>(0);
  const [leftsec, setLeftSec] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const newyr = new Date("January 1, 2024 00:00:00");
      const newyeartime = newyr.getTime();
      const todaytm = new Date();
      const todaytime = todaytm.getTime();
      const timeleft = newyeartime - todaytime;
      setLeftDays(Math.floor(timeleft / (24 * 60 * 60 * 1000)));
      setLefthr(23 - todaytm.getHours());
      setLeftMins(59 - todaytm.getMinutes());
      setLeftSec(59 - todaytm.getSeconds());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  if (leftdays <= -1) {
    return (
      <div className="Message-App">
        <h1>Happy New Year!!! 2024</h1>
      </div>
    );
  }

  return (
    <>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="App">
        {showModal ? (
          <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
        ) : (
          <>
            <h1>Carregando...! 2024 🎉🔥</h1>
            <section>
              <div className="wrapper">
                <h2>{leftdays}</h2>
                <h6>Days</h6>
              </div>
              <div className="wrapper">
                <h2>{lefthr}</h2>
                <h6>Hours</h6>
              </div>
              <div className="wrapper">
                <h2>{leftmin}</h2>
                <h6>Minutes</h6>
              </div>
              <div className="wrapper">
                <h2>{leftsec}</h2>
                <h6>Seconds</h6>
              </div>
            </section>

            <a href="http://portifolio-luis-guilhaof.vercel.app">
              Created by Luis Felipe ❤️
            </a>
          </>
        )}
      </div>
    </>
  );
}

export default App;
