import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
`;

export const UserInformations = styled.div`
  margin-left: 1.5rem;
`;

export const UserName = styled.strong`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--title);
`;

export const Level = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

export const LevelIcon = styled.img`
  margin-right: 0.5rem;
`;
