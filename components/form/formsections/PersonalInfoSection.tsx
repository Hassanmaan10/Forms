"use client";

import RHFInput from "./RHFInput";

export default function PersonalInfoSection() {
  return (
    <section>
      <div className="flex flex-col gap-6 mb-3 xs:flex-row">
        <RHFInput
          name="firstname"
          label="First name"
          placeholder="First name"
          type="text"
        />
        <RHFInput
          name="lastname"
          label="Last name"
          placeholder="Last name"
          type="text"
        />
      </div>
      <RHFInput name="email" label="Email" placeholder="Email" type="email" />
    </section>
  );
}
