import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const AppointmentCard = ({ apt, onEdit, onDelete }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          {apt.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
          <strong>Type:</strong> {apt.type}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
          <strong>Date:</strong> {apt.date}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
          <strong>Time:</strong> {apt.time}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
          <strong>Company:</strong> {apt.company}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
          <strong>Person:</strong> {apt.person}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
          <strong>Address:</strong> {apt.address}
        </Typography>
        {apt.comments && (
          <Typography variant="body2" color="textSecondary">
            <strong>Comments:</strong> {apt.comments}
          </Typography>
        )}
      </CardContent>

      <CardActions sx={{ justifyContent: "flex-end", gap: 1 }}>
        <Button
          size="small"
          variant="outlined"
          startIcon={<EditIcon />}
          onClick={() => onEdit(apt)}
        >
          Edit
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={() => onDelete(apt._id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default AppointmentCard;
