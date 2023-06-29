import PageHeader from "./common/pageHeader";
const About = () => {
  return (
    <PageHeader
      title="About card app"
      description={
        <>
          <p>On the site you can manage your business cards</p>{" "}
          <p>Create, Edit Display and Delete easily and quickly.</p>
        </>
      }
    />
  );
};

export default About;
