//ここに2種類のボタンの共通化できるところを抜き出す
import styled from "styled-components";

//ここから全ボタンに共通するスタイルを当てる(CSSを書いていく)
export const BaseButton = styled.button`
  color: #fff;
  padding: 6px 24px;
  border-radius: 99999px;
  border: none;
  /* ここからSASS（疑似クラス） */
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
