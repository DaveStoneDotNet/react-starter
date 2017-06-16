import delay from './delay';

// This file mocks a web API by working with the hard-coded data below. It uses setTimeout to simulate the delay of an AJAX call. All calls return promises.
const users = [
                  {
                    UserId:          21981,
                    UserInitials:    "LDS",
                    UserDisplayName: "Dave Stone",
                    PrimaryRoleName: "Administrator",
                    RoleNames:       ["Administrator", "Reviewer"],
                    HasRole:         true,
                    IsAdministrator: true,
                    IsSuccessful:    true,
                    IsAuthenticated: true
                  }
                ];

const lookups = [
                  {
                      Code:        "01",
                      Description: "Alpha", 
                      SortOrder:   1
                  }, 
                  {
                      Code:        "02",
                      Description: "Beta", 
                      SortOrder:   2
                  }, 
                  {
                      Code:        "03",
                      Description: "Gamma", 
                      SortOrder:   3
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
