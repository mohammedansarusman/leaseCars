import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { CheckBoxMake } from "./CheckBoxMake";
import { useSelector } from "react-redux";
export const AccordionMake = () => {
  const brands = useSelector((store) => store.car.brands);
  const brandsCaption = brands.join(", ");
  return (
    <>
      <Accordion
        type="single"
        // defaultValue="item-1"
        collapsible
        className="w-full border-b border-gray-200"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:no-underline text-base font-semibold text-gray-700">
            <div className="w-full flex justify-between items-center">
              <aside className="w-1/4">
                <h1>Make</h1>
              </aside>
              <aside className="w-2/4 flex justify-end">
                <h1 className="font-extralight text-sm w-3/4 truncate text-right">
                  {brandsCaption.length === 0 ? "All Makes" : brandsCaption}
                </h1>
              </aside>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="w-full">
              <CheckBoxMake />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
