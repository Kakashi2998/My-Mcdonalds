import React from 'react';
import { Card, CardContent, Typography, makeStyles, CardActions, IconButton, Collapse } from '@material-ui/core';
import classes from './Order.module.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        marginLeft: 800,
        marginTop: 50
      },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));


const Order = props => {
    const style = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div>
            <Card className={classes.card} style={{backgroundColor: '#ffc107'}}>
                <CardContent>
                    <h3>Date: {props.order.orderDate}</h3>
                    <p>{props.order.address}</p>
                    {/* <Typography className={classes.pos} color="textSecondary"> */}
                        <ol>
                        {props.order.orderedBurgers.map(burger =>
                            <li key={burger.id}>{burger.name}, price = Rs.{burger.price}</li>
                        )}

                        </ol>
                    {/* </Typography> */}
                    <h2>Total Price: Rs{props.order.totalPrice}</h2>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                          className={clsx(style.expand, {
                            [style.expandOpen]: expanded,
                          })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        {/* <Typography className={classes.pos} color="textSecondary"> */}
                            <ol>

                            {props.order.orderedBurgers.map(burger =>
                                <li key={burger.id}>{burger.name}, price = Rs.{burger.price}
                                    <ul>
                                        {Object.keys(burger)
                                        .filter(key => key !== 'name' && key !== 'price'
                                         && key !== 'id' && burger[key] > 0)
                                         .map(key => <li key={key}>{burger[key]}, {key}</li>)}
                                    </ul>
                                </li>
                            )}
                            </ol>
                        {/* </Typography> */}
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );

}

export default Order;