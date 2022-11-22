/* eslint-disable jsx-a11y/iframe-has-title */
import "./App.css";
import { useState, useEffect } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import photoData from "./photodata";
import LoveLetter from "./LoveLetter";
import lettersData from "./LettersData";
import DescribeNkem from "./DescribeNkem";
import moment from "moment";
import { motion } from "framer-motion";

moment().format();

function App() {
  const [photos, setPhotos] = useState(photoData);
  const [letters, setLetters] = useState(false);
  const [photoCounter, setPhotoCounter] = useState(0);
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [theme, setTheme] = useState(true);
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const [windowResize, setWindowResize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowResize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const correctPassword = "Nkem2021!";

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickCoverPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmitPassword = (event) => {
    event.preventDefault();
    if (values.password === correctPassword) {
      setLetters(true);
      setPasswordValidation(false);
    } else setPasswordValidation(true);
  };

  const lockNotes = () => {
    setLetters(false);
    setValues((values.password = ""));
  };

  const inputColor = {
    color: letters ? "white" : "",
  };

  const checkCounter = (number) => {
    if (number > photos.length - 1) {
      return 0;
    }

    if (number < 0) {
      return photos.length - 1;
    }
    return number;
  };

  const handleNext = () => {
    setPhotoCounter((counter) => {
      let newIndex = Math.floor(Math.random() * (photoData.length - 0 + 1)) + 0;
      return checkCounter(newIndex);
    });
  };

  const handlePrevious = () => {
    setPhotoCounter((counter) => {
      let newIndex = Math.floor(Math.random() * (photoData.length - 0 + 1)) + 0;
      return checkCounter(newIndex);
    });
  };

  const getRadomnNumer = () => {};

  const playListStyle = {
    width: "100%",
    maxWidth: "660px",
    overflow: "hidden",
    background: "transparent",
  };

  const handleShowMoon = () => {
    setTheme(false);
    document.body.classList.remove("bright");
  };

  const handleShowSun = () => {
    setTheme(true);
    document.body.classList.add("bright");
  };

  return (
    <div className={theme ? "App bright" : "App"}>
      {windowResize < 650 ? (
        <>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: -1500 }}
            transition={{ duration: 2, delay: 2, bounce: 1 }}
            className="overlay"
          >
            <h3>
              Go shawty! <br /> It's your birthday 🥳!
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 3 }}
            className="containerss"
          >
            <nav>
              <div className="logo">
                <p>Nkemakolam ❤️</p>
              </div>

              <div className="birthday-date">
                <p>{moment().format("MMM Do YY")}</p>
              </div>

              <div className="theme">
                {theme ? (
                  <span onClick={handleShowMoon}>
                    <img
                      src="https://img.icons8.com/color/48/null/summer--v1.png"
                      alt="sun"
                    />
                  </span>
                ) : (
                  <span onClick={handleShowSun}>
                    <img
                      src="https://img.icons8.com/plasticine/100/null/bright-moon.png"
                      alt="moon"
                    />
                  </span>
                )}
              </div>
            </nav>

            <div className="divider"></div>

            <div className="love-note">
              {/* <p className="title">Words are not enough, but watch me try</p> */}

              <h3 className="salutation">Dear Nkem</h3>
              <p className="content">
                Before I proceed, I’d like to reiterate that I can’t help
                falling in love with you. Now that I have reiterated that, back
                to why you're reading this.
                <br /> <br />
                My baby girl, today marks your third birthday with me in your
                life (the third of many). Do you recall your first birthday? We
                were bare “strangers,” still experimenting with this
                relationship of a thing. Two years down the line, two birthdays,
                and two anniversaries, now look at us celebrating your
                twenty-third birthday together.
                <br /> <br />I am so proud of how far you have come and am
                excited about what the future holds for you.
                <br /> <br />
                Thank you for being the best partner one could ever have. You
                tick all the boxes for me. I am always in awe of your beauty.
                Your brilliance is so beautiful to behold. Thank you for giving
                being my peace. Thank you for teaching me how to love you. Thank
                you for being kind and loving and caring and sweet to me. Having
                you in my corner is a privilege I do not take for granted.
                <br /> <br />I am proud to have witnessed your exponential
                growth in the past year. You are an inspiration to me and a
                whole lot of other people.
                <br /> <br />
                In this new year, I pray that God continues to shine his light
                on you and bless the work of your hands. Twenty-four is your
                best year yet.
                <br /> <br />
                Today is your day. You only get to be twenty-three on the
                twenty-third today. Have fun, have a blast, I dey for you!
                <br /> <br />I love you, baby girl. Now and always.
              </p>
              <h3 className="signature">
                Yours in love <br /> Ajibola
              </h3>
            </div>

            <div className="photo-section">
              <p className="title photos">
                Change your style, another style 📸
              </p>

              <p className="content">
                Thank you for bringing out the photographer in me 😂. Here are
                some of my favourite pictures of you. E be like say my face show
                for some 😅
                <br /> <br />
                <b>PS:</b> I know that you will come for my head because of some
                of thes pictures 😂. Please know that the pictures can be
                changed on request 😅
              </p>

              <div className="photo-reel">
                <div className="photo carousel">
                  <div className="carousel-container">
                    <div className="arrows">
                      <span className="arrow left" onClick={handlePrevious}>
                        <BsFillArrowLeftCircleFill size={30} />
                      </span>
                      <span className="arrow right" onClick={handleNext}>
                        <BsFillArrowRightCircleFill size={30} />
                      </span>
                    </div>

                    <div className="photo-holder">
                      <img src={photos[photoCounter].image} alt="" />
                    </div>
                  </div>
                </div>

                <div className="subtext">
                  <p>{photos[photoCounter].text}</p>
                </div>
              </div>
            </div>

            <div className="playlist-section">
              <p className="title">Oya shake body 💃🏻</p>
              <p className="content">
                Here is a playlist of some of our favorite songs + other songs I
                think you'll enjoy. Let me know what you think.
              </p>
              <iframe
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                frameBorder="0"
                height="450"
                style={playListStyle}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src="https://embed.music.apple.com/ng/playlist/with-love-from-jibs/pl.u-MDAWvR9FAbJKLXl"
              ></iframe>
            </div>

            <div className="dear-nkem">
              <p className="title">Dear Nkem... 💌</p>

              <p className="view-letters">
                What's better than the breakfast in bed on a lazy Saturday
                morning ? Waking up to a sweet morning message (and breakfast in
                bed). <br />
                <br />
                Here are some of my morning messages to you. I promise to send
                more this new year 🤞🏿
                <br />
                <br />
                Password Hint: "remember this"
              </p>

              {!letters && (
                <form onSubmit={handleSubmitPassword}>
                  <div className="password-container">
                    <input
                      className="password"
                      type={values.showPassword ? "text" : "password"}
                      onChange={handlePasswordChange("password")}
                      value={values.password}
                      style={inputColor}
                      placeholder="Enter password..."
                    />
                    <div className="password-boolean">
                      {values.showPassword ? (
                        <span
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          <AiFillEye color={!theme ? "white" : "black"} />
                        </span>
                      ) : (
                        <span onClick={handleClickCoverPassword}>
                          <AiFillEyeInvisible
                            color={!theme ? "white" : "black"}
                          />
                        </span>
                      )}
                    </div>
                  </div>
                  <button type="submit">Submit</button>
                </form>
              )}

              {passwordValidation && (
                <p className="password-validation">
                  The password is not passwording 🌚
                </p>
              )}

              {letters && (
                <button onClick={lockNotes}>Password lock notes 👀 </button>
              )}

              {letters && (
                <>
                  {lettersData.map((item) => {
                    return (
                      <LoveLetter
                        letters={item.letter}
                        salutation={item.salutation}
                        signature={item.signature}
                      />
                    );
                    // return <LoveLetter letters={`sjsbuhisbshu \r shsuvsgyvs`} />;
                  })}{" "}
                </>
              )}
            </div>

            <DescribeNkem />

            <footer>
              <p>
                &copy; Nkemakolam Adigwe's 23rd birthday. <br /> 23rd November,
                2022.
                <br /> Built with love by Jibs ❤️
              </p>
            </footer>
          </motion.div>
        </>
      ) : (
        <div className="desktop">
          <span>
            Please view on a mobile device with screen width less than 650px
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
