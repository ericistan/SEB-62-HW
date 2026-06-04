import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

// Modal component for creating/editing appointments
const AppointmentModal = ({ open, onClose, appointment, onSave }) => {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    purpose: "",
    company: "",
    person: "",
    address: "",
    date: "",
    time: "",
    comments: "",
  });

  // Populate form with pre-filled data when editing so it's not ma-fan
  useEffect(() => {
    if (appointment) {
      setFormData(appointment);
    } else {
      setFormData({
        title: "",
        type: "",
        purpose: "",
        company: "",
        person: "",
        address: "",
        date: "",
        time: "",
        comments: "",
      });
    }
  }, [appointment]);

  // Handle form submission for both create and update
  const handleSave = () => {
    onSave(formData, appointment?._id);
    handleClose();
  };

  // Reset form and close modal
  const handleClose = () => {
    setFormData({
      title: "",
      type: "",
      purpose: "",
      company: "",
      person: "",
      address: "",
      date: "",
      time: "",
      comments: "",
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
        {appointment ? "Edit Appointment" : "New Appointment"}
      </DialogTitle>
      <DialogContent
        sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
      >
        <TextField
          fullWidth
          label="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <TextField
          fullWidth
          label="Type"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        />
        <TextField
          fullWidth
          label="Purpose"
          value={formData.purpose}
          onChange={(e) =>
            setFormData({ ...formData, purpose: e.target.value })
          }
        />
        <TextField
          fullWidth
          label="Company"
          value={formData.company}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
        />
        <TextField
          fullWidth
          label="Person"
          value={formData.person}
          onChange={(e) => setFormData({ ...formData, person: e.target.value })}
        />
        <TextField
          fullWidth
          label="Address"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
        <TextField
          fullWidth
          placeholder="Date"
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
        <TextField
          fullWidth
          placeholder="Time"
          type="time"
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        />
        <TextField
          fullWidth
          label="Comments"
          value={formData.comments}
          onChange={(e) =>
            setFormData({ ...formData, comments: e.target.value })
          }
          multiline
          rows={3}
        />
      </DialogContent>

      <DialogActions sx={{ p: 2, gap: 1 }}>
        <Button onClick={handleClose} variant="outlined">
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AppointmentModal;
