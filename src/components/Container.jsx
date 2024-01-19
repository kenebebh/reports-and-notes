import React from "react";

export default function Container({ children }) {
  return (
    // <section className="mx-auto px-6 sm:max-w-2xl md:max-w-3xl lg:max-w-[1216px] lg:px-8 bg-red-500 h-screen">
    //   {children}
    // </section>
    <section className=" px-6 h-screen flex justify-center items-center">
      <div className="-mt-16">{children}</div>
    </section>
  );
}
