import img1 from "../../images/backg.webp";
import classes from "./BelowGallery.module.css";

const BelowGallery = () => {
  return (
    <div className="bg-white py-14">
      <div className={classes.back}>
        <h1 className=" text-4xl text-white font-bold text-center">Collaboration and Sharing</h1>
        <h3 className="text-white text-base text-center">
          Share responsibilities, collaborate with team members, delegating
          tasks, leaving notes, and sharing files.
        </h3>
        <div>
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-600 px-8 py-2 text-lg font-semibold text-white shadow-sm hover:from-purple-500 hover:via-indigo-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Book A Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default BelowGallery;
