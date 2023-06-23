import Container from "components/container";

export default function AboutPage() {
  // <a href="https://www.toptal.com/resume/hamza-iqbal">Toptal</a> as a
  const totalExperience = new Date().getFullYear() - 2017;
  return (
    <Container className="text-center">
      <div className="h-20" />
      <h1 className="text-3xl">About me</h1>
      <div className="h-8" />
      <p>
        I{"'"}m from Karachi, Pakistan, and have been working as a software
        engineer for over {totalExperience} years. Currently, I am a freelancer
        at Toptal, serving as a Senior Full-Stack Software Engineer.
        <br />
        <br />I have experience working on a variety of projects, ranging from
        small to large-scale applications. My expertise includes mobile
        application development, web frontend and backend development. I have
        worked with a wide range of technologies, including Flutter, React,
        React Native, Go, Node.js, Express.js, MongoDB, MySQL, PostgreSQL, and
        many more.
      </p>
      <div className="h-20" />
      <h1 className="text-3xl">Why this blog?</h1>
      <div className="h-8" />
      <p>
        As an engineer with strong problem-solving skills, I have often faced
        challenges with non-engineering aspects like designing (UI/UX) and
        content writingI have always wanted to write about my experiences and
        share my knowledge with others. This blog is my attempt to do that. I
        hope you enjoy it. If you have any feedback, please feel free to reach
        out to me via the contact page. <br />
        <br />
        <b> Thank you for reading this. Have a great day! :)</b>
        <br />
        <b>Hamza Iqbal</b>
      </p>
    </Container>
  );
}
