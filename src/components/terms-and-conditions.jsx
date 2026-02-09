import { useState } from "react";
import { Button } from "./ui/button";

export const TermsAndConditions = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-col gap-4 p-4 border rounded-md bg-white">
      <h2 className="text-xl font-bold">Terms and Conditions</h2>
      <p className="text-sm text-gray-600">
        By checking the box below, you agree to our privacy policy and terms of service.
      </p>
      
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          className="size-4"
        />
        <span>I accept the terms and conditions</span>
      </label>

      <Button disabled={!isChecked}>
        Submit Agreement
      </Button>
    </div>
  );
};
