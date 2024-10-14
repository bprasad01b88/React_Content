import React from 'react';
// import './CustomContextMenu.css';

const CustomContextMenu = ({ xPos, yPos, showMenu, onExport }) => {
  if (!showMenu) {
    return null;
  }

  return (
    <div
      className="custom-context-menu"
      style={{ top: yPos, left: xPos }}
    >
      <div className="custom-context-menu-item" onClick={onExport}>
        Export to Excel
      </div>
    </div>
  );
};

export default CustomContextMenu;
