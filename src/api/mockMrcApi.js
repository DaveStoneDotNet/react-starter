import namor  from 'namor';
import _      from 'lodash';
import moment from 'moment';

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

const arbitrary_data = {
                         info: 'MOCK API INFO'
                       };

const randomTableData = _.map(_.range(3424), d => {
    return {
               id:         d, 
               firstName:  namor.generate({ words: 1, numbers: 0 }),
               lastName:   namor.generate({ words: 1, numbers: 0 }),
               age:        Math.floor(Math.random() * 30), 
               createDate: moment().format('MM-DD-YYYY')
           };
});

class MockMrcApi {

    static getUserProfile() {

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign({}, users[0]));
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

    static getData() {

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign({}, arbitrary_data));
            }, delay);
        });
    }

    static getRandomTableData (pageSize, page, sorted, filtered) {

        return new Promise((resolve, reject) => {

            // On the server, you'll likely use SQL or noSQL or some other query language to do this.
            // For this mock, we'll just use lodash...

            let filteredData = randomTableData;

            if (filtered.length) {
                filteredData = filtered.reduce((filteredSoFar, nextFilter) => {
                        return filteredSoFar.filter((row) => {
                                return (row[nextFilter.id] + '').includes(nextFilter.value);
                            });
                    }, filteredData);
            }

            const sortedData = _.orderBy(filteredData, sorted.map(sort => {
                return row => {
                    if (row[sort.id] === null || row[sort.id] === undefined) {
                        return -Infinity;
                    }
                    return typeof row[sort.id] === 'string' ? row[sort.id].toLowerCase() : row[sort.id];
                };
            }), sorted.map(d => d.desc ? 'desc' : 'asc'));

            // Be sure to send back the rows to be displayed, and any other pertinent information, like how many pages there are in total.
            const res = {
                            rows:  sortedData.slice(pageSize * page, (pageSize * page) + pageSize),
                            pages: Math.ceil(filteredData.length / pageSize)
                        };

            // Here we'll simulate a server response with a delay.
            setTimeout(() => resolve(res), 1000);
        });
    };

}

export default MockMrcApi;
