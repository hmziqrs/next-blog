import Container from "components/container";
import { typography } from "lib/typography";
import Link from "next/link";

export default function AboutPage() {
  const totalExperience = new Date().getFullYear() - 2017;
  return (
    <Container className="text-center">
      <div className="h-20" />
      <h1 className={typography.heading}>About me</h1>
      <div className="h-8" />
      <p>
        I{"'"}m from Karachi, Pakistan, and have been working as a software
        engineer for over {totalExperience} years. Currently, I am a freelancer
        at{" "}
        <Link
          target="_blank"
          className="underline font-bold"
          href={"https://www.toptal.com/resume/hamza-iqbal"}
        >
          Toptal
        </Link>
        , serving as a Senior Full-Stack Software Engineer.
        <br />
        <br />I have experience working on a variety of projects, ranging from
        small to large-scale applications. My expertise includes mobile
        application development, web frontend and backend development. I have
        worked with a wide range of technologies, including Flutter, React,
        React Native, Go, Node.js, MySQL, PostgreSQL, and many more.
      </p>
      <div className="h-20" />
      <h1 className={typography.heading}>Why this blog?</h1>
      <div className="h-8" />
      <p>
        As an engineer with strong problem-solving skills, I have often faced
        challenges with non-engineering aspects like designing (UI/UX) and
        content writingI have always wanted to write about my experiences and
        share my knowledge with others. This blog is my attempt to do that. I
        hope you enjoy it. If you have any feedback, please feel free to reach
        out to me via the{" "}
        <Link href="/connect" className="underline font-bold">
          connect
        </Link>{" "}
        page. <br />
        <br />
        <b> Thank you for reading this. Have a great day! :)</b>
      </p>
      <div className="h-20" />
    </Container>
  );
}
