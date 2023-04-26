import { IPlatforms } from "@/shared/types";

type FormProps = {
  formValues: IPlatforms;
  onChangeHandler: (name: string, value: string) => void;
  onSubmitHandler: () => void;
  addNewTitle?: boolean;
  isEditing?: boolean;
};

function FormNewEditPlatform({
  formValues,
  onChangeHandler,
  onSubmitHandler,
  addNewTitle,
  isEditing,
}: FormProps) {
  return (
    <form className="w-full">
      <div className="my-8 text-center w-full">
        <h2 className="text-xl font-semibold text-blue-700">
          {addNewTitle
            ? "New Platform"
            : `Editing platform ${formValues.platformName}`}
        </h2>
      </div>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Platform ID
          </label>
          <input
            type="text"
            name="platformID"
            value={formValues.platformID}
            readOnly
            onChange={(e) => {
              onChangeHandler(e.target.name, e.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Platform Name
          </label>
          <input
            type="text"
            name="platformName"
            readOnly={isEditing ? true : false}
            value={formValues.platformName}
            onChange={(e) => {
              onChangeHandler(e.target.name, e.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Auth Entry Point
          </label>
          <input
            type="text"
            name="authEntryPoint"
            value={formValues.authEntryPoint}
            onChange={(e) => {
              onChangeHandler(e.target.name, e.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Content Entry Point
          </label>
          <input
            type="text"
            name="contentEntryPoint"
            value={formValues.contentEntryPoint}
            onChange={(e) => {
              onChangeHandler(e.target.name, e.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Presentation
          </label>
          <select
            name="presentation"
            value={formValues.presentation}
            disabled={isEditing ? true : false}
            onChange={(e) => {
              onChangeHandler(e.target.name, e.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <option selected>Pick an option</option>
            <option value="Embedded">Embedded</option>
            <option value="NewWindow">NewWindow</option>
            <option value="SameWindow">SameWindow</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            State
          </label>
          <select
            name="platformState"
            value={formValues.platformState}
            onChange={(e) => {
              onChangeHandler(e.target.name, e.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <option selected>Pick an option</option>
            <option value="Construction">Construction</option>
            <option value="Active">Active</option>
            <option value="Deprecated">Deprecated</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onSubmitHandler();
        }}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Submit
      </button>
    </form>
  );
}

export default FormNewEditPlatform;
