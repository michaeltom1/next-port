import Section from "../ui/section";
import Button from "../ui/Button";
const Contact = () => {
  return (
    <Section id={"contact"} className={"contact"}>
      <h2 className="sectionHeading">Contact Me</h2>
      <p className="contact-text">
        Reach out to me via email or connect with me on Social Media
      </p>
      <div className="contactBtnContainer">
        <Button
          Icon
          className={"centerBtnItems"}
          href="mailto:mic81070@gmail.com"
        >
          Send me a message
        </Button>
      </div>
    </Section>
  );
};

export default Contact;
