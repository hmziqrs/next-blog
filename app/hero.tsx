"use client";
import Typewriter from "typewriter-effect";

const DELAY = {
  SHORT: 220,
  LONG: 2000,
};

export default function Hero() {
  return (
    <div className="h-96 py-20 px-2">
      <Typewriter
        options={{
          delay: 45,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString('<span class="text-3xl font-medium">Hey there!<span>')
            .changeDelay(25)
            .pauseFor(DELAY.LONG)
            .typeString("<br /><br />")
            .pauseFor(DELAY.SHORT)
            .typeString(
              '<span class="">Welcome to your window into my world of development.</span>'
            )
            .changeDelay(15)
            .pauseFor(DELAY.LONG)
            .typeString("<br /><br />")
            .pauseFor(DELAY.SHORT)
            .typeString(
              "This is where I write/log my useful-ish thoughts and experiences, documenting my work and hobbies for you to explore."
            )
            .start();
        }}
      />
    </div>
  );
}
