import React from 'react';
import Modal from "../Modal";

const StreamDelete = (props) => {
    const {id} = props.match.params;

    return (
        <div>
            {id} Stream Delete {id}
            <Modal/>
        </div>
    );
};

export default StreamDelete;