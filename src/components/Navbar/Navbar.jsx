import { BiStore, BiArrowBack, BiSearch, BiUser } from "react-icons/bi";
import {
  LogoContainer,
  NavbarContainer,
  IconContainer,
  NavButton,
  LogoTitle,
  SearchBarContainer,
  SearchBar,
  IconSearchContainer,
  UserButtonContainer,
  UserButton,
} from "./NavbarStyles";
const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <NavButton>
          <IconContainer>
            <BiArrowBack />
          </IconContainer>
        </NavButton>
        <IconContainer>
          <BiStore />
        </IconContainer>
        <LogoTitle>Microsoft Store</LogoTitle>
      </LogoContainer>
      <SearchBarContainer>
        <SearchBar
          placeholder="Search apps, games, movies and more"
          type="text"
        />
        <IconSearchContainer>
          <NavButton noPadding>
            <IconContainer>
              <BiSearch />
            </IconContainer>
          </NavButton>
        </IconSearchContainer>
      </SearchBarContainer>
      <UserButtonContainer>
        <UserButton>
          <IconContainer>
            <BiUser />
          </IconContainer>
        </UserButton>
      </UserButtonContainer>
    </NavbarContainer>
  );
};

export default Navbar;
