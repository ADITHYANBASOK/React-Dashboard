import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {  Button, Card, Container,  SmallText,  Text, Title } from '../Styles/CommonStyles'
import { Column, ErrorText, Row, StyledInput, StyledLabel } from '../Styles/RegisterStyles';


function Register() {
    const validationSchema = Yup.object({
        firstName: Yup.string()
          .required('First Name is required'),
        lastName: Yup.string()
          .required('Last Name is required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
      });
  return (
    <>
      <Container>
            <Title color='green'>Concepta</Title>
            <Text color='gray'>Concept Thoroughly</Text>
            <Card>
                <Title>Welcome</Title>
                <SmallText>Lorem ipsum dolor sit amet, concesture adipiscing elit.<br/>Quam duis vitae curabitur amet, fermentum lorem</SmallText>
                <Formik
        initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form className="form-floating mb-3">
            <Row>
              <Column>
                <label htmlFor="floatingInput">First Name</label>
                <StyledInput name="firstName" type="text" id="floatingInput"/>
                <ErrorMessage name="firstName" component={ErrorText} />
              </Column>
              <Column>
                <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
                <StyledInput name="lastName" type="text" />
                <ErrorMessage name="lastName" component={ErrorText} />
              </Column>
            </Row>
            <div>
              <StyledLabel htmlFor="email">Email</StyledLabel>
              <StyledInput name="email" type="email" />
              <ErrorMessage name="email" component={ErrorText} />
            </div>
            <div>
              <StyledLabel htmlFor="password">Password</StyledLabel>
              <StyledInput name="password" type="password" />
              <ErrorMessage name="password" component={ErrorText} />
            </div>
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
            </Card>


      </Container>
    </>
  )
}

export default Register
