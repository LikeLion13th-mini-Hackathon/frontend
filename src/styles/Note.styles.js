import styled from "styled-components";

export const NoteContainer = styled.div`
  padding: 3vh;
  padding-top: 0;
`;

export const NoteHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const NoteTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

export const NoteCard = styled.div`
  height: 68vh;
  border-radius: 12px;
  padding: 2.5vh;
  padding-top: 0.5vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`;

export const NoteContent = styled.p`
  font-size: 15px;
  line-height: 1.8;
  white-space: pre-wrap;
`;

export const EditButton = styled.button`
  position: absolute;
  bottom: 12vh;
  right: 5vh;
  background-color: #2d2d8f;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
