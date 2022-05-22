import React from "react";
import "./About.css";
import rayhan1 from "../src/img/roki-about.jpg"

function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={rayhan1} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              I am Md. Rayhan. I am a student of computer science engineer.
              I have extensive knowledge of HTML, CSS, Bootstrap, Tailwind, JavaScript, React, React Router Dom, Node.js, MongoDB, Github and Firebase. Combined with my communication and problem solving skills, I think I would be an excellent candidate for the role of web developer in your company.
              </p>
              <p className="about__text p__color">
              I did some projects and gave them to the project part.

              I have always been passionate about web development. I'm constantly looking for new technologies and stay up-to-date on industry trends.
              </p>
              <p className="about__text p__color">
              Excellent communicator seeking to utilize honed skills in Computer Science and vast experience using multiple standard languages in the position of a Web Developer at your Company. Coming with strong understanding of aesthetics and design principles.
              </p>
              <div className="icon d__flex aling__items__center">
                <a className="link-icon" href="https://www.facebook.com/md.rayhan.hossenroki">
                <i class="icon-1 fa-brands fa-facebook-square"></i>
                </a>
                <a className="link-icon" href="https://www.instagram.com/rprayhan7916/">
                <i class="icon-1 fa-brands fa-instagram-square"></i>
                </a>
                <a className="link-icon" href="https://www.linkedin.com/in/md-rayhan-474531217/">
                <i class="icon-1 fa-brands fa-linkedin"></i>
                </a>

              </div>
              <div className="about__button d__flex align__items__center">
                <a href="resume-ses.pdf" download="resume.pdf">
                  <button className="about btn pointer">Download Resume</button>
                </a>
                <a href="#Contact">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
