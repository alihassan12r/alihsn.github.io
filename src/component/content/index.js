import React from 'react';
import '../../style/sass/pages/content/_content.scss';

import ContractTab from './tabs/ContractTab';
import AboutTab from './tabs/AboutTab';

const Content = function () {
  return (
    <main className="content">
      <div id="tab__aboutme" className="tab">
        <AboutTab />
      </div>
      <div id="tab__contact" className="tab">
        <ContractTab />
      </div>
    </main>
  );
};

export default Content;
