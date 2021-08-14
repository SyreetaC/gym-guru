const gyms = [
  {
    name: "PureGym",
    imageURL:
      "https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    address: "Unit 7, Windmill Shopping Centre, Cape Hill",
    postCode: "B66 3PR",
    city: "Birmingham",
    contactNumber: "0121 626 3915",
    openingTimes: [
      {
        dayIndex: 1,
        dayName: "Sunday",
        dayShort: "Sun",
        startTime: "08:00",
        endTime: "19:00",
      },
    ],
    rating: 4.5,
    exerciseFacilities: [],
    otherFacilities: [],
  },
  {
    name: "The Gym Group Birmingham City Centre",
    imageURL:
      "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
    address: "79-84 High St, Birmingham",
    postCode: "B4 7TE",
    city: "Birmingham",
    contactNumber: "0300 303 4800",
    openingTimes: [
      {
        dayIndex: 1,
        dayName: "Sunday",
        dayShort: "Sun",
        startTime: "00:00",
        endTime: "00:00",
      },
      {
        dayIndex: 2,
        dayName: "Monday",
        dayShort: "Mon",
        startTime: "00:00",
        endTime: "00:00",
      },
      {
        dayIndex: 3,
        dayName: "Tuesday",
        dayShort: "Tue",
        startTime: "00:00",
        endTime: "00:00",
      },
      {
        dayIndex: 4,
        dayName: "Wednesday",
        dayShort: "Wed",
        startTime: "00:00",
        endTime: "00:00",
      },
      {
        dayIndex: 5,
        dayName: "Thursday",
        dayShort: "Thu",
        startTime: "00:00",
        endTime: "00:00",
      },
      {
        dayIndex: 6,
        dayName: "Friday",
        dayShort: "Fri",
        startTime: "00:00",
        endTime: "00:00",
      },
      {
        dayIndex: 7,
        dayName: "Saturday",
        dayShort: "Sat",
        startTime: "00:00",
        endTime: "00:00",
      },
    ],
    rating: 3.5,
    exerciseFacilities: [],
    otherFacilities: [],
  },
  {
    name: "David Lloyd",
    imageURL:
      "https://images.unsplash.com/photo-1590487988256-9ed24133863e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=369&q=80",
    address: "Shady Ln., Great Barr, Birmingham",
    postCode: "B44 9ER",
    city: "Birmingham",
    contactNumber: "0345 129 6773",
    openingTimes: [
      {
        dayIndex: 1,
        dayName: "Sunday",
        dayShort: "Sun",
        startTime: "08:00",
        endTime: "20:00",
      },
      {
        dayIndex: 2,
        dayName: "Monday",
        dayShort: "Mon",
        startTime: "06:00",
        endTime: "22:00",
      },
      {
        dayIndex: 3,
        dayName: "Tuesday",
        dayShort: "Tue",
        startTime: "06:00",
        endTime: "22:00",
      },
      {
        dayIndex: 4,
        dayName: "Wednesday",
        dayShort: "Wed",
        startTime: "06:00",
        endTime: "22:00",
      },
      {
        dayIndex: 5,
        dayName: "Thursday",
        dayShort: "Thu",
        startTime: "06:00",
        endTime: "22:00",
      },
      {
        dayIndex: 6,
        dayName: "Friday",
        dayShort: "Fri",
        startTime: "06:00",
        endTime: "22:00",
      },
      {
        dayIndex: 7,
        dayName: "Saturday",
        dayShort: "Sat",
        startTime: "07:00",
        endTime: "20:00",
      },
    ],
    rating: 4.8,
    exerciseFacilities: [],
    otherFacilities: [],
  },
  {
    name: "JD Gyms Birmingham",
    imageURL:
      "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    address: "Allesley Street OFF THE NEWTON MIDDLEWAY",
    postCode: "B6 4NF",
    city: "Birmingham",
    contactNumber: "0121 270 6921",
    openingTimes: [
      {
        dayIndex: 1,
        dayName: "Sunday",
        dayShort: "Sun",
        startTime: "08:00",
        endTime: "20:00",
      },
      {
        dayIndex: 2,
        dayName: "Monday",
        dayShort: "Mon",
        startTime: "06:00",
        endTime: "22:00",
      },
      {
        dayIndex: 3,
        dayName: "Tuesday",
        dayShort: "Tue",
        startTime: "06:00",
        endTime: "22:00",
      },
      {
        dayIndex: 4,
        dayName: "Wednesday",
        dayShort: "Wed",
        startTime: "06:00",
        endTime: "22:00",
      },
      {
        dayIndex: 5,
        dayName: "Thursday",
        dayShort: "Thu",
        startTime: "06:00",
        endTime: "22:00",
      },
      {
        dayIndex: 6,
        dayName: "Friday",
        dayShort: "Fri",
        startTime: "06:00",
        endTime: "22:00",
      },
      {
        dayIndex: 7,
        dayName: "Saturday",
        dayShort: "Sat",
        startTime: "08:00",
        endTime: "20:00",
      },
    ],
    rating: 3.2,
    exerciseFacilities: [],
    otherFacilities: [],
  },
  {
    name: "24/7 Fitness Birmingham Gym",
    imageURL:
      "https://images.unsplash.com/photo-1561214078-f3247647fc5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    address: "Hagley Rd, Bearwood",
    postCode: "B66 4AU",
    city: "Birmingham",
    contactNumber: "0121 420 2471",
    openingTimes: [
      {
        dayIndex: 1,
        dayName: "Sunday",
        dayShort: "Sun",
        startTime: "00:00",
        endTime: "00:00",
      },
      {
        dayIndex: 2,
        dayName: "Monday",
        dayShort: "Mon",
        startTime: "00:00",
        endTime: "00:00",
      },
      {
        dayIndex: 3,
        dayName: "Tuesday",
        dayShort: "Tue",
        startTime: "00:00",
        endTime: "00:00",
      },
      {
        dayIndex: 4,
        dayName: "Wednesday",
        dayShort: "Wed",
        startTime: "00:00",
        endTime: "00:00",
      },
      {
        dayIndex: 5,
        dayName: "Thursday",
        dayShort: "Thu",
        startTime: "00:00",
        endTime: "00:00",
      },
      {
        dayIndex: 6,
        dayName: "Friday",
        dayShort: "Fri",
        startTime: "00:00",
        endTime: "00:00",
      },
      {
        dayIndex: 7,
        dayName: "Saturday",
        dayShort: "Sat",
        startTime: "00:00",
        endTime: "00:00",
      },
    ],
    rating: 5,
    exerciseFacilities: [],
    otherFacilities: [],
  },
];

module.exports = gyms;
