//import type là cú pháp để chỉ import type, không ảnh hưởng đến bundle runtime (vì type sẽ bị xóa sau khi compile).
import /*type*/ { type Customer, type UserResponse } from "./main";
