import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAppStore from "host/StateService";

export const Show = () => {
  const { id } = useParams();
  const setMicro = useAppStore((state) => state.setMicro);

  useEffect(() => {
    setMicro("show");
  }, []);
  return (
    <div style={{ border: "1px solid green", margin: "2px" }}>
      <h1>Show Page App ID {id}</h1>
    </div>
  );
};
