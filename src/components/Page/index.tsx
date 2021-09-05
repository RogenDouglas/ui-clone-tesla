import React, { useEffect, useState } from "react";
import DefaultOverlayContent from "../DefaultOverlayContent";
import { ModelSection, ModelsWrapper } from "../Model";
import UniqueOverlay from "../UniqueOverlay";

import { Container } from "./styles";

import data from "../../data/data.json";

interface IColor {
  id: number;
  name: string;
  description: string;
  color: string;
}

const Page: React.FC = () => {
  const [listColors, setListColors] = useState<IColor[]>([]);

  useEffect(() => {
    setListColors(data);
  }, []);

  return (
    <Container>
      <ModelsWrapper>
        <div>
          {listColors.map((color) => (
            <ModelSection
              key={color.id}
              modelName={color.name}
              overlayNode={
                <DefaultOverlayContent
                  label={color.name}
                  description={color.description}
                  color={color.color}
                />
              }
            />
          ))}
        </div>
        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
