import PageHeader from "./common/pageHeader";
const About = () => {
  return (
    <PageHeader
      title="About card app"
      description={
        <>bla bla bla {<i className="bi bi-globe-americas"></i>} try</>
      }
    />
  );
};

export default About;
