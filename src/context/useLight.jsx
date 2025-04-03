import { useContext } from "react";
import { LightContext } from "./LightContext";

export function useLight(){
    return useContext(LightContext)
}