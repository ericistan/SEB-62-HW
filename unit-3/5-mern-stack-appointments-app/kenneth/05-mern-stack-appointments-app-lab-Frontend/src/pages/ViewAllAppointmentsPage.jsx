import { useEffect, useState } from "react";

import {
  getAppointments,
  deleteAppointmentById,
  updateAppointment,
} from "../services/appointmentsApi";

function ViewAllAppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: "",
    type: "",
    company: "",
    person: "",
    datetime: "",
    comments: "",
  });

  const fetchAppointments = async () => {
    try {
      const data = await getAppointments();

      setAppointments(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteAppointmentById(id);

      fetchAppointments();
    } catch (error) {
      console.error(error);
    }
  };

  const startEditing = (appointment) => {
    setEditingId(appointment._id);

    setEditFormData({
      title: appointment.title || "",
      type: appointment.type || "",
      company: appointment.company || "",
      person: appointment.person || "",
      datetime: appointment.datetime ? appointment.datetime.slice(0, 16) : "",
      comments: appointment.comments || "",
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;

    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (id) => {
    try {
      await updateAppointment(id, editFormData);
      setEditingId(null);
      fetchAppointments();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col">
          <h1 className="text-center fw-bold">All Appointments</h1>
        </div>
      </div>

      <div className="row g-4">
        {appointments.map((appointment) => (
          <div key={appointment._id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column">
                {editingId === appointment._id ? (
                  <>
                    <input
                      type="text"
                      className="form-control mb-2"
                      name="title"
                      value={editFormData.title}
                      onChange={handleEditChange}
                      placeholder="Title"
                    />

                    <input
                      type="text"
                      className="form-control mb-2"
                      name="type"
                      value={editFormData.type}
                      onChange={handleEditChange}
                      placeholder="Type"
                    />

                    <input
                      type="text"
                      className="form-control mb-2"
                      name="company"
                      value={editFormData.company}
                      onChange={handleEditChange}
                      placeholder="Company"
                    />

                    <input
                      type="text"
                      className="form-control mb-2"
                      name="person"
                      value={editFormData.person}
                      onChange={handleEditChange}
                      placeholder="Person"
                    />

                    <input
                      type="datetime-local"
                      className="form-control mb-2"
                      name="datetime"
                      value={editFormData.datetime}
                      onChange={handleEditChange}
                    />

                    <textarea
                      className="form-control mb-3"
                      rows="3"
                      name="comments"
                      value={editFormData.comments}
                      onChange={handleEditChange}
                      placeholder="Comments"
                    />

                    <div className="d-flex gap-2 mt-auto">
                      <button
                        className="btn btn-success w-100"
                        onClick={() => handleUpdate(appointment._id)}
                      >
                        Save
                      </button>

                      <button
                        className="btn btn-secondary w-100"
                        onClick={() => setEditingId(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h5 className="card-title mb-3">{appointment.title}</h5>

                    <div className="mb-2">
                      <strong>Type:</strong> {appointment.type}
                    </div>

                    <div className="mb-2">
                      <strong>Company:</strong> {appointment.company}
                    </div>

                    <div className="mb-2">
                      <strong>Person:</strong> {appointment.person}
                    </div>

                    <div className="mb-2">
                      <strong>Date:</strong>{" "}
                      {new Date(appointment.datetime).toLocaleDateString()}
                    </div>

                    <div className="mb-2">
                      <strong>Time:</strong>{" "}
                      {new Date(appointment.datetime).toLocaleTimeString()}
                    </div>

                    <div className="mb-3">
                      <strong>Comments:</strong> {appointment.comments}
                    </div>

                    <div className="d-flex gap-2 mt-auto">
                      <button
                        className="btn btn-dark w-100"
                        onClick={() => startEditing(appointment)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-danger w-100"
                        onClick={() => handleDelete(appointment._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewAllAppointmentsPage;
