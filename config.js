//
//  _   _            _        
// | | | |          | |       
// | | | | ___ _ __ | |_ ___  
// | | | |/ _ \ '_ \| __/ _ \ 
// \ \_/ /  __/ | | | || (_) |
//  \___/ \___|_| |_|\__\___/ 
//                            
//    Redesinged Bento fork!                
// 
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'BN-WORKER',
  imageBackground: false,
  openInNewTab: true,

  // Greetings
  greetingMorning: 'Доброе утро,',
  greetingAfternoon: 'Привет,',
  greetingEvening: 'Добрый вечер,',
  greetingNight: 'А не сходить-ли тебе поспать,',

  // Weather
  // Use openweathermap.org
  weatherKey: '182ffb1c9290aebf85c92018414404e5',
  weatherIcons: 'Nord', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C',
  // Use https://www.latlong.net/
  weatherLatitude: '47.097134',
  weatherLongitude: '37.543365',
  

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'GW1.SHEV309',
      icon: 'server',
      link: 'http://gw1.shev309.blacknode.tech:8080/',
    },
    {
      id: '2',
      name: 'GW2.SHEV309',
      icon: 'server',
      link: 'http://gw2.shev309.blacknode.tech:8080/',
    },
    {
      id: '3',
      name: 'GW3.SCHEV309',
      icon: 'server',
      link: 'http://gw3.shev309.blacknode.tech:8080/',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'bookmark',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'key',
  secondListIcon: 'tool',

  // Links
  lists: {
    firstList: [
      {
        name: 'Twitter',
        link: 'https://twitter.com/',
      },
      {
        name: 'THN',
        link: 'https://thehackernews.com/',
      },
      {
        name: 'Its FOSS',
        link: 'https://itsfoss.com/',
      },
      {
        name: 'EFF',
        link: 'https://www.eff.org/',
      },
    ],
    secondList: [
      {
        name: 'Telegram',
        link: 'https://webk.telegram.org',
      },
      {
        name: 'Github',
        link: 'https://github.com/',
      },
      {
        name: 'Hetzner',
        link: 'https://hetzner.com/',
      },
      {
        name: 'Protonmail',
        link: 'https://mail.protonmail.com/',
      },
    ],
  },
};
