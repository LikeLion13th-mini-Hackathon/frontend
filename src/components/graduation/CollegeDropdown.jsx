import { useEffect, useState } from "react";
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
import axios from "axios";

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

  const [collegeList, setCollegeList] = useState([]); // 전체 단과대학 목록
  const [majorList, setMajorList] = useState([]); // 선택된 단과대학의 학과 목록
  const [collegeMap, setCollegeMap] = useState({}); // 단과대학 이름 → ID 매핑

  // ✅ 단과대학 목록 조회
  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const res = await axios.get("http://34.227.53.193:8081/api/colleges");
        const names = res.data.data.map((item) => item.name);
        setCollegeList(names);

        // 이름 → ID 매핑 객체
        const mapping = {};
        res.data.data.forEach((item) => {
          mapping[item.name] = item.id;
        });
        setCollegeMap(mapping);
      } catch (err) {
        console.error("단과대학 목록 불러오기 실패:", err);
      }
    };

    fetchColleges();
  }, []);

  // ✅ 학과 목록 조회
  const selectCollege = async (c) => {
    setCollege(c);
    setMajor("");
    setIsMajorOpen(true);

    const collegeId = collegeMap[c];
    if (!collegeId) return;

    try {
      const res = await axios.get(
        `http://34.227.53.193:8081/api/departments/by-college?collegeId=${collegeId}`
      );
      const majors = res.data.map((dept) => dept.name);
      setMajorList(majors);
    } catch (err) {
      console.error("학과 목록 불러오기 실패:", err);
      setMajorList([]);
    }
  };

  const selectMajor = (m) => {
    setMajor(m);
  };

  const toggleCollege = () => setIsCollegeOpen(!isCollegeOpen);
  const toggleMajor = () => setIsMajorOpen(!isMajorOpen);

  return (
    <DropdownContainer>
      {/* 단과대학 드롭다운 */}
      <div>
        <DropdownHeader onClick={toggleCollege}>
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
                key={c}
                isSelected={college === c}
                onClick={() => selectCollege(c)}
              >
                {c}
              </SelectButton>
            ))}
          </ButtonList>
        )}
      </div>

      {/* 학과 드롭다운 */}
      <div>
        <DropdownHeader onClick={toggleMajor}>
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
        {isMajorOpen && college && (
          <ButtonList>
            {majorList.map((m) => (
              <SelectButton
                key={m}
                isSelected={major === m}
                onClick={() => selectMajor(m)}
              >
                {m}
              </SelectButton>
            ))}
          </ButtonList>
        )}
      </div>

      {/* 조회 버튼 */}
      {college && isMajorOpen && (
        <SearchButtonContainer>
          <SearchButton disabled={!college || !major} onClick={onSearch}>
            조회하기
          </SearchButton>
        </SearchButtonContainer>
      )}
    </DropdownContainer>
  );
}
