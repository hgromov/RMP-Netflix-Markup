import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getMovieDetails, hideMovieDetails } from './movieDetails';
import { SHOW_MOVIE_DETAILS, HIDE_MOVIE_DETAILS } from '../../types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const movieId = 313369;

const movie = {
  title: 'La La Land',
  tagline: "Here's to the fools who dream.",
  voteAverage: 7.9,
  date: '2016-12-29',
  posterPath: 'https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg',
  overview:
    'Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.',
  budget: 30000000,
  revenue: 445435700,
  runtime: 128,
  genres: ['Comedy', 'Drama', 'Romance'],
  id: movieId,
};

describe('Movie details', () => {
  it('should get a specific movie by id when getMovieDetails action called', (done) => {
    const mockSuccessResponse = movie;
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    const store = mockStore(null);

    const expectedActions = [{
      payload: movie,
      type: SHOW_MOVIE_DETAILS,
    }];

    return store.dispatch(getMovieDetails(movieId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      global.fetch.mockClear();
      done();
    });
  });

  it('should clear store when executing hideMovieDetails action', () => {
    const store = mockStore(null);
    store.dispatch(hideMovieDetails());

    const expectedActions = [{
      type: HIDE_MOVIE_DETAILS,
    }];

    expect(store.getActions()).toEqual(expectedActions);
  });
});
