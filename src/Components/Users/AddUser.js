import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css'

const AddUser = (props) => {

    const [uname, setUname] = useState('');
    const [uage, setUage] = useState('');
    const [error, setError] = useState();

    const handleSubmit = e =>{
        e.preventDefault();
        if(uname.trim().length === 0 || uage.trim().length ===0 ) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }
        if(+uage < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            })
            return;
        }
        props.onAddUser(uname, uage );
        setUname('');
        setUage('');
    }

    const uNameHandler = e => {
        setUname(e.target.value)
    }
    const uAgeHandler = e => {
        setUage(e.target.value)
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
       {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
        <Card className={classes.input}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={uname} onChange={uNameHandler} />
                <label htmlFor="age">Age (Years)</label>
                <input type="number" id="age" value={uage} onChange={uAgeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </div>
    );
};

export default AddUser;