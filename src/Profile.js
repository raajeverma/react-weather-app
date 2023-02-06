import React from "react";

export const Profile = () => {
  return (
    <div className="profile-area">
      <a
        href="https://github.com/raajeverma"
        target="_blank"
        rel="noopener noreferrer"
        title="Github Profile"
      >
        <span className="icon">
          <i class="fa-brands fa-github"></i>
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/neeraj-verma-5ba086203/"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn Profile"
      >
        <span className="icon">
          <i class="fa-brands fa-linkedin"></i>
        </span>
      </a>
      <a
        href="mailto: vneeraj926@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        title="vneeraj926@gmail.com"
      >
        <span className="icon">
          <i class="fa-regular fa-envelope"></i>
        </span>
      </a>
    </div>
  );
};
