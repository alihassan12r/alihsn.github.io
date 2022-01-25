/* eslint-disable no-return-assign */
import React from 'react';
import '../../../style/sass/pages/content/tabs/_aboutTab.scss';

const AboutTab = function () {
  return (
    <section id="section__aboutme">
      <div className="container">
        <div className="content__aboutme">
          <h1>Hi! I&apos;m Ali 👋</h1>
          <p>
            I&apos;m a Web Developer from Iraq living in baghdad.
            <br />
            A long time ago, I like programs like 3D Max, Photoshop, etc.
            <br />
            <b>Now</b> I&apos;m diving into the sea of programming from years ago.
            <br />
            <br />
            Good to know about me is that I love photography./videography 📸 I love to travel
            anywhere, at the same time i like to stay at home.
            <br />
            <br />
            <br />
          </p>
        </div>

        <div className="content__graduated">
          <div className="graduated__img" />
          <p>
            I graduated from the University of Baghdad
            <br />
            With a B.Sc. in Computer Science
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutTab;
