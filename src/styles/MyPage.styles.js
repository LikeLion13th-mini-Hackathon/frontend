import styled from "styled-components";
import { Button } from "../components/Button";

export const Container = styled.div`
  padding: 3vh;
  padding-top: 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  flex: 1;
  text-align: center;
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2vh;
  margin-top: 2vh;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  font-weight: bold;
`;

export const Email = styled.div`
  font-size: 12px;
  color: #767676;
`;

export const Divider = styled.hr`
  margin: 3vh 0;
  border: none;
  border-top: 0.5px solid #767676;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

export const SectionTitle = styled.div`
  font-size: 15px;
  font-weight: 900;
  margin-bottom: 1vh;
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vh 0;
  position: relative;
`;

export const Label = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

export const Value = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #140b77;
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
`;

export const ChangeSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1vh;
`;

export const ChangeText = styled.div`
  font-size: 12px;
  color: #767676;
  cursor: pointer;
`;

export const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vh 0;
  font-size: 14px;
  cursor: pointer;
`;
