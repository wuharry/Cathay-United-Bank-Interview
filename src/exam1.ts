import { personInfo } from "./type";

const sortUserName = (user: personInfo[]) => {
  const newArray = user
    .slice()
    .sort((prev: personInfo, current: personInfo) => {
      const prevValue = `${prev.firstName}${prev.lastName}${prev.customerID}`;
      const currentValue = `${current.firstName}${current.lastName}${current.customerID}`;
      return prevValue.localeCompare(currentValue);
    });
  return newArray;
};

function sortByType(user: personInfo[]) {
  const order: string[] = [
    "systemAnalytics",
    "engineer",
    "productOwner",
    "freelancer",
    "student",
  ];

  const newArray = user
    .slice()
    .sort((prev: personInfo, current: personInfo) => {
      const prevValue: number = order.indexOf(prev.profession);
      const currentValue: number = order.indexOf(current.profession);

      return prevValue - currentValue;
    });

  return newArray;
}

const getUniqueNumber = (array: number[]) => {
  array.map((num: number) => {
    if (array.indexOf(num) === array.lastIndexOf(num)) {
      console.log(num);
    }
  });
};

export function exam1(element: HTMLButtonElement) {
  const dataArray: personInfo[] = [
    {
      firstName: "lee",
      lastName: "jack",
      customerID: 0,
      note: "",
      profession: "engineer",
    },
    {
      firstName: "chan",
      lastName: "esan",
      customerID: 1,
      note: "incv",
      profession: "systemAnalytics",
    },
    {
      firstName: "wu",
      lastName: "john",
      customerID: 2,
      note: "xxx",
      profession: "freelancer",
    },
    {
      firstName: "lee",
      lastName: "alan",
      customerID: 3,
      note: "xxx",
      profession: "productOwner",
    },
    {
      firstName: "chu",
      lastName: "alan",
      customerID: 4,
      note: "xxx",
      profession: "student",
    },
  ];
  let items = [
    1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5,
    4, 4, 7, 8, 8, 0, 1, 2, 3, 1,
  ];
  getUniqueNumber(items);
  console.log("sortUserName", sortUserName(dataArray));
  console.log("sortByType", sortByType(dataArray));
}

/** Can you explain about Interface and Enum, and where will you be using,
please make some examples. **/

// interface 我會用在定義某些會需要繼承其他型別的類型或是,如以下

interface person {
  name: string;
}

interface studentLis extends person {
  ID: number;
}

// enum我會用來定義有固定值得的變數,通常會是用來控制流程用的
enum Day {
  MONDAY = "It's MONDAY!",
  TUESDAY = "It's TUESDAY.",
  WEDNESDAY = "It's WEDNESDAY.",
  THURSDAY = "It's THURSDAY.",
  FRIDAY = "It's a FRIDAY.",
  SATURDAY = "It's a SATURDAY.",
  SUNDAY = "It's a SUNDAY.",
}

function getDayCase(day: Day): string {
  switch (day) {
    case Day.MONDAY:
      return Day.MONDAY;
    case Day.TUESDAY:
      return Day.TUESDAY;
    case Day.WEDNESDAY:
      return Day.WEDNESDAY;
    case Day.THURSDAY:
      return Day.THURSDAY;
    case Day.FRIDAY:
      return Day.FRIDAY;
    case Day.SATURDAY:
      return Day.SATURDAY;
    case Day.SUNDAY:
      return Day.SUNDAY;
    default:
      return "Unknown.";
  }
}
