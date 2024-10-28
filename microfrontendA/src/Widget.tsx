
import React from 'react';

interface WidgetProps {
  title?: string;
  onAction?: () => void;
}

const Widget: React.FC<WidgetProps> = ({ title = 'Default Widget', onAction }) => {
  return (
    <div className="widget-container">
      <h2>{title}</h2>
      <div className="widget-content">
        <button 
          className="widget-button"
          onClick={onAction}
        >
          Trigger Action
        </button>
      </div>
    </div>
  );
};

export default Widget;
