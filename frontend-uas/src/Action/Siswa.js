import fetcher from "../Utils/Fetcher";

const getSiswa = async (page = 1) => {
  try {
    const response = await fetcher(
      `http://localhost:8000/api/siswa/?page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    return response.data;
  } catch (error) {
    return error;
  }
};

const getSiswaDetail = async (id) => {
  try {
    const response = await fetcher(`http://localhost:8000/api/siswa/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

const putSiswaDetail = async (data) => {
  try {
    const response = await fetcher(
      `http://localhost:8000/api/siswa/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: JSON.stringify(data),
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

const postSiswa = async (data) => {
  try {
    const response = await fetcher(`http://localhost:8000/api/siswa/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: JSON.stringify(data),
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

const deleteSiswa = async (id) => {
  try {
    const response = await fetcher(`http://localhost:8000/api/siswa/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    return response.data;
  } catch (error) {
    return error;
  }
};

export { getSiswa, getSiswaDetail, putSiswaDetail, postSiswa, deleteSiswa };