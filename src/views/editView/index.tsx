import { IPlatforms } from "@/shared/types";
import {
  useGetPlatformByIdQuery,
  useUpdatePlatformMutation,
} from "@/store/services/platforms";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectePlatform } from "@/store/sliice/platforms.slice";
import { useNavigate } from "react-router-dom";
import FormNewEditPlatform from "@/components/formNewEditPlatform";

function UpdateView() {
  const selectedId = useSelector(selectePlatform);
  const { data } = useGetPlatformByIdQuery(selectedId);

  const [formValues, setFormValues] = useState<IPlatforms>({
    ...data,
  });

  useEffect(() => {
    if (data) {
      setFormValues({
        _id: data._id,
        platformID: data.platformID,
        platformName: data.platformName,
        authEntryPoint: data.authEntryPoint,
        contentEntryPoint: data.contentEntryPoint,
        presentation: data.presentation,
        platformState: data.platformState,
      });
    }
  }, [data]);

  const [update, { error }] = useUpdatePlatformMutation();

  const Navigate = useNavigate();

  const onChangeHandler = (name: string, value: string) => {
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitHandler = async () => {
    try {
      await update(formValues).unwrap();
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (error) {
    return (
      <div>
        <p>Something went wrong with updating the item</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex justify-center items-center">
          <div className="w-[550px]">
            <FormNewEditPlatform
              formValues={formValues}
              onChangeHandler={onChangeHandler}
              onSubmitHandler={onSubmitHandler}
              isEditing={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateView;
