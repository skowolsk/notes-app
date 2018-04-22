import React from 'react'
import PropTypes from 'prop-types'
import List, {ListItem, ListItemText, ListItemSecondaryAction} from 'material-ui/List';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from 'material-ui/IconButton';
import {SHOW_ALL} from "../constants";

const TagsList  = (props) => (
    <List>
        <ListItem button onClick={() => props.changeFilter(SHOW_ALL)}>
            <ListItemText inset primary='SHOW ALL'/>
        </ListItem>
        {
            props.tags.map((tag) =>
                <ListItem button key={tag.title} onClick={() => props.changeFilter(tag.title)}>
                    <ListItemText inset primary={tag.title}/>
                    <ListItemSecondaryAction onClick={() => props.deleteTag(tag.title)}>
                        <IconButton aria-label="Delete">
                            <DeleteIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>)
        }
    </List>
);

TagsList.propTypes = {
    tags: PropTypes.array.isRequired,
    selectedTag: PropTypes.string,
    deleteTag: PropTypes.func.isRequired,
    changeFilter: PropTypes.func.isRequired
};





export default TagsList;