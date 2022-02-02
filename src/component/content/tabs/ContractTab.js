import '../../../style/sass/pages/content/tabs/_contactTab.scss';

const ContractTab = function () {
  return (
    <section id="section__contact">
      <div className="container">
        <div className="content__find-me">
          <h4>Find me online</h4>
          <div className="find-me__social">
            {/* <!-- twitter --> */}
            <a target="_blank" rel="noreferrer" title="twitter" href="http://twitter.com/alihsn12r">
              {' '}
            </a>
            {/* <!-- facebook --> */}
            <a
              target="_blank"
              rel="noreferrer"
              title="facebook"
              href="https://www.facebook.com/alihsn12r"
            >
              {' '}
            </a>
            {/* <!-- linkedin --> */}
            <a
              target="_blank"
              rel="noreferrer"
              title="linkedin"
              href="https://www.linkedin.com/in/ali-hassan-b6b4b5198/"
            >
              {' '}
            </a>
            {/* <!-- github --> */}
            <a
              target="_blank"
              rel="noreferrer"
              title="github"
              href="https://github.com/alihassan12r"
            >
              {' '}
            </a>
          </div>

          <h4>Send a message</h4>
          <div className="find-me__social">
            {/* <!-- sarahah --> */}
            <a
              target="_blank"
              rel="noreferrer"
              title="sarahah"
              href="https://www.sarahah.com/messages/send/user/ahss12"
            >
              <div className="img-cnt" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractTab;
