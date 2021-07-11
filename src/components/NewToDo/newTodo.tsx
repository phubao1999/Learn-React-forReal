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

    function handleChange(e: any) {
        setItem(e.target.value);
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        if (!item.trim()) {
            return
        }
        props.addItem(item);
        setItem('');
    }

    return (
        <div className="flex-center m-x-1">
            <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Input You Item" variant="outlined" value={item} onChange={handleChange} />
            </form>
        </div>
    )
}