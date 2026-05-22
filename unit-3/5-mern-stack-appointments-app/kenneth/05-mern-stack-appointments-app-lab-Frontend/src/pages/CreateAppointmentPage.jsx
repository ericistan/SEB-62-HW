import { useState } from "react";
import { createAppointment } from "../services/appointmentsApi";

const initialFormData = {
  title: "",
  type: "",
  purpose: "",
  company: "",
  person: "",
  address: "",
  datetime: "",
  comments: "",
};

function CreateAppointmentPage() {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await createAppointment(formData);
      alert("Appointment created!");
      setFormData(initialFormData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-dark text-white">
              <h3 className="mb-0">Create Appointment</h3>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Title / Label:</label>

                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Type:</label>

                  <input
                    type="text"
                    className="form-control"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    placeholder="e.g. Interview, Medical, Lunch..."
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Purpose:</label>

                  <input
                    type="text"
                    className="form-control"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Company:</label>

                  <input
                    type="text"
                    className="form-control"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Meeting With:</label>

                  <input
                    type="text"
                    className="form-control"
                    name="person"
                    value={formData.person}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Address:</label>

                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Date & Time:</label>

                  <input
                    type="datetime-local"
                    className="form-control"
                    name="datetime"
                    value={formData.datetime}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Comments</label>

                  <textarea
                    className="form-control"
                    rows="3"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-dark w-100">
                  Save Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAppointmentPage;
