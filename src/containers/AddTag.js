import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTag} from '../actions'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle
} from 'material-ui/Dialog';
import Tooltip from 'material-ui/Tooltip';
import AddIcon from '@material-ui/icons/Add';


class AddTag extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        titleTag: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.titleTag = '';
    }

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleSubmit = () => {
        const {dispatch} = this.props;
        if (this.titleTag[0] !== '#') {
            this.titleTag = `#${this.titleTag}`
        }
        dispatch(addTag(this.titleTag));
        this.handleClose();
    };

    handleTitleTagChange = (event) => {
        this.titleTag = event.target.value;
    };

    render() {
        return (
            <div>
                <Tooltip title="Add">
                    <Button variant="fab" color="primary" onClick={this.handleClickOpen}>
                        <AddIcon/>
                    </Button>
                </Tooltip>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>Add new tag</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            id="title"
                            label="Title"
                            placeholder="#work"
                            type="text"
                            fullWidth
                            onChange={this.handleTitleTagChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmit} color="primary">
                            ADD
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}


export default connect()(AddTag);

