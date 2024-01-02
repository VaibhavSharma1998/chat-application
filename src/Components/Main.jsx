import React from "react";
import "./main.css";
import userImg from "../images/VAIBHAV-IMG.jpg";
import rightMainImg from "../images/rightMainImg.png";

import { IoChatbubbleEllipsesOutline } from "react-icons/io5";


export const Main = () => {
  return (
    <div>
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
                {/* above photo section */}
              <section className="main-left-div">
                <div className="upper-left-div">
                  <img
                    src={userImg}
                    alt="User-personal"
                    className="user-img"
                  />
                  <p>Vaibhav Sharma(You)</p>
                </div>
              </section>

              {/* serach section */}
              <input type="search" name="serach" id="serach" placeholder="Search or start a new chat" className="top-search"/>

              {/* chat,call and video call implementation */}
              <section>
                <div className="icons-div">
                <IoChatbubbleEllipsesOutline />

                </div>
              </section>
            </div>
            <div className="col-lg-9">
              <img src={rightMainImg} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
