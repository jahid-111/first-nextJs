import Button from "@/app/components/Button";
import React from "react";

const Settings = () => {
  console.log("Settings");
  // throw new Error("Error Analytics");
  return (
    <div className="text-center  h-screen">
      <h3 className="text-6xl"> Setting Page </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptas
        placeat quia quas perferendis veniam velit, officia quo quos inventore
        nobis totam voluptatibus similique, eligendi odit minus quae dolorum.
        Consequuntur?
      </p>

      <Button> Go to Analytics Page</Button>
    </div>
  );
};

export default Settings;
