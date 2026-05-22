import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getAllAppointments,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} from "../services/api";
import {
  Container,
  Box,
  Button,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AppointmentCard from "./AppointmentCard";
import AppointmentModal from "./AppointmentModal";

const HomePage = () => {
  const queryClient = useQueryClient();
  const [showModal, setShowModal] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState(null);

  const handleOpenModal = (appointment = null) => {
    setEditingAppointment(appointment);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingAppointment(null);
  };

  const handleSaveAppointment = (formData, appointmentId) => {
    if (appointmentId) {
      updateMutation.mutate({ id: appointmentId, data: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["appointments"], // unique name for this query
    queryFn: getAllAppointments, // your fetch function
  });

  const createMutation = useMutation({
    mutationFn: createAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
      handleCloseModal();
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
      handleCloseModal();
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
    },
  });

  if (isLoading) return <CircularProgress />;
  if (error) return <Alert severity="error">Error: {error.message}</Alert>;

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
          ET Appointments
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => {
            handleOpenModal();
          }}
          size="large"
        >
          Add New Appointment
        </Button>
      </Box>

      {data?.length === 0 ? (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <Typography variant="h6" color="textSecondary">
            No appointments yet. Create one to get started!
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: 3,
          }}
        >
          {data?.map((apt) => (
            <AppointmentCard
              key={apt._id}
              apt={apt}
              onEdit={() => handleOpenModal(apt)}
              onDelete={(id) => deleteMutation.mutate(id)}
            />
          ))}
        </Box>
      )}

      <AppointmentModal
        open={showModal}
        onClose={handleCloseModal}
        appointment={editingAppointment}
        onSave={handleSaveAppointment}
      />
    </Container>
  );
};

export default HomePage;
