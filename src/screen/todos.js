import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import Button from "../components/Button.js";
import SMButton from "../components/SMButton.js";
import SMInput from "../components/SMInput.js";
import { Container } from "@mui/system";
import { checkUser, getData, logoutUser, sendData } from "../config/firebasemethod.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";


function Todos() {
    const navigate = useNavigate();
    const param = useParams()
    console.log(param.id)


    let [txt, setTxt] = useState("");
    let [list, setList] = useState([]);

    let [data, setData] = useState()
    let [isLoading, setIsLoading] = useState(false)


    // Add Todos
    let add = () => {
        if (!txt) {
            alert('Plz fill the data')
            return;
        }
        // list.push(setTxt);
        setList([...list, txt]);
        setTxt('')
    };

    let save = () => {
        console.log('Todos Add')
        sendData(list, `todos/`, param.id)
            .then((success => {
                // setLoader(false)
                navigate('/userForm')
                console.log(success);
                alert('Todos has been submitted')
            }))
            .catch((err => {
                // setLoader(false)
                console.log(err);
                alert('Plz! submit again')
            }))
    }

    let allTodos = () => {
        setIsLoading(true)
        getData(`todos/`, param.id)
            .then((res) => {
                setIsLoading(false)
                setData(res)
                console.log(res)
            })
            .catch((err) => {
                setIsLoading(false)
                alert(err)
            })
    }
    console.log(data)

    // Edit Todos
    let edit = (e, i) => {
        let a = prompt("Edit Value", list[i])
        list[i] = a
        setList([...list])
    }


    // Delete All Todos
    let deleteAll = () => {
        setList([])
    }

    // Delete Todos
    let deleteFunc = (todoValueGet, todoIndex) => {
        setList(list.filter((e, i) => { return i !== todoIndex }))
    };


    let checkAuth = () => {
        checkUser()
            .then(() => {
                console.log('User Login')
            })
            .catch((err) => {
                console.log('User Log out')
                navigate("/");
            });
    };

    useEffect(() => {
        checkAuth();
    }, []);


    const logout = () => {
        logoutUser().then(() => {
            navigate('/')
        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <>
            <Typography variant="h2" align="center" color="error">Todo List</Typography>
            <Grid item md={12} mb={3} mt={5} >
                <SMButton onClick={logout} color='secondary' fullWidth label="Log out" />
            </Grid>

            <Container className="container py-5 px-2" >
                <Grid container columnSpacing='8'>
                    <Grid item md={10} sm={9}>
                        <SMInput label='Enter Todos' value={txt} type='text' placeholder="Enter Todos" onChange={(e) => { setTxt(e.target.value) }} />
                    </Grid>
                    <Grid item md={2} sm={3} sx={{ display: 'flex' }}>
                        <SMButton onClick={add} color='success' fullWidth label="Add Todo" />
                    </Grid>
                    <Grid item md={12} mb={3} mt={5} >
                        <SMButton onClick={allTodos} color='secondary' fullWidth label="All Todos" />
                    </Grid>
                    <Grid item md={12} sm={12}>
                        {list.length === 0 ? <Typography className="text-center text-danger fs-3 text-center mt-4">No Todos to display</Typography> :
                            <Typography className="text-danger fs-3 text-center mt-4">{`Total: ${list.length}`}</Typography>}
                    </Grid>
                </Grid>

                {data && data.map((e, i) => (
                    <ul className="px-0" key={i}>
                        <Grid container columnSpacing='8'>
                            <Grid item md={10} sm={8}>
                                <li className="fs-4 mt-5 row mx-0">
                                    <span className="col-1">{`${i + 1}.`}</span>
                                    <span className="col-sm-7 col-xl-9 col-7">{e}</span>
                                </li>
                            </Grid>
                            <Grid item md={1} sm={2} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <SMButton onClick={() => edit(e, i)} color='primary' label="Edit" size='small' fullWidth />
                            </Grid>
                            <Grid item md={1} sm={2} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <SMButton onClick={() => deleteFunc(e, i)} color='warning' label="Delete" size='small' fullWidth />
                            </Grid>
                        </Grid>
                        <hr className="mt-2" />
                    </ul>
                ))}


                {list.map((e, i) => (
                    <ul className="px-0" key={i}>
                        <Grid container columnSpacing='8'>
                            <Grid item md={10} sm={8}>
                                <li className="fs-4 mt-5 row mx-0">
                                    <span className="col-1">{`${i + 1}.`}</span>
                                    <span className="col-sm-7 col-xl-9 col-7">{e}</span>
                                </li>
                            </Grid>
                            <Grid item md={1} sm={2} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <SMButton onClick={() => edit(e, i)} color='primary' label="Edit" size='small' fullWidth />
                            </Grid>
                            <Grid item md={1} sm={2} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <SMButton onClick={() => deleteFunc(e, i)} color='warning' label="Delete" size='small' fullWidth />
                            </Grid>
                        </Grid>
                        <hr className="mt-2" />
                    </ul>
                ))}
                <Grid container columnSpacing='8' mt={5} paddingX={40}>
                    {list.length > 0 ?
                        (
                            <>
                                <Grid item md={12} mb={3}>
                                    <SMButton onClick={deleteAll} color='error' fullWidth label="Delete All" />
                                </Grid>
                                <Grid item md={12} mb={3}>
                                    <SMButton onClick={save} color='success' fullWidth label="Save" />
                                </Grid>
                            </>
                        )
                        : ""}
                </Grid>
            </Container>
        </>
    )
}

export default Todos