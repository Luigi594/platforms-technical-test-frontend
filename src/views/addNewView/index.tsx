import FormNewEditPlatform from "@/components/formNewEditPlatform";
import { IPlatforms } from "@/shared/types";
import { useAddNewPlatformMutation } from "@/store/services/platforms";
import { useState } from "react";
import { v4 as uuid4 } from "uuid";
import { useNavigate } from "react-router-dom";

function AddNewView() {
  const [formValues, setFormValues] = useState<IPlatforms>({
    platformID: uuid4(),
    platformName: "",
    authEntryPoint: "",
    contentEntryPoint: "",
    presentation: "",
    platformState: "",
  });

  const [newPlatform, { error }] = useAddNewPlatformMutation();

  const Navigate = useNavigate();

  const onChangeHandler = (name: string, value: string) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmitHandler = async () => {
    try {
      await newPlatform(formValues).unwrap();
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (error) return Navigate("/error");

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex justify-center items-center">
        <div className="w-[550px]">
          <FormNewEditPlatform
            formValues={formValues}
            onChangeHandler={onChangeHandler}
            onSubmitHandler={onSubmitHandler}
            addNewTitle={true}
          />
        </div>
      </div>
    </div>
  );
}

export default AddNewView;
