function ServicesPage() {
  return (
    <div className="flex flex-col relative bg-second-primary dark:bg-first-primary">
      <div
        className=" flex justify-center flex-col gap-5 text-white items-center transition-colors duration-300 bg-first-primary"
        style={{ minHeight: "calc( 100vh - 88px )" }}
      >
        <h2>Services</h2>
        <div className="flex gap-10">
          <div className="border">
            <h2>Website Design</h2>
          </div>
          <div className="border">
            <h2>Website Development</h2>
          </div>
          <div className="border">
            <h2>Website Maintenance</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
