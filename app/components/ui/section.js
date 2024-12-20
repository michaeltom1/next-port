const Section = ({ children, className, sectionStyle, id }) => {
  return (
    <section id={id} className={`home-section, ${sectionStyle && sectionStyle}`}>
      <div className={`section-container ${className}`}>{children}</div>
    </section>
  );
};

export default Section;
