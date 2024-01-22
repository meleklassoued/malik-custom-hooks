import { useMyContext } from "../Hooks/useContext";
// Local ui component
import Button from "./Button";
type TmockStatus = {
  [key: string]: string;
};
export function ScreenContainer() {
  const { appStatus, setAppStatus } = useMyContext();

  const mockStatus: TmockStatus = {
    OFF: "ON",
    ON: "OFF",
  };
  const changeAppStatus = () => {
    setAppStatus(mockStatus[appStatus]);
  };
  return (
    <div>
      <h1>{appStatus}</h1>
      <Button handleClick={changeAppStatus}>
        change the status just click please
      </Button>
    </div>
  );
}
