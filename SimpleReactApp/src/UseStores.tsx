import { useContext } from "react";
import { rootStoreContext } from "./Context";

export const useStores = () => useContext(rootStoreContext);