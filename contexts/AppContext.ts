import { createContext } from "react";
import type { AppContextType } from "@utils/types/context.types";

const AppContext = createContext<AppContextType>(null);

export default AppContext;
