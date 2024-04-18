import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius:"10px",
    boxShadow: 24,
    p: 4,
    gap: 10
};

export default function TaskModel() {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState({
        title: "",
        description: ""
    })
    const handleInput = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const formSubmt = (e) => {
        e.preventDefault()
    }
    console.log(data)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button className='my-2 btnStyle' onClick={handleOpen}>Save</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style}>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12'>
                                <form onSubmit={formSubmt}>
                                    <div className='row'>
                                        <label htmlFor="title">Title</label>
                                        <div className='col-12'>
                                            <input required id='title' placeholder='title' type='text' name='title' value={data.title} onChange={handleInput} />
                                        </div>
                                        <label htmlFor='desc'>Description</label>
                                        <div className='col-12'>
                                            <div data-mdb-input-init class="form-outline">
                                                <textarea
                                                    required id='desc' type='text' name='description' value={data.description} onChange={handleInput}
                                                    class="form-control" rows="4"></textarea>
                                            </div>

                                        </div>

                                    </div>

                                    <button className='my-2 btnStyle' type='submit'
                                        onClick={handleClose}
                                    >Save</button>
                                </form>
                            </div>

                        </div>

                    </div>

                </Box>
            </Modal>

        </div>
    );
}