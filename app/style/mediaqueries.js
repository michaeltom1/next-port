export const media = `
/* sm */
@media (min-width: 640px) {
}
/* md */
@media (min-width: 768px) {

  nav {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;
  }

  nav ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .contact-text {
    font-size: 2.25rem;
  }

  /* about */
  .card-container-grid {
    flex-direction: row;
  }
  /* about */
  .sectionHeading {
    font-size: 3.75rem;
  }

  .about-text {
    font-size: 3.75rem;
  }
}
/* lg */
@media (min-width: 1024px) {}
/* xl */
@media (min-width: 1280px) {}
/* 2xl */
@media (min-width: 1536px) {}

`;
