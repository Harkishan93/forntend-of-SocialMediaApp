import React from 'react'
import { Modal } from '@mantine/core';
import Postshare from '../Postshare';

function Sharemodal({ modalopen, modalset}) {

    return (
        <>
            <Modal
                size='60%'
                opened={modalopen}
                onClose={() => modalset(false)}
                title='Post'
            >
                <Postshare/>
            </Modal>

        </>
    );
}
export default Sharemodal;