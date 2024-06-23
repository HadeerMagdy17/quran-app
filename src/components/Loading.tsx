import React from "react";
import { Bars } from "react-loader-spinner";

interface LoadingProps {
  loading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ loading }) => {
  return loading && <Bars
  height="80"
  width="80"
  color="#0c319c"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />;
};

export default Loading;
