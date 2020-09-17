import React, { useContext } from 'react';
import { UserContext } from '../Home/Home';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
        marginBottom: theme.spacing(2),
        width: 350
    },
  }),
);

const Book = () => {
    const [places, handleSelectPlace, detail, user, setUser] = useContext(UserContext);
    const {name, details} = detail;
    const classes = useStyles();

    const history = useHistory()
    const handleCheckout = () => {
        history.push('/checkout')
    }
    return (
        <div className='mx-5 d-flex justify-content-center align-items-center '>
            <div className='col-md-5'>
                <h1>{name}</h1>
                <h6>{details}</h6>
            </div>
            <div className='col-md-5'>
                <form className='bg-light text-center py-4 rounded' >
                   <TextField className={classes.textField} id="standard-basic" label="Origin" defaultValue='Dhaka' required/>
                   <TextField className={classes.textField} id="standard-basic" label='Destination' defaultValue={name} required/>
                    <TextField
                        id="date"
                        label="From"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    <TextField
                        id="date"
                        label="To"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    <button onClick={handleCheckout} className='btn btn-warning w-50' type="submit">Start Booking</button>
                </form>
            </div>
        </div>
    );
};

export default Book;