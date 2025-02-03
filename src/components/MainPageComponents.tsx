"use-client";
import React from "react";
import { Luckiest_Guy } from "next/font/google";
const luckiestGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
});
export function MainPageComponents() {
  return (
    <div>
      <div className="grid justify-center">
        <div className="text-center max-w-[700px] pb-8">
          Bria Harrold 1/31/2025 <br></br>
          <h1 className={luckiestGuy.className && "text-2xl pt-8"}>
            How did you get to be where you are now?
          </h1>{" "}
          Trying my best to follow my passions and interests, constantly
          learning and challenging myself. Of course all of this wouldn't be
          possible without the support of my mom through everything. I recently
          graduated from CodeStack Academy, and in my journey in computer
          science, I’ve developed skills that I hope to apply. I'm also
          considering veterinary medicine because of my deep love for animals.
          I’ve been going to Delta College part-time off and on since 2020, and
          I plan on transferring to a UC this year.<br></br>
          <h1 className={luckiestGuy.className && "text-2xl pt-8"}>
            {" "}
            What do you hope to get out of your college career?
          </h1>{" "}
          I hope to gain knowledge, hands-on experience, and personal growth
          that will prepare me for a fulfilling career, whether in technology or
          veterinary science. I want to apply my knowledge and create a business
          in whatever path I decide, and I also want to help animals. Beyond
          academics, I want to build connections, explore new opportunities, and
          develop skills that will help me navigate life and my future
          profession.<br></br>
          <h1 className={luckiestGuy.className && "text-2xl pt-8"}>
            {" "}
            Where are you from?
          </h1>
          I was born in Oakland to a single mother who has supported me all the
          way to the age I am now 22. My mom is the COO and owner of KAYGE
          Gaming and also works as a registered nurse (RN) outside of running
          her business.
        </div>
      </div>
      <hr className="pb-8"></hr>
      <h1 className="text-center text-3xl">Some People that I care About!</h1>
      <div className="grid grid-flow-col gap-4 justify-center  pt-4">
        <img
          className="  h-[300px] max-w-[240px] object-cover "
          src="/imgs/IMG_4214.jpeg"
        ></img>
        <img
          className="  h-[300px] max-w-[240px] object-cover "
          src="/imgs/IMG_4867.jpeg"
        ></img>

        <img
          className=" h-[300px] max-w-[240px] object-cover"
          src="/imgs/IMG_5012.jpeg"
        ></img>
      </div>
      <div className="flex justify-center pt-4">
        <h2></h2>
        <img
          className="  max-w-[660px] object-cover"
          src="/imgs/IMG_9185.jpeg"
        ></img>
      </div>
      <hr className="mt-8 pb-4"></hr>
      <div className="grid grid-flow-col gap-4 justify-center  pt-4">
        <img
          className="  h-[300px] max-w-[240px] object-cover "
          src="/imgs/IMG_6112.jpeg"
        ></img>
      </div>
      <div className="grid justify-center">
        <h3 className="text-center max-w-96 pt-4">
          I made this small website because Canvas didn't allow me to post my
          photos and introduction. I also tried to upload a PDF, but it said the
          file size was maxed out.{" "}
        </h3>
      </div>
    </div>
  );
}
