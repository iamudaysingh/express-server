import { triangle, triangle1 } from "./patterns";
import { hasPermission, validateUser } from "./utils";
import { Iper1 } from "./utils/interfaces";
triangle(5);
triangle1(5);
hasPermission("getBranchinfo", "trainer", "write");
const user: Iper1[] = [
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech",
    meraEmail: "tgxcsdu@cdbhs.com"
  },
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech",
    meraEmail: "tgxcsdu@cdbhs.com"
  }
];
validateUser(user);
