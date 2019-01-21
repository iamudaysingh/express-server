const getUsers = "getUsers";
const head_trainer = "head_trainer";
const trainer = "trainer";
const trainer1 = "trainee";
const permissions = {
  getUsers: {
    all: ["head-trainer"],
    read: ["trainee", "trainer"],
    write: ["trainer"],
    delete: []
  }
};

export { getUsers,head_trainer,trainer,trainer1,permissions};
