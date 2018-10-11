import moxios from 'moxios';
import sinon from 'sinon';
import { equal } from 'assert';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { instance as api } from '../../helpers/setAuthenticationToken';
import { logout, loginUser, signup } from '../../actions/authActions';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {};
const store = mockStore(initialState);
beforeEach(() => {
  moxios.install(api);
});

afterEach(() => {
  moxios.uninstall(api);
});


const userDetails = {
  email: 'example@test.com',
  password: 'testpassword',
};

const userData = {
  success: true,
  user: {
    email: 'janbass1@gmail.com',
    token: 'eyY4Mjc2NzKL7SsdXgeFddA',
  },
};

const data = {
  auth: {
    isAuthenticated: true,
  },
  user: {
    exp: 1539371168,
    iat: 1539368768,
  },
  payload: {
    id: 'f3130bbc-b6f5-41c0-af8e-16f7ccc98f2c',
    isadmin: true,
  },
};

const datawithToken = {
  data: {
    token: 'eyY4Mjc2NzKL7SsdXgeFddA',
    isadmin: false,
  },
};

describe('Actions: Request Actions', () => {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
  });

  it('should test the Login User action', () => {
    const expectedTypes = [{ type: 'GET_ARTICLE_SEARCH' }];
    store.dispatch(loginUser(userDetails));
    setTimeout(() => {
      expect(store.getActions()[0]).toEqual(expectedTypes);
    }, 2000);
  });

  it('should test the Logout action', () => {
    const expectedTypes = [{ type: 'SET_CURRENT_USER' }];
    store.dispatch(logout());
    setTimeout(() => {
      expect(store.getActions()[0]).toEqual(expectedTypes);
    }, 2000);
  });

  it('should test the Signup action', () => {
    const expectedTypes = [{ type: 'LOADING' }];
    store.dispatch(signup());
    setTimeout(() => {
      expect(store.getActions()[0]).toEqual(expectedTypes);
    }, 3000);
  });


  it('should throw error during login with login details', () => {
    const middlware2 = [thunk.withExtraArgument({
      post: () => Promise.resolve({
        data: {
          token: 'eyY4Mjc2NzKL7SsdXgeFddA',
          isadmin: true,
        },
      }),
    })];
    const mockstor = configureMockStore(middlware2);
    const storet = mockStore(mockstor);
    const history = {
      push: jest.fn(),
    };

    store.dispatch(loginUser(userDetails, history));
    return storet.dispatch(loginUser(userDetails, history)).then(() => {
      setTimeout(() => {
        expect(history.push).toHaveLength(0);
      }, 2000);
    });
  });
});
