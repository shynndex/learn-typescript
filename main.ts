// #1:static type : một biến chỉ có thể nhận một kiểu dữ liệu duy nhất và không thể thay đổi nó bằng giá trị có kiểu dữ liệu khác
let userName = "jusias";
// userName = 123; sai vì biến userName kiểu chuỗi nên không thể gán số
// console.log(userName);

// #2: type any : ngược lại so với static , cốt lõi của javascript
let userNumber;
userNumber = "ba";
userNumber = 4;

// #3: Những kiểu dữ liệu căn bản trong TS
let catName: string = "meo meo";
let catAge: number = 1;
let isCute: boolean = true;

catName = "meww mew";
catAge = 1;
isCute = true;

// #4:array - mảng
let ratings: number[] = [5, 3, 4, 5];
let petNames: string[] = ["Miu", "Cún", "Chíp"];

// cách thứ 2 để định nghĩa một mảng
let ratings2: Array<number> = [5, 3, 4, 5];
let petNames2: Array<String> = ["Miu", "Cún", "Chíp"];

// mảng lồng
let matrix: number[][] = [
  [1, 2],
  [0, 3],
  [6, 5],
];

let matrix2: Array<Array<number>> = [
  [1, 2],
  [0, 3],
  [6, 5],
];

// #5:function

function sayHi(): string {
  return "Xin chào thế giới !";
  // console.log("Xin chào thế giới !");
}

//nên viết kiểu giá trị trong tham số nhận vào,cũng có thể viết kiểu dữ liệu cho hàm để ts biết hàm trả về kiều gì(trong những trường hợp phức tạp)
function double(num: number): number {
  return num * 2;
}

//tham số tùy chọn:js cho phép điền thiếu tham số truyền vào khi gọi hàm,tuy nhiên ts bắt buộc phải định nghĩa tham số đó có được bỏ qua hay không bằng cách dùng dấu ? sau tên tham số,và tham số tùy chọn phải đứng sau tham số bắt buộc
function greet(name: string, title?: string) {
  if (title) {
    return `Xin chào,${title} ${name}`;
  }
  return `Xin chào ${name}`;
}

// console.log(greet("An"));

//Rest parameter:luôn có kiểu là 1 mảng,trong ví dụ này,đã gom các biến còn lại thành 1 mảng
function gatherFriends(groupName: string, ...members: string[]) {
  console.log(`Nhóm ${groupName}`);
  console.log(`Thành viên:${members.join(", ")}`);
}

gatherFriends("Đi biển", "An", "Bình", "Chi");

// #6:type aliases

//tên type phải capitalize
export type Customer = {
  id: number;
  name: string;
};

export type UserResponse = {
  success: boolean;
  message: string;
};

//một số trường hợp viết hàm với các tham số truyền vào/trả về là obj khá phức tạp,gây dài dòng,ts cho phép viết bí danh để tái sử dụng
// function greetCustomer(customer: { id: number; name: string }): {
//   success: boolean;
//   message: string;
// } {
//   return {
//     success: true,
//     message: `Xin chào ${customer.name},cảm ơn bạn đã đến với cửa hàng!`,
//   };
// }

function greetCustomer(customer: Customer): UserResponse {
  return {
    success: true,
    message: `Xin chào ${customer.name},cảm ơn bạn đã đến với cửa hàng!`,
  };
}

//Function signature

//định nghĩa kiểu hàm,bất kì hàm nào có kiểu SupportFunction thì sẽ có tham số là customer và trả về UserResponse
type SupportFunction = (customer: Customer) => UserResponse;

const greetCustomer2: SupportFunction = (customer) => {
  return {
    success: true,
    message: `Xin chào ${customer.name},cảm ơn bạn đã đến với cửa hàng!`,
  };
};

const fareWellCustomer: SupportFunction = (customer) => {
  return {
    success: true,
    message: `Hẹn gặp lại ${customer.name},chúc bạn một ngày vui vẻ!`,
  };
};

// #7 : Union & Literal Type
// Union Type là một cách để khai báo một biến có thể nhận một trong nhiều kiểu dữ liệu khác nhau.

// sử dụng ký hiệu | (dấu "pipe") để phân tách các kiểu.
type UserId = number | string;

function getTicketInfo(id: string | number) {
  if (typeof id === "string") {
    return `Tìm vé với ID ${id.toUpperCase()}`;
  } else {
    return `Tìm vé với ID ${id.toFixed(0)}`;
  }
}

getTicketInfo(123);

let mixedArray: (string | number)[] = [1, 2, "ba", "bốn"];

mixedArray.push(5);
// mixedArray.push(false);

type UserType = {
  userName: string;
  age: number;
  phone: string;
  theme: string;
};

type UserType2 = {
  userName: string;
  age: number;
  phone: string;
  theme: "dark" | "light";
};

//literal types
//Literal Types là một tính năng mạnh mẽ trong TypeScript cho phép giới hạn giá trị của một biến vào một tập hợp cụ thể các giá trị xác định (thường là chuỗi, số hoặc boolean)

const u2: UserType2 = {
  userName: "shyzz",
  age: 12,
  phone: "01223",
  theme: "light",
};

type paymentMethods = "zalopay" | "momo" | "cod";
type ApiMethods = "GET" | "PUT" | "POST" | "DELETE";

// #8:Intersection types (&)

//Intersection Types cho phép kết hợp nhiều kiểu dữ liệu lại với nhau thành một kiểu duy nhất, trong đó tất cả các thuộc tính từ các kiểu đều được giữ nguyên.

type Person = {
  name: string;
};

type Worker = {
  job: string;
};

type Employee = Person & Worker; // employee sẽ có cả 2 kiểu type

const e1: Employee = {
  name: "shyz",
  job: "hehe",
};
