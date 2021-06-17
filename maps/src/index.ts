import { User } from "./user";
import { Company } from "./Company"
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();

// console.log(user);
// console.log(company);
// console.log(google);

const map = new CustomMap('map'); 
map.addMarker(user);
map.addMarker(company);

