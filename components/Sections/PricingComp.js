import PricingExtr from "../Extras/PricingExtr";

const Pricing = () => {
  return (
    <>
    <section className="flex justify-center items-center flex-col gap-8 py-20 overflow-hidden">
      <h1 className="text-7xl text-center font-semibold">
        Pricing for{" "}
        <span
          style={{
            background: "linear-gradient(to right, #6557ff, #aa3fff 80%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Everyone
        </span>{" "}
      </h1>
      <h3 className="font-normal text-base text-black">
        Affordable for every business that wants to grow.
      </h3>
    </section>
    <PricingExtr/>
    </>
  );
};

export default Pricing;
