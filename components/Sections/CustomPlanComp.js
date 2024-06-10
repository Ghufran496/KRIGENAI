import sec2 from "../../images/sec2.jpeg";
import Image from "next/image";

const CustomPlanComp = () => {
  return (
    <section className="py-24 px-6">
      <div className="flex justify-center items-center flex-col gap-10 bg-slate-50 pt-20 mx-8 rounded-3xl">
        <h1 className="text-7xl text-center font-semibold">
          <span
            style={{
              background: "linear-gradient(to right, #6557ff, #aa3fff 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Custom Plan?
          </span>{" "}
          Lets Talk.
        </h1>
        <h3 className="font-normal text-center text-base text-gray-600">
          Speak with a Strategy Expert & let us build your vision.
        </h3>
        <div className="">
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-600 px-8 py-2 text-lg font-semibold text-white shadow-sm hover:from-purple-500 hover:via-indigo-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            CONTACT SALES
          </button>
        </div>

        <div className="mt-8">
          <Image
            className="rounded-3xl"
            src={sec2}
            alt="Picture of Dashboard"
            width={1200}
            height={900}
            quality={100}
            priority
            sizes={"100vw"}
          />
        </div>
      </div>
    </section>
  );
};

export default CustomPlanComp;
