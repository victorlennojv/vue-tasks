import http from "../http";

const getTasks = async () => {
  try {
    const res = await http.get(`/tasks`);
    return res.data;
  } catch (error) {
    throw Error(error);
  }
};

const getTaskById = async (id) => {
  try {
    const res = await http.get(`/tasks/${id}`);
    return res.data;
  } catch (error) {
    throw Error(error);
  }
};

const createTask = async (payload) => {
  try {
    const res = await http.post(`/tasks`, payload);
    return res.data;
  } catch (error) {
    throw Error(error);
  }
};

export { getTasks, getTaskById, createTask };
