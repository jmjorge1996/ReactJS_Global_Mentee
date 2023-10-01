import React, { useEffect } from 'react';
import { createPortal } from 'react-dom'; 
import FocusTrap from 'focus-trap-react';
import './Dialog.scss';

const Dialog = ({ title, children, onClose }) => {
  const portalRoot = document.getElementById('portal-root');

  useEffect(() => {
    if (!portalRoot) {
      const newPortalRoot = document.createElement('div');
      newPortalRoot.setAttribute('id', 'portal-root');
      document.body.appendChild(newPortalRoot);
    }
  }, [portalRoot]);

  const handleOutsideClick = (e) => {
    if (e.target === portalRoot) {
      onClose();
    }
  };

  return portalRoot && createPortal(
    <FocusTrap>
      <div className="dialog__overlay" onClick={handleOutsideClick}>
        <div className="dialog__content">
          <div className="dialog__header">
            <h2>{title}</h2>
            <button className="dialog__close-button" onClick={onClose}>
              &#215;
            </button>
          </div>
          <div className="dialog__body">{children}</div>
        </div>
      </div>
    </FocusTrap>,
    portalRoot
  );
};

export default Dialog;
