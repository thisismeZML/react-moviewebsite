import { Skeleton } from "@mui/material";
import React from "react";

const Skeletons = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Skeleton variant="rectangular" width="100%" height="100%" />
    </div>
  );
};

export default Skeletons;