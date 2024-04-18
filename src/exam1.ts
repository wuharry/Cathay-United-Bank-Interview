import { personInfo } from "./type";

const randomString = (length: number) => {
  const randomLength = Math.floor(Math.random() * length) + 1;
  let result = "";
  for (let i = 0; i < randomLength; i++) {
    result += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  return result;
};

const randomArryGener = () => {
  const array: personInfo[] = [];
  const randomLength = Math.floor(Math.random() * 10);
  for (let i = 0; i < randomLength; i++) {
    console.log(randomString(2));

    // array.push({

    // });
  }
};

export function exam1(element: HTMLButtonElement) {
  const dataArray: personInfo[] = [
    {
      firstName: "xxx",
      lastName: "xxx",
      customerID: 0,
      note: "xxx",
      profession: "student",
    },
    {
      firstName: "xxx",
      lastName: "xxx",
      customerID: 1,
      note: "xxx",
      profession: "student",
    },
    {
      firstName: "xxx",
      lastName: "xxx",
      customerID: 2,
      note: "xxx",
      profession: "student",
    },
    {
      firstName: "xxx",
      lastName: "xxx",
      customerID: 3,
      note: "xxx",
      profession: "student",
    },
    {
      firstName: "xxx",
      lastName: "xxx",
      customerID: 4,
      note: "xxx",
      profession: "student",
    },
  ];
  element.innerHTML = `排序`;
  element.addEventListener("click", () => randomArryGener());
}
