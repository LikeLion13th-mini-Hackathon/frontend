// 학점 페이지 - 학점 카드
import {
  GpaCardWrapper,
  GpaSection,
  GpaLabel,
  GpaValue,
  GpaMax,
} from "../../styles/GPA.styles";

function GpaCard({ overall, credits }) {
  return (
    <GpaCardWrapper>
      <GpaSection>
        <GpaLabel>전체 평점</GpaLabel>
        <GpaValue>
          {overall}
          <GpaMax> / 4.5</GpaMax>
        </GpaValue>
      </GpaSection>
      <GpaSection>
        <GpaLabel>취득 학점</GpaLabel>
        <GpaValue>
          {credits}
          <GpaMax> / 150</GpaMax>
        </GpaValue>
      </GpaSection>
    </GpaCardWrapper>
  );
}

export default GpaCard;
