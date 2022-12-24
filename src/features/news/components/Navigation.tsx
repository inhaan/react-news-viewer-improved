import { useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const menus = [
  { url: "/react-news-viewer-improved", name: "전체보기" },
  { url: "/react-news-viewer-improved/business", name: "비즈니스" },
  { url: "/react-news-viewer-improved/entertainment", name: "엔터테인먼트" },
  { url: "/react-news-viewer-improved/health", name: "건강" },
  { url: "/react-news-viewer-improved/science", name: "과학" },
  { url: "/react-news-viewer-improved/sports", name: "스포츠" },
  { url: "/react-news-viewer-improved/technology", name: "기술" },
];

const Container = styled.ul`
  display: flex;
  gap: 1rem;
  padding: 1rem;
`;

const MenuLink = styled(Link)`
  font-size: 1.1rem;
  font-weight: 600;

  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }
  &.active {
    border-bottom: 2px solid #22b9cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }
`;

const Navigation = () => {
  const { pathname } = useLocation();

  const isActive = useCallback((currentUrl: string, checkUrl: string) => {
    return [checkUrl, checkUrl + "/"].includes(currentUrl);
  }, []);

  return (
    <Container>
      {menus.map((menu) => (
        <li key={menu.url}>
          <MenuLink
            to={menu.url}
            className={isActive(pathname, menu.url) ? "active" : ""}
          >
            {menu.name}
          </MenuLink>
        </li>
      ))}
    </Container>
  );
};

export default Navigation;
