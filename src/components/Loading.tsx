import React from "react";
import { Bars } from "react-loader-spinner";

interface LoadingProps {
  loading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ loading }) => {
  return (
    loading && (
      <div style={styles.loaderWrapper}>
        <Bars
          height="80"
          width="80"
          color="#0c319c"
          ariaLabel="bars-loading"
          visible={true}
        />
      </div>
    )
  );
};

const styles = {
  loaderWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height
    width: "100vw", // Full viewport width
    position: "fixed", // Fixed position to cover the entire viewport
    top: 0, // Align with the top of the viewport
    left: 0, // Align with the left of the viewport
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Optional: light overlay effect
    zIndex: 9999, // Ensure it is on top of other elements
  },
};

export default Loading;
