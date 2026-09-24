const trips = [
  {
    id: '1',
    name: 'Summer in Italy',
    destination: 'Rome, Florence, Venice',
    startDate: '2026-06-10',
    endDate: '2026-06-17',
    days: [
      {
        id: 'd1',
        dayNumber: 1,
        date: '2026-06-10',
        stops: [
          {
            id: 's1',
            name: 'Colosseum Tour',
            time: '10:00 AM',
            category: 'Sightseeing',
            notes: 'Book tickets in advance to skip the line.',
          },
          {
            id: 's2',
            name: 'Lunch at Trattoria Monti',
            time: '1:00 PM',
            category: 'Food',
            notes: 'Try the carbonara.',
          },
        ],
      },
      {
        id: 'd2',
        dayNumber: 2,
        date: '2026-06-11',
        stops: [
          {
            id: 's3',
            name: 'Train to Florence',
            time: '9:00 AM',
            category: 'Transport',
            notes: 'High-speed train, about 1.5 hours.',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Tokyo Adventure',
    destination: 'Tokyo, Japan',
    startDate: '2026-09-05',
    endDate: '2026-09-10',
    days: [
      {
        id: 'd1',
        dayNumber: 1,
        date: '2026-09-05',
        stops: [
          {
            id: 's1',
            name: 'Senso-ji Temple',
            time: '9:00 AM',
            category: 'Sightseeing',
            notes: 'Arrive early to avoid crowds.',
          },
        ],
      },
    ],
  },
];

export default trips;