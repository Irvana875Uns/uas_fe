import fetcher from "../Utils/Fetcher";

const login = async (data) => {
  try {
    const response = await fetcher("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    return error;
  }
};

const register = async (data) => {
  try {
    const response = await fetcher("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    return error;
  }
};

export { login, register };