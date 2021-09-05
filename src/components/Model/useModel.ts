import { useCallback, useContext, useEffect } from "react";

import ModelsContext, { ColorModel } from "./ModelsContext";

interface useModelReturn {
  registerModel: (model: ColorModel) => void;
  getModel: () => ColorModel | null;
}

const useModel = (modelName: string): useModelReturn => {
  const { registerModel, unregisterModel, getModelByName } =
    useContext(ModelsContext);

  const getModel = useCallback(() => {
    return getModelByName(modelName);
  }, [modelName, getModelByName]);

  useEffect(() => {
    return unregisterModel(modelName);
  }, [modelName, unregisterModel]);

  return {
    registerModel,
    getModel,
  };
};

export default useModel;
