import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store/Redusers";



export const useTypeSelector:TypedUseSelectorHook<RootState> = useSelector