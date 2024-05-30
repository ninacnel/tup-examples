import Header from "../header/Header";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header/>
      {children}
    </>
  );
};

export default MainLayout;

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
