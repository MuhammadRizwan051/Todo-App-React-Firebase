import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Box, Button, Grid } from '@mui/material'
import SMNavbar from '../components/SMNavbar'
import SMButton from '../components/SMButton'
import { getData } from '../config/firebasemethod'
import { useSelector } from "react-redux";

function Home() {
    const navigate = useNavigate()
    const location = useLocation()
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState()



    let allTodos = () => {
        setIsLoading(true)
        getData(`todos/`, location.id)
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

    const loginDataFromReducer = useSelector(a => a.loginReducer)  // we receive whole reducer here in parameter 'a' which we send from store.js
    console.log(loginDataFromReducer)  // Object receive  loginSlice(initialState) data


    return (
        <>
            <SMNavbar user={location.state} />

            <Grid container>
                <Grid item md={2} mb={3} mt={5} >
                    <SMButton onClick={allTodos} color='secondary' fullWidth label="All Todos" />
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
                        {/* <Grid item md={1} sm={2} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <SMButton onClick={() => edit(e, i)} color='primary' label="Edit" size='small' fullWidth />
                            </Grid>
                            <Grid item md={1} sm={2} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <SMButton onClick={() => deleteFunc(e, i)} color='warning' label="Delete" size='small' fullWidth />
                            </Grid> */}
                    </Grid>
                    <hr className="mt-2" />
                </ul>
            ))}
        </>
    )
}

export default Home