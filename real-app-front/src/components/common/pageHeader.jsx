const PageHeader = ({ title, description }) => {
  return (
    <>
      <div className="row mt-5 text-center">
        <div className="col-12">
          <h1>{title}</h1>
        </div>
      </div>
      {description && (
        <div className="row mt-2 text-center">
          <div className="col-12">
            <p>{description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PageHeader;
