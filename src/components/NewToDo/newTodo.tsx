import { Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '100ch',
            },
        },
    }),
);

export default function NewTodo(props: any) {
    const classes = useStyles();
    const [item, setItem] = useState('');
    const [description, setDescription] = useState('');

    const handleChangeItem = (e: any) => {
        setItem(e.target.value);
    }

    const handleChangeDescription = (e: any) => {
        setDescription(e.target.value);
    }

    const resetForm = () => {
        setItem('');
        setDescription('');
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!item.trim()) {
            return
        }
        props.addItem({ item, description });
        resetForm();
    }

    return (
        <div className="flex-col-center">
            <div className="to-center m-x-1">
                <form onSubmit={handleSubmit} className={classes.root.concat(' flex-col')} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Input You Item" variant="outlined" value={item} onChange={handleChangeItem} />
                    <TextField id="filled-basic" label="Description" variant="filled" value={description} onChange={handleChangeDescription} />
                </form>
            </div>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Add Item
            </Button>
        </div>
    )
}