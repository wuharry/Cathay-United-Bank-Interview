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

// interface 我會用在
