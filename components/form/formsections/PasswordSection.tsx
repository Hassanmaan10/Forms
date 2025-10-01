"use client";

import RHFInput from "./RHFInput";

const PasswordSection = () => {
  return (
    <section>
      <RHFInput
        name="password"
        label="Password"
        placeholder="Password"
        type="password"
      />
      <RHFInput
        name="confirmpassword"
        label="Confirm password"
        placeholder="Confirm password"
        type="password"
        className="mt-3"
      />
    </section>
  );
};

export default PasswordSection;
