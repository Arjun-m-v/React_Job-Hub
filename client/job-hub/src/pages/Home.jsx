import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';

function Home() {

  const nav=useNavigate()

  const Logout=()=>{
    nav('/')
    sessionStorage.removeItem('token')
  }

  return (
    <div className="landing-page">
      <Container className="d-flex justify-content-end">
      <button className='btn btn-danger m-3' onClick={Logout}>LogOut</button>
    </Container>
      <Container className="heading-container text-center">
        <h1 className="heading"><b>Job-Hub</b></h1>
        <p className="quote" style={{ fontFamily: 'cursive' }}>Find the perfect match for your career</p>
      </Container>
      <Row>
        <Col className='m-3'>
          <Container className="landing-section" style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419_1280.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px', // Set height of the container
            width: '100%' // Set width of the container
          }}>
            <div className="landing-content">
              <h1 className='text-white'>Find Your Dream Job</h1>
              <p className='text-white'>Explore thousands of job opportunities tailored just for you.</p>
              <Link className='btn btn-info m-3' to={'/employee'}>Find Jobs</Link>
            </div>
          </Container>
        </Col>
        <Col className='m-3'>
          <Container className="landing-section" style={{
            backgroundImage: "url('https://media.istockphoto.com/id/1207819651/photo/a-businessman-examines-customers-on-his-phone.jpg?s=612x612&w=0&k=20&c=ELwk7ngCOssmgUR7a_nGFH7qPQHITILDJDTz7rJMny0=')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px', // Set height of the container
            width: '100%' // Set width of the container
          }}>
            <div className="landing-content">
              <h1 className='text-white'>Hire Top Talent</h1>
              <p className='text-white'>Connect with skilled professionals to grow your team.</p>
              <Link className='btn btn-info' to={'/company'}>Offer Jobs</Link>
            </div>
          </Container>
        </Col>
      </Row>
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
    </div>
  );
}

export default Home;
