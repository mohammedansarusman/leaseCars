import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { CheckBoxMake } from "./CheckBoxMake";
export const AccordionMake = () => {
  return (
    <>
      <Accordion
        type="single"
        // defaultValue="item-1"
        collapsible
        className="w-full border-b border-gray-200"
      >
        <AccordionItem value='item-1'>
            <AccordionTrigger className="px-5 hover:no-underline text-base font-semibold text-gray-700">
                <div className="w-full flex justify-between items-center">
                    <h1>Make</h1>
                    <h1 className="font-light">All Makes</h1>
                </div>
            </AccordionTrigger>
            <AccordionContent>
                <div className="w-full bg-blue-200">
                    <CheckBoxMake />
                </div>  
            </AccordionContent>
        </AccordionItem>

      </Accordion>
    </>
  );
};
