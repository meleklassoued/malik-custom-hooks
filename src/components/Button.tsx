import * as React from "react";

export interface IAppProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

export default function Button({ handleClick, children }: IAppProps) {
  return <button onClick={handleClick}>{children} </button>;
}
