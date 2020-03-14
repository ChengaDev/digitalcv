import React, { useState } from 'react';
import WelcomeModal from '../../portals/WelcomeModal';
import { isMobile } from 'react-device-detect';

const Layout = ({ children }) => {
  const [shouldDisplayWelcomeModal, setShouldDisplayWelcomeModal] = useState(
    true
  );

  return (
    <React.Fragment>
      {!isMobile && shouldDisplayWelcomeModal && (
        <WelcomeModal
          onCloseClick={() =>
            setShouldDisplayWelcomeModal(!shouldDisplayWelcomeModal)
          }
        />
      )}
      {children}
    </React.Fragment>
  );
};

export default Layout;
