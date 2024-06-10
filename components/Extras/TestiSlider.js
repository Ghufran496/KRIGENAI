import classes from "./TestiSlider.module.css";
import Image from "next/image";
import p1 from "../../images/p1.webp";
import p2 from "../../images/p2.webp";
import p3 from "../../images/p3.webp";
import p4 from "../../images/p4.webp";

import coma from "../../images/comas.svg";

const TestimonialsSlider = () => {
  return (
    <div className="my-16 overflow-hidden">
      <div className={classes.imagecontainer}>
        <div className="flex gap-14 w-11/12 bg-slate-50 rounded-3xl px-4 py-4 overflow-hidden">
          <Image
            src={p1}
            alt="Picture of Slack logo"
            width={150}
            height={70}
            quality={100}
            sizes={"100vw"}
          />
          <div className="flex flex-col gap-16">
            <p className="italic font-semibold text-xl">
              “The SproutCloud team has completely streamlined our business
              operations. Communication was excellent and overall we are very
              pleased!”
            </p>
            <div className="flex justify-between">
              <div>
                <h1 className="font-bold">Zach Lovett</h1>
                <h3 className="text-gray-600">Online Bussiness Owner</h3>
              </div>
              <Image
                src={coma}
                alt="Picture of Slack logo"
                width={30}
                height={50}
                quality={100}
                sizes={"100vw"}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-14 w-11/12 bg-slate-50 rounded-3xl px-4 py-4">
          <Image
            src={p2}
            alt="Picture of Slack logo"
            width={150}
            height={70}
            quality={100}
            sizes={"100vw"}
          />
          <div className="flex flex-col gap-16">
            <p className="italic font-semibold text-xl">
              “The SproutCloud team has completely streamlined our business
              operations. Communication was excellent and overall we are very
              pleased!”
            </p>
            <div className="flex justify-between">
              <div>
                <h1 className="font-bold">Zach Lovett</h1>
                <h3 className="text-gray-600">Online Bussiness Owner</h3>
              </div>
              <Image
                src={coma}
                alt="Picture of Slack logo"
                width={30}
                height={50}
                quality={100}
                sizes={"100vw"}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-14 w-11/12 bg-slate-50 rounded-3xl px-4 py-4">
          <Image
            src={p3}
            alt="Picture of Slack logo"
            width={150}
            height={70}
            quality={100}
            sizes={"100vw"}
          />
          <div className="flex flex-col gap-16">
            <p className="italic font-semibold text-xl">
              “The SproutCloud team has completely streamlined our business
              operations. Communication was excellent and overall we are very
              pleased!”
            </p>
            <div className="flex justify-between">
              <div>
                <h1 className="font-bold">Zach Lovett</h1>
                <h3 className="text-gray-600">Online Bussiness Owner</h3>
              </div>
              <Image
                src={coma}
                alt="Picture of Slack logo"
                width={30}
                height={50}
                quality={100}
                sizes={"100vw"}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-14 w-11/12 bg-slate-50 rounded-3xl px-4 py-4">
          <Image
            src={p4}
            alt="Picture of Slack logo"
            width={150}
            height={70}
            quality={100}
            sizes={"100vw"}
          />
          <div className="flex flex-col gap-16">
            <p className="italic font-semibold text-xl">
              “The SproutCloud team has completely streamlined our business
              operations. Communication was excellent and overall we are very
              pleased!”
            </p>
            <div className="flex justify-between">
              <div>
                <h1 className="font-bold">Zach Lovett</h1>
                <h3 className="text-gray-600">Online Bussiness Owner</h3>
              </div>
              <Image
                src={coma}
                alt="Picture of Slack logo"
                width={30}
                height={50}
                quality={100}
                sizes={"100vw"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
