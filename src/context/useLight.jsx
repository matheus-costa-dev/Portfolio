import { useContext } from "react";
import { LightContext } from "./lightContext";

export function useLight(){
    return useContext(LightContext)
}