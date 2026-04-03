sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"ns/incidentmanagement/test/integration/pages/IncidentsList",
	"ns/incidentmanagement/test/integration/pages/IncidentsObjectPage"
], function (JourneyRunner, IncidentsList, IncidentsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('ns/incidentmanagement') + '/test/flpSandbox.html#nsincidentmanagement-tile',
        pages: {
			onTheIncidentsList: IncidentsList,
			onTheIncidentsObjectPage: IncidentsObjectPage
        },
        async: true
    });

    return runner;
});

