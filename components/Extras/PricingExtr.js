import Link from "next/link";

const PricingExtr = () => {
  return (
    <div className="flex justify-center items-center gap-10">
      <div className="flex flex-col gap-16 px-6 py-6 bg-white w-80 h-full rounded-2xl shadow-2xl shadow-zinc-400">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-lg">Essentials</h2>
          <h1 className="font-bold text-3xl">$97</h1>
          <h3 className="text-gray-600 text-base">Software Included</h3>
        </div>
        <div className="flex flex-col gap-3 text-base">
          <p className="flex gap-2"><span className="text-green-400">✔</span>Business Setup & Integration</p>
          <p className="flex gap-2"><span className="text-green-400">✔</span>CRM & Pipeline</p>
          <p className="flex gap-2"><span className="text-green-400">✔</span>Website Builder</p>
          <p className="flex gap-2"><span className="text-green-400">✔</span>Course Builder</p>
          <p className="flex gap-2"><span className="text-green-400">✔</span>Automation Builder</p>
          <p className="flex gap-2"><span className="text-green-400">✔</span>All-In-One Conversations</p>
          <p className="flex gap-2"><span className="text-green-400">✔</span>Task Management</p>
          <p className="flex gap-2"><span className="text-green-400">✔</span>Calendar Management</p>
          <p className="flex gap-2"><span className="text-green-400">✔</span>24/7 Live Chat & Zoom Support</p>
        </div>
        <div className="mt-0 flex justify-center items-center">
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r bg-black px-20 py-2 text-lg font-medium text-white shadow-sm hover:from-indigo-500 hover:via-purple-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <Link href="https://app.krigen.ai/" target="_blank">
              Get Started
            </Link>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-16 px-6 py-6 bg-white w-80 h-full rounded-2xl shadow-2xl shadow-zinc-600">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-lg">Professional</h2>
          <h1 className="font-bold text-3xl">$297</h1>
          <h3 className="text-gray-600 text-base">Software, AI & Automations</h3>
        </div>
        <div className="flex flex-col gap-3 text-base">
          <p className="flex gap-2"><span className="text-green-400">✔</span>Business Setup & Integration</p>
          <p className="flex gap-2"><span className="text-green-400">✔</span>CRM & Pipeline</p>
          <p className="flex gap-2"><span className="text-green-400">✔</span>Website Builder</p>
          <p className="flex gap-2"><span className="text-green-400">✔</span>Course Builder</p>
          <p className="flex gap-2"><span className="text-green-400">✔</span>Automation Builder</p>
          <p className="flex gap-2"><span className="text-green-400">✔</span>All-In-One Conversations</p>
          <p className="flex gap-2"><span className="text-green-400">✔</span>Task Management</p>
          <p className="flex gap-2"><span className="text-green-400">✔</span>Calendar Management</p>
          <p className="flex gap-2"><span className="text-green-400">✔</span>24/7 Live Chat & Zoom Support</p>
        </div>
        <div className="mt-0 flex justify-center items-center">
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r bg-black px-20 py-2 text-lg font-medium text-white shadow-sm hover:from-indigo-500 hover:via-purple-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <Link href="https://app.krigen.ai/" target="_blank">
              Get Started
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingExtr;
