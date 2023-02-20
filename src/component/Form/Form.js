import React from 'react'
import styled from "styled-components"
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"




const Form = () => {

    const schema = yup.object().shape({
        fullname: yup.string().required(),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        Password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("Password"), null]).required()
    })


const onSubmit = (data) => {
    console.log(data)
    reset()
}

const {register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(schema)
})

  return (
    <Container>
    <form onSubmit={handleSubmit(onSubmit)} style={{
        flexDirection: "column",
        display: "flex",
        width: "50%",
    }}>
        <input style={{
            height: "40px",
            marginBottom: "15px"
        }} 
        type="text" placeholder='fullname' {...register("fullname")}/>
        <p style={{
            color: "red",
            margin: "0px"
        }}>{errors.fullname?.message}</p>


        <input style={{
            height: "40px",
            marginBottom: "15px"
        }} 
        type="text" placeholder='email' {...register("email")}/>
        <p style={{
            color: "red",
            margin: "0px"
        }}>{errors.email?.message}</p>


        <input style={{
            height: "40px",
            marginBottom: "15px"
        }} 
        type="age" placeholder='age' {...register("age")}/>
        <p style={{
            color: "red",
            margin: "0px"
        }}>{errors.age?.message}</p>


        <input style={{
            height: "40px",
            marginBottom: "15px"
        }} 
        type="password" placeholder='enter your password' {...register("Password")}/>
        <p style={{
            color: "red",
            margin: "0px"
        }}>{errors.Password?.message}</p>


        <input style={{
            height: "40px",
            marginBottom: "15px"
        }} 
        type="password" placeholder='confirm your password' {...register("confirmPassword")}/>
        <p style={{
            color: "red",
            margin: "0px"
        }}>{errors.confirmPassword?.message}</p>


        <button style={{
            height: "30px",
            marginTop: "10px"
        }}>submit</button>

    </form>
    </Container>
  )
}

export default Form

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`