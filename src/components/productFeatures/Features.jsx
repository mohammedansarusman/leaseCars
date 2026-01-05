import { AccordionFeature } from "./AccordionFeature";
export const Features = ({ features }) => {
  console.log("features", features);

  return (
    <div className="w-full px-5 lg:px-10 pt-5 opacity-80 mt-5">
      <h1 className="text-xl font-semibold">Car Features</h1>
      {features.map((item) => (
        <AccordionFeature item = {item} key={item.feature_group_name}/>
      ))}
    </div>
  );
};
