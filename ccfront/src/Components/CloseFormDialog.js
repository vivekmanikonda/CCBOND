// CloseFormDialog.js
import React from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";

const CloseFormDialog = ({ open, onConfirm, onCancel }) => {
    return (
        <Dialog
            open={open}
            onClose={onCancel} // Close dialog when clicking outside
        >
            <DialogTitle>Confirm Close</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to close the form? Unsaved changes will be lost.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel} color="primary">
                    No
                </Button>
                <Button onClick={onConfirm} color="primary" autoFocus>
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CloseFormDialog;
