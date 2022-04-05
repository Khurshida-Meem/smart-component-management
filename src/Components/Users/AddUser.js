import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css'

const AddUser = () => {

    const [uname, setUname] = useState('');
    const [uage, setUage] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        if(uname.trim().length === 0 || uage.trim().length ===0 ) {
            return;
        }
        if(+uage < 1) {
            return;
        }
        setUname('');
        setUage('');
    }

    const uNameHandler = e => {
        setUname(e.target.value)
    }
    const uAgeHandler = e => {
        setUage(e.target.value)
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={uname} onChange={uNameHandler} />
                <label htmlFor="age">Age (Years)</label>
                <input type="number" id="age" value={uage} onChange={uAgeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;