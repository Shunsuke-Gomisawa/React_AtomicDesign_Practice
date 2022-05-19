import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
import styled from "styled-components";

export const SearchInput = () => {
  return (
    // ボタンとテキストボックスを用意したい
    <SContainer>
      <Input placeholder="検索条件を入力" />
      {/* 下は＜button＞でもいいけど、
      せっかくアトミックパーツを作ったので使ってみる */}
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

//上記のdiv内にて使える、検索ボックスボタンとの余白を生み出させる
const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
