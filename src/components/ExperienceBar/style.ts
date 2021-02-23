import styled, { css } from 'styled-components';

interface SpanExperienceProps {
  left: string;
}

interface SpanExperienceConteinerProps {
  width: string;
}

export const Header = styled.header`
  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  font-size: 1rem;
`;

export const Line = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: var(--gray-line);
  margin: 0 1.5rem;
  position: relative;
`;

export const SpanExperienceConteiner = styled.div<SpanExperienceConteinerProps>`
  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : css`
          width: 0;
        `}
  height: 4px;
  border-radius: 4px;
  background: var(--green);
`;

export const SpanExperience = styled.span<SpanExperienceProps>`
  position: absolute;
  top: 12px;
  ${({ left }) =>
    left
      ? css`
          left: ${left};
        `
      : css`
          left: 0;
        `}
  transform: translateX(-50%);
`;
