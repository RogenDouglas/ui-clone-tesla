import React from "react";

export interface ColorModel {
  modelName: string;
  overlayNode: React.ReactNode;
  sectionRef: React.RefObject<HTMLElement>;
}

interface ModelsContext {
  wrapperRef: React.RefObject<HTMLElement>;
  registeredModels: ColorModel[];
  registerModel: (model: ColorModel) => void;
  unregisterModel: (modelName: string) => void;
  getModelByName: (modelName: string) => ColorModel | null;
}

export default React.createContext<ModelsContext>({} as ModelsContext);
