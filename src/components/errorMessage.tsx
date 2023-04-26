import { Link } from "react-router-dom";

function ErrorMessage() {
  return (
    <div className="my-32 flex justify-center">
      <div className="max-w-2xl bg-slate-50 text-slate-900 p-10 rounded-md shadow-md shadow-slate-300">
        <span className="text-xl font-semibold">Error Message</span>
        <p className="py-5">
          Something went wrong with the operation you wanted to do. Check the
          next items to ensure everything is correct:
        </p>

        <ul className="max-w-md space-y-1 text-slate-700 list-disc list-inside">
          <li>The Platforms'name is not equal to an existing one</li>
          <li>You filled up all the form fields</li>
          <li>
            Platform Presentation is one of the following:{" "}
            <span className="font-semibold">
              "Embedded" | "NewWindow" | "SameWindow"
            </span>
          </li>
          <li>
            Platform State is one of the following:{" "}
            <span className="font-semibold">
              "Construction" | "Active" | "Deprecated"
            </span>
          </li>
        </ul>

        <div className="py-5 bg-transparent text-blue-800 font-semibold text-lg underline decoration-slate-400">
          <Link to={"/new-platform"}>Please try again</Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorMessage;
