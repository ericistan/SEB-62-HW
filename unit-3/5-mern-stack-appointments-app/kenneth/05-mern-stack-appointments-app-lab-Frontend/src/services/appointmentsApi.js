const BASE_URL = `${import.meta.env.VITE_SERVER}/appointments`;

export const getAppointments = async () => {
  const response = await fetch(BASE_URL);

  const data = await response.json();

  return data;
};

export const createAppointment = async (formData) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  return data;
};

export const deleteAppointmentById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  return data;
};

export const updateAppointment = async (id, updatedData) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

  const data = await response.json();
  return data;
};
