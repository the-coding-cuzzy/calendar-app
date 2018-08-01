export default {
    events : [
        {
            eventId: 0,
            title: 'Board meeting',
            start: new Date(2018, 3, 29, 9, 0, 0),
            end: new Date(2018, 3, 29, 13, 0, 0),
            resourceId: "Resource1",
        },{
            eventId: 1,
            title: 'MS training',
            start: new Date(2018, 3, 29, 14, 0, 0),
            end: new Date(2018, 3, 29, 16, 30, 0),
            resourceId: "Resource1",
        },{
            eventId: 2,
            title: 'Team lead meeting',
            start: new Date(2018, 3, 29, 8, 30, 0),
            end: new Date(2018, 3, 29, 12, 30, 0),
            resourceId: "Resource3",
        },{
            eventId: 11,
            title: 'Birthday Party',
            start: new Date(2018, 3, 29, 7, 0, 0),
            end: new Date(2018, 3, 29, 10, 30, 0),
            resourceId: "Resource2",
        }
    ],
    resourceMap: [
        { id: "Resource1", resourceTitle: 'Test1' },
        { id: "Resource2", resourceTitle: 'Test2' },
        { id: "Resource3",resourceTitle: 'Test3' }
    ]
}