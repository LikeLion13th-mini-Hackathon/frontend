import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-radius: 18px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  margin: 0 2vh;
  padding: 2vh;
  position: relative;
  min-height: calc(100vh - 200px);
`;

const Divider = styled.div`
  height: 0.5px;
  width: auto;
  background-color: #A6A6AB;
  margin: 3vh 0; 
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #140b77;
  margin: 1vh;
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 600;
  color:#767676;
  margin: 0 1vh;
`;

const Content = styled.div`
  font-size: 16px;
  line-height: 1.5; 
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  flex: 1;
  margin: 0 1vh;
`;

const HeaderButtonWrapper = styled.div`
  margin-left: auto;
`;

const BottomButtonWrapper = styled.div`
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
`;

const NoteCard = ({
  title,
  date = "",
  content,
  headerButton = null,  // 헤더에 있는 버튼
  bottomButton = null,  // 하단에 있는 버튼
}) => {
  return (
    <CardContainer>
      <CardHeader>
        {headerButton && (
          <HeaderButtonWrapper>
            {headerButton}
          </HeaderButtonWrapper>
        )}
        <Title>{title}</Title>
        {date && <Date>{date}</Date>}
      </CardHeader>
      <Divider />
      <Content>{content}</Content>
      {bottomButton && (
        <BottomButtonWrapper>
          {bottomButton}
        </BottomButtonWrapper>
      )}
    </CardContainer>
  );
};

export default NoteCard;