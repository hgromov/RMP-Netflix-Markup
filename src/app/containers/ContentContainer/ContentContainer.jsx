import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  useParams,
} from 'react-router-dom';
import Content from '../../components/Content/Content';
import { moviesSelector } from '../../../store/selectors';
import {
  getMoviesList,
  showEditPopup,
  showDeletePopup,
  getMovieDetails,
  fetchByGenre,
  fetchWithSorting,
  fetchByQuery,
} from '../../../store/actions';

const ContentContainer = () => {
  const { query } = useParams();
  const movies = useSelector(moviesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesList());
  }, []);
  useEffect(() => {
    dispatch(fetchByQuery(query));
  }, [query]);
  const dispatchShowEditPopup = useCallback((id) => {
    dispatch(showEditPopup(id));
  });
  const dispatchShowDeletePopup = useCallback((id) => {
    dispatch(showDeletePopup(id));
  });
  const dispatchShowMovieDetails = useCallback((id) => {
    dispatch(getMovieDetails(id));
  });
  const dispatchFilterByGenre = useCallback((genre) => {
    dispatch(fetchByGenre(genre));
  });
  const dispatchFetchWithSorting = useCallback((e) => {
    const { value: keyWord } = e.target;
    dispatch(fetchWithSorting(keyWord));
  });

  return (
    <Content
      handleSubmitFilter={dispatchFilterByGenre}
      handleSubmitSort={dispatchFetchWithSorting}
      movies={movies}
      showMovieDetails={dispatchShowMovieDetails}
      showEditPopup={dispatchShowEditPopup}
      showDeletePopup={dispatchShowDeletePopup}
    />
  );
};

export default ContentContainer;
