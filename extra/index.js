import { triangle } from "./patterns";
triangle(5);
import { triangle1 } from "./patterns";
triangle1(5);
import { hasPermission } from "./utils";
hasPermission("getUsers", "head-trainer", "write");
import { validateUser } from "./utils";
const user = [
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech",
    meraEmail: "tgxcsdu@cdbhs.com"
  },
  {
    traineeEmail1: "trainee1@successive.tech",
    reviewerEmail2: "reviewer1@successive.tech",
    meraEmail3: "tgxcsdu@cdbhs.com"
  }
];
validateUser(user);
