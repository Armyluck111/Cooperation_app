import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const TitleAnimation = ({ loading }) => {
  return (
    <div>
      {loading ? (
        <ClipLoader
          color="#c77e1f"
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : null}
    </div>
  );
};
export default TitleAnimation;