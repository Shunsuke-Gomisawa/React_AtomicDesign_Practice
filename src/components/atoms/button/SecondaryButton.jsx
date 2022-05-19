import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;

  return <SButton onClick={onClick}>{children}</SButton>;
};

//ここからスタイルを当てる(CSSを書いていく)
const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
