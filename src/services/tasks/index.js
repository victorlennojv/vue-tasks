import http from "../http";

const getTasks = async () => {
  try {
    const res = await http.get(`/tasks`);
    return res.data;
  } catch (error) {
    throw Error(error);
  }
};

export { getTasks };
