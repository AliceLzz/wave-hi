
 
import { Textarea, Button, IconButton } from "@material-tailwind/react";
 
export function PhotoForm() {
  return (
    <div className="relative w-full mt-4">
      <Textarea variant="outline" label="Your Message" rows={4} color="yellow" className="text-light-100" />
      <div className="flex w-full justify-between py-1.5">
        <IconButton variant="text" color="white" size="sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>
        </IconButton>
        <div className="flex gap-2">
          <Button size="sm" variant="text" className="rounded-md text-primary-100">
            Upload Photo
          </Button>
          <Button size="sm" className="rounded-md">
            Post
          </Button>
        </div>
      </div>
    </div>
  );
}
      
      
      
      
      
      
      
