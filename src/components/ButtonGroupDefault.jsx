import { ButtonGroup, Button } from "@material-tailwind/react";
 
export function ButtonGroupDefault() {
  return (
    <ButtonGroup color="yellow">
      <Button className="w-full" >Photo & Text</Button>
      <Button className="w-full">Only Text</Button>
    </ButtonGroup>
  );
}