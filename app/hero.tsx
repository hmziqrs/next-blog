"use client";

import Container from "components/container";
import Typewriter from "typewriter-effect";

const DELAY = {
  SHORT: 220,
  LONG: 2000,
};

export default function Hero() {
  return (
    <Container>
      <div className="relative py-40 flex items-center">
        <div className="relative block h-48">
          <Typewriter
            options={{
              delay: 45,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  '<span class="text-3xl font-medium">Hey there!<span>'
                )
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
      </div>
    </Container>
  );
}
