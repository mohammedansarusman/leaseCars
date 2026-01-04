import { Button } from "../ui/button";

export const ButtonGeneral = ({value}) => {
  return (
    <Button
      size="lg"
      className="w-40 bg-sky-700 text-white text-lg font-semibold hover:bg-sky-800 hover:text-white cursor-pointer"
    >
      {value}
    </Button>
  );
};
