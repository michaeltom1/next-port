export const cardStyles = `
.card-container {
  max-width: 24rem;
  border-radius: 0.75rem;
  padding: 2rem;
  background: var(--card-bg);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
}
.card-title {
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
}

.card-description {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 500;
}

.card-icon-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.card-icon {
  font-size: 2.25rem;
  line-height: 2.5rem;
  border-radius: 9999px;
  padding: 0.25rem;
  border: 2px solid #737373;
}

.card-container-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
}
`;

export const navStyles = `
header {
  position: fixed;
  width: 100%;
  backdrop-filter: blur(12px);
  background-color: var(--nav-bg);
  z-index: 50;
  transition-property: transform;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
nav {
  height: 4rem;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
}

nav ul {
  display: none;
}
.nav-links {
  font-size: 1.25rem;
}

.show-nav {
  transform: translateY(0px);
}
.hide-nav {
  transform: translateY(-100%);
}
`;

export const heroStyles = `
main {
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero {
  margin: 0 auto;
  width: 90%;
  text-align: center;
}
.hello {
  font-size: 2.25rem;
  font-weight: 700;
}

.hero-text {
  font-size: 1.25rem;
  font-weight: 700;
}

@media (min-width: 768px) {
  main {
    height: 100vh;
  }
  .hero-text {
    font-size: 2.25rem;
  }
 .hello {
    font-size: 6rem;
  }
}
`;

export const footerStyles = `
footer {
  background-color: var(--background);
  padding: 1rem 0;
  user-select: none;
  border-top: 1px solid #1717179d;
}
.footer-parent-container {
  width: 90%;
  margin: 0 auto;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}

.footer-icons {
  display: flex;
  gap: 1rem;
}

.footer-text {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
}

.footer-container1 {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

@media (min-width: 1024px) {
  .footer-parent-container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;
    flex-direction: row;
  }

  .footer-container1 {
    flex-direction: row;
  }

  .footer-text {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
}
`;

export const section = `
.section-container {
  width: 90%;
  margin: 0 auto;
  padding: 4rem 0;
}

.sectionHeading {
  text-align: center;
  font-size: 2.25rem;
  font-weight: 700;
  user-select: none;
}

@media (min-width: 768px) {
  .section-container {
    width: 80%;
    margin: 0 auto;
  }
}
`;

export const contact = `
.contact {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contactBtnContainer {
  display: flex;
  justify-content: center;
}

.contact-text {
  font-weight: 700;
  font-size: 1.25rem;
}
`;

export const about = `
.about-style {
  background-color: var(--background);
}

.about-text {
  font-size: 2.25rem;
  font-weight: 700;
}
`;

export const button = `
.btn {
  background-color: #ffffff;
  color: #0a0a0a;
  width: fit-content;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  user-select: none;
}

.centerBtnItems {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
`;

export const logo = `
.logo {
  width: 4rem;
  height: 4rem;
}
`;
