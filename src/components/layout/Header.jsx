import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">HOME</SLink>
      <SLink to="/users">USERS</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

//"Link"はreact-ryter-domの中のコンポーネントである。
//既存のコンポーネントの拡張をする場合はstyledの後に（）を使う！！
const SLink = styled(Link)`
  margin: 0 8px;
`;
