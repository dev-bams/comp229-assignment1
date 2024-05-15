import ServiceCardList from "./ServiceCardList";

function ServicesPage() {
  return (
    <div className="flex flex-col relative bg-second-primary dark:bg-first-primary">
      <div
        className=" flex justify-center flex-col gap-5 text-white items-center transition-colors duration-300 bg-first-primary"
        style={{ minHeight: "calc( 100vh - 88px )" }}
      >
        <div className="max-w-7xl w-full p-4 flex flex-col justify-center gap-10">
          <ServiceCardList />
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
