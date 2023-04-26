import ListPlatforms from "@/components/ListPlatforms";
import {
  useDeletePlatformMutation,
  useGetPlatformsQuery,
} from "@/store/services/platforms";
import { useDispatch } from "react-redux";
import { setSelectedId } from "@/store/sliice/platforms.slice";
import { useState } from "react";
import ModalPlatformSelected from "@/components/modalPlatformSelected";
import { useNavigate } from "react-router-dom";
import { Spinner } from "flowbite-react";

function MainView() {
  const [option, setOption] = useState<string>("All");
  const { data, isLoading } = useGetPlatformsQuery({ option });
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const Navigate = useNavigate();

  const handleViewClick = (id: string) => {
    if (id) {
      dispatch(setSelectedId({ selectedId: id }));
      setIsOpen(true);
    }
  };

  const handleUpdateClick = (id: string) => {
    if (id) {
      dispatch(setSelectedId({ selectedId: id }));
      Navigate("/update-platform");
    }
  };

  const [deletePlatform] = useDeletePlatformMutation();

  const handleDeleteClick = async (id: string) => {
    try {
      await deletePlatform(id);
    } catch (error) {}
  };

  if (isLoading)
    return (
      <div className="flex justify-center my-32">
        <Spinner aria-label="Extra large spinner example" size="xl" />;
      </div>
    );

  return (
    <div className="my-32">
      <div className="flex justify-center my-9">
        <div className="flex justify-evenly gap-3 w-64">
          <p>Filter by:</p>
          <select
            name="filter"
            value={option}
            onChange={(e) => {
              setOption(e.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <option value="All" defaultValue={"All"}>
              All
            </option>
            <option value="Construction">Construction</option>
            <option value="Active">Active</option>
            <option value="Deprecated">Deprecated</option>
          </select>
        </div>
      </div>

      <ListPlatforms
        data={data}
        handleViewClick={handleViewClick}
        handleUpdateClick={handleUpdateClick}
        handleDeleteClick={handleDeleteClick}
      />

      {isOpen && (
        <ModalPlatformSelected isOpen={isOpen} setIsOpen={setIsOpen} />
      )}

      <div className="flex justify-center mt-7">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200">
          <span
            onClick={() => Navigate("new-platform")}
            className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
            Add new
          </span>
        </button>
      </div>
    </div>
  );
}

export default MainView;
