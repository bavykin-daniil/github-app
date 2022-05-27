//general
import { useDispatch } from "react-redux";
//types
import { AppDispatch } from "../store/types";

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
