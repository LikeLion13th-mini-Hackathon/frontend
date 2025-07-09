// 졸업요건 페이지 - 단과대/학과 드롭다운
import { useEffect, useState } from "react";
import { fetchColleges, fetchMajorsByCollegeId } from "../../api/graduation";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LuSchool } from "react-icons/lu";
import { MdOutlineBook } from "react-icons/md";
import {
  DropdownHeader,
  DropdownText,
  SelectButton,
  ButtonList,
  DropdownContainer,
  SearchButton,
  SearchButtonContainer,
} from "../../styles/Graduation.styles";

export default function CollegeDropdown({
  collegeState,
  majorState,
  dropdownState,
  onSearch,
}) {
  const { college, setCollege } = collegeState;
  const { major, setMajor } = majorState;
  const { isCollegeOpen, setIsCollegeOpen, isMajorOpen, setIsMajorOpen } =
    dropdownState;

  const [collegeList, setCollegeList] = useState([]);
  const [majorList, setMajorList] = useState([]);

  // 단과대학 목록 조회 API
  useEffect(() => {
    const loadColleges = async () => {
      try {
        const data = await fetchColleges();
        setCollegeList(data);
        if (data.length > 0) {
          setCollege(data[0]); // 객체 전체 저장
        }
      } catch (err) {
        console.error("❌ 단과대학 목록 조회 실패:", err);
      }
    };

    loadColleges();
  }, [setCollege]);

  // 학과 목록 조회 API
  useEffect(() => {
    const loadMajors = async () => {
      if (!college?.id) return;
      try {
        const data = await fetchMajorsByCollegeId(college.id);
        setMajorList(data);
        if (data.length > 0) {
          setMajor(data[0]);
        }
      } catch (err) {
        console.error("❌ 학과 목록 조회 실패:", err);
        setMajorList([]);
      }
    };

    loadMajors();
  }, [college, setMajor]);

  return (
    <DropdownContainer>
      {/* 단과대학 드롭다운 */}
      <div>
        <DropdownHeader onClick={() => setIsCollegeOpen(!isCollegeOpen)}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <LuSchool size={20} color="#140B77" />
            <DropdownText>단과대학</DropdownText>
          </div>
          {isCollegeOpen ? (
            <IoIosArrowUp size={20} color="#140B77" />
          ) : (
            <IoIosArrowDown size={20} color="#140B77" />
          )}
        </DropdownHeader>
        {isCollegeOpen && (
          <ButtonList>
            {collegeList.map((c) => (
              <SelectButton
                key={c.id}
                $isSelected={college?.id === c.id}
                onClick={() => {
                  setCollege(c);
                  setIsMajorOpen(true);
                }}
              >
                {c.name}
              </SelectButton>
            ))}
          </ButtonList>
        )}
      </div>

      {/* 학과 드롭다운 */}
      <div>
        <DropdownHeader onClick={() => setIsMajorOpen(!isMajorOpen)}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <MdOutlineBook size={20} color="#140B77" />
            <DropdownText>학과</DropdownText>
          </div>
          {isMajorOpen ? (
            <IoIosArrowUp size={20} color="#140B77" />
          ) : (
            <IoIosArrowDown size={20} color="#140B77" />
          )}
        </DropdownHeader>
        {isMajorOpen && (
          <ButtonList>
            {majorList.map((m) => (
              <SelectButton
                key={m.id}
                $isSelected={major === m.name}
                onClick={() => setMajor(m.name)}
              >
                {m.name}
              </SelectButton>
            ))}
          </ButtonList>
        )}
      </div>

      {/* 조회 버튼 */}
      {college && major && (
        <SearchButtonContainer>
          <SearchButton onClick={onSearch}>조회하기</SearchButton>
        </SearchButtonContainer>
      )}
    </DropdownContainer>
  );
}
