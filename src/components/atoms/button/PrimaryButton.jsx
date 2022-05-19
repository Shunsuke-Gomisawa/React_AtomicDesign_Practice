import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;

  return <SButton>{children}</SButton>;
};

//ここからスタイルを当てる(CSSを書いていく)
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
