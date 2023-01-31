const { User, timeBlock, Date } = require("../models");

const logData = [
  {
    date: "01/01/2023",
    journal: "good day",
    timeblocks: [
      {
        title: "sleep",
        timeS: "23:00",
        timeE: "7:00",
      },
      {
        title: "morning routine",
        description: "brush teeth, make bed, go for run, cook breakfast",
        timeS: "7:00",
        timeE: "8:30",
        notes: "run was great, 2kms ran",
      },
      {
        title: "code",
        description: "todo: controllers for project, front end  styling",
        timeS: "8:30",
        timeE: "11:00",
        notes: "got everything don, react is fun!",
      },
      {
        title: "gym",
        description: "push day",
        timeS: "12:00",
        timeE: "14:00",
        notes: "felt strong",
      },
      {
        title: "code",
        description: "code wars, leat code, portfolio",
        timeS: "5:00",
        timeE: "8:00",
        notes: "",
      },
    ],
  },
];

User.create({
  fname: "Hashim",
  sname: "Jasem",
  email: "j_hashim1305@outlook.com",
  password: "test",
  logs: logData,
});
/*
{
    fname: 'Hashim',
    sname: 'Jasem',
    email: 'j_hashim1305@outlook.com',
    password: 'test',
    logs: 
    [
        {
            date: '01/01/2023',
            journal: 'good day',
            timeblocks:
            [
                {
                    title: 'sleep',
                    timeS: '23:00',
                    timeE: '7:00',
                },
                {
                    title: 'morning routine',
                    description: 'brush teeth, make bed, go for run, cook breakfast',
                    timeS: '7:00',
                    timeE: '8:30',
                    notes: 'run was great, 2kms ran'
                },
                {
                    title: 'code',
                    description: 'todo: controllers for project, front end  styling',
                    timeS: '8:30',
                    timeE: '11:00',
                    notes: 'got everything don, react is fun!'
                },
                {
                    title: 'gym',
                    description: 'push day',
                    timeS: '12:00',
                    timeE: '14:00',
                    notes: 'felt strong'
                },
                {
                    title: 'code',
                    description: 'code wars, leat code, portfolio',
                    timeS: '5:00',
                    timeE: '8:00',
                    notes: ''
                }
            ],
        }
        {
            date: '02/01/2023',
            journal: 'great day',
            timeblocks:
            [
                {
                    title: 'sleep',
                    timeS: '23:00',
                    timeE: '7:00',
                },
                {
                    title: 'morning routine',
                    description: 'brush teeth, make bed, go for run, cook breakfast',
                    timeS: '7:00',
                    timeE: '8:30',
                    notes: 'run was great, 2kms ran'
                },
                {
                    title: 'code',
                    description: 'todo: controllers for project, front end  styling',
                    timeS: '8:30',
                    timeE: '11:00',
                    notes: 'got everything don, react is fun!'
                },
                {
                    title: 'gym',
                    description: 'push day',
                    timeS: '12:00',
                    timeE: '14:00',
                    notes: 'felt strong'
                },
                {
                    title: 'code',
                    description: 'code wars, leat code, portfolio',
                    timeS: '5:00',
                    timeE: '8:00',
                    notes: ''
                }
            ]
        }
    ]
}
*/
