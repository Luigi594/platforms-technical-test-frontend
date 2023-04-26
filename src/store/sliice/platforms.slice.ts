import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface PlatFormSelected {
  selectedId: string;
}

const initialState: PlatFormSelected = {
  selectedId: "",
};

export const platformSlice = createSlice({
  name: "platform",
  initialState,
  reducers: {
    setSelectedId: (state, action: PayloadAction<PlatFormSelected>) => {
      state.selectedId = action.payload.selectedId;
    },
  },
});

export const { setSelectedId } = platformSlice.actions;
export const selectePlatform = (state: RootState) => state.id.selectedId;
export default platformSlice.reducer;
