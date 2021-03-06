import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import HeaderContainer from '../containers/HeaderContainer/HeaderContainer';
import ContentContainer from '../containers/ContentContainer/ContentContainer';
import Footer from '../components/Footer/Footer';
import Search from '../components/Search/Search';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import AddMoviePopupContainer from '../containers/popups/AddMoviePopupContainer/AddMoviePopupContainer';
import EditMoviePopupContainer from '../containers/popups/EditMoviePopupContainer/EditMoviePopupContainer';
import DeleteMoviePopupContainer from '../containers/popups/DeleteMoviePopupContainer/DeleteMoviePopupContainer';
import { isBlurSelector } from '../../store/selectors';

const Layout = ({ children }) => {
  const isBlur = useSelector(isBlurSelector);

  return (
    <>
      <div className={isBlur}>
        <ErrorBoundary>
          <HeaderContainer>
            {children}
          </HeaderContainer>
          <ContentContainer />
        </ErrorBoundary>
        <Footer />
      </div>
      <AddMoviePopupContainer />
      <EditMoviePopupContainer />
      <DeleteMoviePopupContainer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

Layout.defaultProps = {
  children: <Search />,
};

export default Layout;
