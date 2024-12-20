import Section from "../ui/section";
const About = () => {
  return (
    <Section id={"about"} className={"about"} sectionStyle={"about-style"}>
      <h2 className="sectionHeading">About Me</h2>
      <p className="about-text ">
        I am a passionate web developer specialized in crafting visually
        appealing websites that are responsive, functional and user-friendly
      </p>
    </Section>
  );
};

export default About;
