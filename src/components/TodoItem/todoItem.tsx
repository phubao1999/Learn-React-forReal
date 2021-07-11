import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Item from '../../interface/common.interface';
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%'
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
    }),
);

export default function TodoItem(props: Item) {
    const classes = useStyles();

    // const handleChangeDoneItem = (event: React.ChangeEvent<HTMLInputElement>) => {

    // }

    return (
        <div className={classes.root.concat(' to-center m-x-1')}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>{props.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className="to-center">
                            {props.description}
                            <FormGroup row>
                                <FormControlLabel
                                    control={<Checkbox checked={props.isDone} name="checkedA" />}
                                    label=""
                                />
                            </FormGroup>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}