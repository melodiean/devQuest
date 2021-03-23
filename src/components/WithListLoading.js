import React from 'react';

function WithListLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
     
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
     
    );
  };
}
export default WithListLoading;