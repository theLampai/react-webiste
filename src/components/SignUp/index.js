import React from 'react'
import {
    SContainer, 
    SForm, 
    SFormButton, 
    SFormContent, 
    SFormH1, 
    SFormInput, 
    SFormLabel, 
    SFormWrap,
    SText,
    SIcon,
 } from './SignUpElements'

const SignUp = () => {
    return (
        <>
        <SContainer>
            <SFormWrap>
                <SIcon to='/'>lampai</SIcon>
                <SFormContent>
                    <SForm action='#'>
                        <SFormH1>Sign In to your account</SFormH1>
                        <SFormLabel htmlFor='for'>Email </SFormLabel>
                        <SFormInput type='email' required />
                        <SFormLabel htmlFor='for'>Password </SFormLabel>
                        <SFormInput type='password' required />
                        <SFormButton type='submit'>Continue </SFormButton>
                        <SText>Forgot password?</SText>
                    </SForm>
                </SFormContent>
               
            
            </SFormWrap>
        </SContainer>
            
        </>
    )
}

export default SignUp;
