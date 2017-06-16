import delay from './delay';

// This file mocks a web API by working with the hard-coded data below. It uses setTimeout to simulate the delay of an AJAX call. All calls return promises.
const users = [
                  {
                      id: '01',
                      UserDisplayName: 'Dave'
                  }
                ];

const lookups = [
                  {
                      id: '01',
                  }
                ];

class MockMrcApi {

    static getUserProfile() {

        return new Promise((resolve) => {
            setTimeout(() => {
                let u = Object.assign({}, users[0]);
                resolve(u);
            }, delay);
        });
    }

    static getLookups() {

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign([], lookups));
            }, delay);
        });
    }
}

export default MockMrcApi;
