import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[2520px] xl:px-30 md:px-14 sm:px-8 px-6">
      {children}
    </div>
  );
};

export default Container;
