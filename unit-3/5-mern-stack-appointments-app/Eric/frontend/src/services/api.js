export const getAllAppointments = async () => {
  const res = await fetch("http://localhost:5010/api/appointments");
  const data = await res.json();
  if (!res.ok) throw new Error(data.msg || "Failed to fetch");
  return data;
};

export const getAppointmentById = async (id) => {
  const res = await fetch(`http://localhost:5010/api/appointments/${id}`);
  const data = await res.json();
  if (!res.ok) throw new Error(data.msg || "Failed to fetch");
  return data;
};

export const createAppointment = async (appointment) => {
  const res = await fetch("http://localhost:5010/api/appointments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(appointment),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.msg || "Failed to create");
  return data;
};

export const updateAppointment = async ({ id, data }) => {
  const res = await fetch(`http://localhost:5010/api/appointments/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  if (!res.ok) throw new Error(result.msg || "Failed to update");
  return result;
};

export const deleteAppointment = async (id) => {
  const res = await fetch(`http://localhost:5010/api/appointments/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.msg || "Failed to delete");
  return data;
};
