import { IPlatforms } from "@/shared/types";
import { Table } from "flowbite-react";

type PlatformsProps = {
  data: IPlatforms[];
  handleViewClick: (id: string) => void;
  handleUpdateClick: (id: string) => void;
  handleDeleteClick: (id: string) => void;
};

function ListPlatforms({
  data,
  handleViewClick,
  handleUpdateClick,
  handleDeleteClick,
}: PlatformsProps) {
  return (
    <div className="flex justify-center">
      <Table hoverable={true}>
        <Table.Head className="text-center">
          <Table.HeadCell>Platform ID</Table.HeadCell>
          <Table.HeadCell>Platform Name</Table.HeadCell>
          <Table.HeadCell>Link Content</Table.HeadCell>
          <Table.HeadCell>Presentation</Table.HeadCell>
          <Table.HeadCell>State</Table.HeadCell>
          <Table.HeadCell>
            <span>Actions</span>
          </Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y">
          {data &&
            data.map((value) => (
              <Table.Row key={value._id} className="bg-white">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                  {value.platformID}
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                  {value.platformName}
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap font-medium text-blue-600 hover:underline hover:cursor-pointer">
                  <a href={value.contentEntryPoint} target="_blank">
                    {value.contentEntryPoint}
                  </a>
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                  {value.presentation}
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                  {value.platformState}
                </Table.Cell>

                <Table.Cell className="flex gap-3">
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                    <span
                      onClick={(_event: React.MouseEvent<HTMLSpanElement>) =>
                        handleViewClick(value.platformID)
                      }
                      className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Info
                    </span>
                  </button>

                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span
                      onClick={(_event: React.MouseEvent<HTMLSpanElement>) =>
                        handleUpdateClick(value.platformID)
                      }
                      className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Edit
                    </span>
                  </button>

                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span
                      onClick={(_event: React.MouseEvent<HTMLSpanElement>) =>
                        handleDeleteClick(value.platformID)
                      }
                      className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Delete
                    </span>
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ListPlatforms;
