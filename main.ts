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
