
export const DateFormats =               {
                                            DefaultDateTime: 'MM/DD/YYYY hh:mm A', 
                                            DefaultDate:     'MM/DD/YYYY', 
                                            DefaultTime:     'hh:mm A', 
                                            LongDateFormat:  'dddd MMMM DD, YYYY'
                                         }

export const TimeSpanMode =              {
                                            Elapsed:         'Elapsed',
                                            Remaining:       'Remaining'
}

export const ReleaseBlockStatus =        {
                                             Done:           'Done', 
                                             Started:        'Started',
                                             Warning:        'Warning',
                                             Critical:       'Critical',
                                             Late:           'Late',
                                             NotStarted:     'Not-Started'
                                         };  
                                         
export const UserRole =          {
                                             Dba:            'DBA', 
                                             Etl:            'ETL', 
                                             EncompassAdmin: 'EncompassAdmin', 
                                             DevOps:         'DevOps', 
                                             Developer:      'Developer', 
                                             Qa:             'QA', 
                                             Generic:        'Generic'
                                         };
                                         
// ---

export const getReleaseBlockBgCss = (blockStatus) => {
    let css = 'white-a-3-bg';
    switch (blockStatus) {
    case ReleaseBlockStatus.NotStarted:
        css = 'white-a-3-bg';
        break;
    case ReleaseBlockStatus.Started:
        css = 'muted-purple-bg';
        break;
    case ReleaseBlockStatus.Late:
        css = 'dark-orange-bg';
        break;
    case ReleaseBlockStatus.Warning:
        css = 'dark-orange-bg';
        break;
    case ReleaseBlockStatus.Critical:
        css = 'bright-red-bg';
        break;
    case ReleaseBlockStatus.Done:
        css = 'muted-green-bg';
        break;
    }
    return css;
};

export const getReleaseBlockButtonText = (blockStatus) => {
    let css = 'white-a-3-bg';
    switch (blockStatus) {
        case ReleaseBlockStatus.NotStarted:
            css = 'start';
            break;
        case ReleaseBlockStatus.Started:
            css = 'finish';
            break;
        case ReleaseBlockStatus.Late:
            css = 'start';
            break;
        case ReleaseBlockStatus.Warning:
            css = 'continue';
            break;
        case ReleaseBlockStatus.Critical:
            css = 'continue';
            break;
        case ReleaseBlockStatus.Done:
            css = 'comment';
            break;
    }
    return css;
};

export const getIconCss = (type) => {
    let icon = 'fa';
    switch (type) {
        case ReleaseBlockStatus.NotStarted:
            icon = 'fa fa-genderless';
            break;
        case ReleaseBlockStatus.Done:
            icon = 'fa fa-check-circle';
            break;
        case ReleaseBlockStatus.Started:
            icon = 'fa fa-cog fa-spin';
            break;
        case ReleaseBlockStatus.Warning:
            icon = 'fa fa-commenting-o';
            break;
        case ReleaseBlockStatus.Critical:
            icon = 'fa fa-exclamation-circle';
            break;
        case ReleaseBlockStatus.Late:
            icon = 'fa fa-clock-o';
            break;

        case UserRole.Dba:
            icon = 'fa fa-database';
            break;
        case UserRole.Etl:
            icon = 'fa fa-random';
            break;
        case UserRole.EncompassAdmin:
            icon = 'fa fa-sliders';
            break;
        case UserRole.DevOps:
            icon = 'fa fa-cogs';
            break;
        case UserRole.Developer:
            icon = 'fa fa-terminal';
            break;
        case UserRole.Qa:
            icon = 'fa fa-thermometer';
            break;

        case UserRole.Generic:
            icon = 'fa fa-user-o';
            break;

        default:
            icon = 'fa fa-genderless';
            break;
    }
    return icon;
};

