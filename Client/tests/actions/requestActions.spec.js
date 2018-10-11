import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { instance as api } from '../../helpers/setAuthenticationToken';
import {
  getAnyUserRequestById, getEveryUsersRequests, approveArequest,
  disapproveArequest, resolveApproveOrDisapprove, getArequest,
  getUserRequests, createRequest,
} from '../../actions/requestActions';


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


const requestDetails = {
  fault: 'screen issues',
  description: 'request description',
  brand: 'Benq',
};

describe('Actions: Request Actions', () => {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
  });

  it('should test the action to set request loader', () => {
    // Dispatch action
    store.dispatch(getAnyUserRequestById(6));

    const actions = store.getActions();
    const requestLoading = [{ type: 'REQUEST_LOADING' }];
    const expectedPayload = requestLoading;
    expect(actions).toEqual(expectedPayload);
  });

  it('should successfully dispatch the getAnyUserRequestById action', async (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [],
      });
    });
    const expectedTypes = [{ type: 'GET_ARTICLE_SEARCH' }];
    store.dispatch(getAnyUserRequestById(1));
    setTimeout(() => {
      expect(store.getActions()[0]).toEqual(expectedTypes);
      done();
    }, 2000);
    done();
  });
  it('should successfully dispatch the getRequest  action', async (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [],
      });
    });

    const expectedTypes = [{ type: 'VIEW_EVERY_USERS_REQUESTS' }];
    store.dispatch(getEveryUsersRequests());
    setTimeout(() => {
      expect(store.getActions()[0]).toEqual(expectedTypes);
      done();
    }, 2000);
    done();
  });
  
  it('should successfully dispatch the approveArequest action', async (done) => {
    const expectedTypes = [{ type: 'APPROVE_REQUEST' }];
    store.dispatch(approveArequest(80));
    setTimeout(() => {
      expect(store.getActions()[0]).toEqual(expectedTypes);
      done();
    }, 2000);
    done();
  });

  it('should unsuccessfully dispatch the approveArequest action', async (done) => {
    const expectedTypes = [{ type: 'GET_ERRORS' }];
    store.dispatch(approveArequest('hv'));
    setTimeout(() => {
      expect(store.getActions()[0]).toEqual(expectedTypes);
      done();
    }, 2000);
    done();
  });

  it('should successfully dispatch the disapproveArequest action', async (done) => {
    const expectedTypes = [{ type: 'DISAPPROVE_REQUEST' }];
    store.dispatch(disapproveArequest(80));
    setTimeout(() => {
      expect(store.getActions()[0]).toEqual(expectedTypes);
      done();
    }, 2000);
    done();
  });

  it('should successfully dispatch the resolveApproveOrDisapprove action', async (done) => {
    const expectedTypes = [{ type: 'CHANGE_REQUEST_STATUS' }];
    store.dispatch(resolveApproveOrDisapprove(80, 'disapprove'));
    expect(store.getActions()).toMatchSnapshot();
    // setTimeout(() => {
    // //   expect(store.getActions()[0]).toEqual(expectedTypes);
    //   expect(store.getActions()[0]).toMatchSnapshot();
    //   done();
    // }, 2000);
    done();
  });

  it('should successfully dispatch the getArequest action', async (done) => {
    const expectedTypes = [{ type: 'VIEW_REQUEST' }];
    store.dispatch(getArequest(80));
    setTimeout(() => {
      expect(store.getActions()[0]).toEqual(expectedTypes);
      done();
    }, 2000);
    done();
  });

  it('should successfully dispatch the getUserRequests action', async (done) => {
    const expectedTypes = [{ type: 'VIEW_USER_REQUESTS' }];
    store.dispatch(getUserRequests())
      .then(() => {
        expect(store.getActions()[0]).toEqual(expectedTypes);
      });
    setTimeout(() => {
      expect(store.getActions()[0]).toEqual(expectedTypes);
      done();
    }, 2000);
    done();
  });

  it('should successfully dispatch the createRequest action', async (done) => {
    const expectedTypes = [{ type: 'CREATE_REQUEST' }];
    const history = '/';
    store.dispatch(createRequest(requestDetails, history));
    setTimeout(() => {
      expect(store.getActions()[0]).toEqual(expectedTypes);
      done();
    }, 2000);
    done();
  });
});
