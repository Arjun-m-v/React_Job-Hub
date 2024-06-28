import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { getToken } from '../ApiServices/allApis';
import { toast } from 'react-toastify';
import { Row, Col, Container } from 'react-bootstrap';

function Log() {
    const [userData, setUserData] = useState({
        username: "",
        password: ""
    });
    const nav = useNavigate()

    // // Handle input change for username
    // const handleUsernameChange = (e) => {
    //     setUserData({ ...userData, username: e.target.value });
    // };

    // // Handle input change for password
    // const handlePasswordChange = (e) => {
    //     setUserData({ ...userData, password: e.target.value });
    // };

    const handleLogin = async () => {
      const { username, password } = userData;
      if (!username || !password) {
          toast.warning("Enter Valid Inputs!!");
      } else {
          try {
              const result = await getToken(userData);
              if (result.status === 200) {
                    console.log(result);
                    sessionStorage.setItem("token",result.data.token)
                    setUserData({username:"",password:""})
                    toast.success("Login Successful!!");
                    nav('/home');
              } else {
                  toast.error("Login Failed!!");
                  console.log(result);
              }
          } catch (error) {
              console.error("Error during login:", error);
              toast.error("Login Failed. Please try again later.");
          }
      }
  };


    return (
        <>
        <Container className="heading-container text-center">
            <h1 className="heading"><b>Job-Hub</b></h1>
            <p className="quote" style={{ fontFamily: 'cursive' }}>Find the perfect match for your career</p>
        </Container>
            <MDBContainer className='my-5'>
            <MDBCard>
                <MDBRow className='g-0 d-flex align-items-center'>
                    <MDBCol md='4'>
                        <MDBCardImage src='https://cdn.pixabay.com/photo/2015/02/02/11/08/office-620817_640.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
                    </MDBCol>
                    <MDBCol md='8'>
                        <MDBCardBody>
                            <MDBInput wrapperClass='mb-4' value={userData.username} onChange={(e)=>{setUserData({...userData,username:e.target.value})}} placeholder='Username' id='form2' type='text' />
                            <MDBInput wrapperClass='mb-4' value={userData.password} onChange={(e)=>{setUserData({...userData,password:e.target.value})}} placeholder='Password' id='form3' type='password' />
                            <div className="d-flex justify-content-between mx-4 mb-4">
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                <Link to={'/reg'}>New User? Sign Up...</Link>
                            </div>
                            <button type='button' onClick={handleLogin} className='btn btn-info mb-4 w-100'>Login</button>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </MDBContainer>
        <Container className="landing-section">
            <p className="text-muted">
            <b>        Welcome to Job-Hub, the ultimate platform where job seekers and companies converge for mutual success. Whether you're an individual eager to explore new career horizons or a company seeking top talent, Job-Hub provides the perfect space to connect. With our user-friendly interface, job seekers can effortlessly browse through a plethora of job opportunities spanning various industries, experience levels, and locations. From entry-level positions to executive roles, Job-Hub caters to professionals at every stage of their career journey.</b> </p>
        </Container>
        <Container className="landing-section">
            <p className="text-muted">
            <b>        For companies, Job-Hub offers a seamless solution to showcase job openings and attract qualified candidates. Whether you're a startup looking to expand your team or a multinational corporation seeking specialized talent, our platform provides the tools and visibility you need to find the perfect fit. With Job-Hub, posting job opportunities is a breeze, and our advanced search algorithms ensure that your listings reach the right audience, maximizing your chances of finding the ideal candidate.</b> </p>
        </Container>
        <Container className="landing-section">
            <p className="text-muted">
            <b>Join the Job-Hub community today and unlock a world of opportunities. Whether you're looking to land your dream job or fill a critical role within your organization, Job-Hub is your trusted partner every step of the way. Sign up now and experience the power of seamless job matching at your fingertips.</b></p>
        </Container>
        </>
    );
}

export default Log;
