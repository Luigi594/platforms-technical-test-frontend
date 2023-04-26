import { Dispatch, SetStateAction } from "react";
import { useGetPlatformByIdQuery } from "@/store/services/platforms";
import { useSelector } from "react-redux";
import { selectePlatform } from "@/store/sliice/platforms.slice";
import Modal from "./Modal";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function ModalPlatformSelected({ isOpen, setIsOpen }: ModalProps) {
  const selectedId = useSelector(selectePlatform);
  const { data } = useGetPlatformByIdQuery(selectedId);

  return (
    <>{isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} data={data} />}</>
  );
}

export default ModalPlatformSelected;
