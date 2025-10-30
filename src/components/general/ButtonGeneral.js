import { Button } from "../ui/button";

export const ButtonGeneral = ({value}) => {
  return (
    <Button
      variant="outline"
      size="lg"
      className="w-40 bg-sky-600 text-white text-lg font-semibold"
    >
      {value}
    </Button>
  );
};
