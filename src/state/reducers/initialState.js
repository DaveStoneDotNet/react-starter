export default {
                   app:         {
                                    user:                 {
                                                            UserId:          0,
                                                            UserInitials:    '',
                                                            UserDisplayName: '',
                                                            PrimaryRoleName: '',
                                                            RoleNames:       [""],
                                                            HasRole:         false,
                                                            IsAdministrator: false,
                                                            IsSuccessful:    false,
                                                            IsAuthenticated: false
                                                          },
                                    lookups:              {
                                                            MyLookups: [
                                                                        { Code: '',  Description: '', SortOrder: 0 }, 
                                                                        { Code: '',  Description: '', SortOrder: 0 }
                                                                       ]
                                                          },
                                    home:                 {
                                                             info: 'INITIAL MONKEY INFO'
                                                          }, 
                                    ajaxCount:            0, 
                                    ajaxMessage:          "Working...", 
                                    isUserInitialized:    false, 
                                    isLookupsInitialized: false, 
                                    isAppInitialized:     false, 
                                }, 
                    randomData: {
                                    randomTableData: {
                                                        data:    [
                                                                  {
                                                                    id:         0, 
                                                                    age:        0,
                                                                    firstName:  '',
                                                                    lastName:   '', 
                                                                    createDate: new Date()
                                                                  }
                                                                 ], 
                                                        pages:   0, 
                                                        loading: false
                                                     }
                                                     
                                }
               };
