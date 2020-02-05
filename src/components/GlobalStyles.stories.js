import React from "react";
import GlobalStyles, { Colors } from "./GlobalStyles";
import styled, { css } from "styled-components";

export default {
  title: "Color Scheme"
};

const commonTileStyle = css`
  width: 200px;
  height: 200px;
  border-radius: 4px;
  margin: 5px;
`;

const ColorTile = styled.div`
	${commonTileStyle}
	background: ${props => props.bg || "black"};
`;

const TextTitle = styled.div`
  ${commonTileStyle}
  font-size: 1.8rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => {
    const color = props.color || "black";
    return `
      border: 4px solid ${color};
      color: ${color};
    `;
  }}
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ColorScheme = () => {
  return (
    <div>
      <Wrapper>
        <ColorTile bg={Colors.superDark} />
        <ColorTile bg={Colors.dark} />
        <ColorTile bg={Colors.mid} />
        <ColorTile bg={Colors.lightMid} />
        <ColorTile bg={Colors.light} />
      </Wrapper>
      <Wrapper>
        <TextTitle color={Colors.superDark}>Super Dark</TextTitle>
        <TextTitle color={Colors.dark}>Dark</TextTitle>
        <TextTitle color={Colors.mid}>Mid</TextTitle>
        <TextTitle color={Colors.lightMid}>Light Mid</TextTitle>
        <TextTitle color={Colors.light}>Light</TextTitle>
      </Wrapper>
    </div>
  );
};
