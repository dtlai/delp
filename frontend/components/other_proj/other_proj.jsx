import React from "react";

const OtherProj = () => (
  <>
    <div className="other-proj-container">
      <h1>Other Delp Apps</h1>
      <div className="projects-container">
        <div className="project">
          <a
            href="https://ridealong-app.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <p>RideAlong</p>
            <img src="https://i.imgur.com/vscAchT.png" alt="ridealonglogo" />
          </a>
        </div>
        <div className="project">
          <a
            href="https://dtlai.github.io/stocktok/"
            target="_blank"
            rel="noreferrer"
          >
            <p>StockTok</p>
            <img
              className="stocktokpic"
              src="https://i.imgur.com/AuvlJ1y.png"
              alt="stocktokimg"
            />
          </a>
        </div>
      </div>
    </div>
  </>
);

export default OtherProj;
