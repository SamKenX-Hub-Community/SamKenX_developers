import React from "react";

import WhyPrimary from "./whyPrimary";
import WhyServices from "./whyServices";
import WhyBlogPreview from "./whyBlogPreview";

const whyMenus = () => (
  <div className="o-layout__row c-sub-menu c-sub-menu--why-linode" id="sub-menu--why-linode">
    <div className="o-layout__colset">
      <div className="o-layout__col">
        <WhyPrimary />
      </div>
      <div className="o-layout__col">
        <WhyServices />
      </div>
      <div className="o-layout__col">

      </div>
    </div>
  </div>
);

export default whyMenus;
