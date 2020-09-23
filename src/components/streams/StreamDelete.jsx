import React from 'react';
import Modal from "../Modal";

const StreamDelete = (props) => {
    const {id} = props.match.params;

    const actions = <>
        <button className="ui negative button">Delete</button>
        <button className="ui button">Cancel</button>
    </>
    return (
        <div>
            {id} Stream Delete {id}
            <Modal
                title="Delete Stream"
                content="Are you sure you want to delete this stream?"
                actions={actions}
            />
        </div>
    );
};

export default StreamDelete;