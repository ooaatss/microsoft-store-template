import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.2rem 1rem;
  
  background-color: ${(props) => props.theme.colors.primary};
  
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
`;
export const IconContainer = styled.div`
  width: 20px;
  height: 20px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.1rem")};
  text-align: center;
  color: white;
`;
export const NavButton = styled.button`
  display: inline;
  background-color: transparent;
  border: none;
  padding: ${(props) => (props.noPadding ? "0" : "8px")};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.white};
  }
`;
export const LogoTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  color: ${(props) => props.theme.colors.white};
`;

export const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 600px;
`;

export const IconSearchContainer = styled.div`
  position: absolute;
  right: 10px;
`;
export const SearchBar = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  outline: none;
  padding: 0 10px;
  color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.secondary};
  font-size: 14px;
`;

export const UserButtonContainer = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.colors.secondary_highlight};
  border-radius: 50%;
`;

export const UserButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
