import React from 'react'
import { Container, TextField, Button, Grid, FormGroup, makeStyles, Link, Card, CardContent } from '@material-ui/core'
import { Formik } from 'formik'
import MyValidator from 'validator'
import { useHistory } from 'react-router-dom'

function Login() {
    const useStyles = makeStyles(() => (
        {
            btnSubmit: {
                width: "100%",
                margin: "20px 0px"
            },
            inp: {
                margin: '10px'
            },
            signupLink: {
                display: 'block',
                textAlign: 'end'
            },
            fromWrapper:{
                display: 'flex',
                alignItems: 'center'
            }
        }
    ))
    const classes = useStyles()
    const history = useHistory()
    const LoginForm = ({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
    }) => (
            <form onSubmit={handleSubmit}>
                <img style={{height: '200px'}} src="https://klike.net/uploads/posts/2019-12/1575638735_2.jpg"></img>
                <h2>HO-HO-HO-HO</h2>
                <FormGroup>
                    <TextField
                        error={!!errors.email && touched.email&& touched.email}
                        className={classes.inp}
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        variant="outlined"
                        placeholder="Email"
                        helperText = {(!!errors.email && touched.email) && errors.email}
                    />
                    {(errors.email && touched.email) && (<span>{errors.email}</span>)}
                </FormGroup>
                <FormGroup>
                    <TextField
                        error={!!errors.password && touched.password}
                        className={classes.inp}
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        variant="outlined"
                        placeholder="Password"
                        helperText={(!!errors.password && touched.password)&& errors.password}
                    />
                </FormGroup>
                <Link onClick={() => history.replace("/auth/forgot-password")}>Forgot password?</Link>
                <Button className={classes.btnSubmit} variant="contained" color="primary" type="submit" disabled={isSubmitting}>
                    Отправить
            </Button>
                <Link className={classes.signupLink} onClick={() => history.replace("/auth/auth-register")}>Not register?</Link>
            </form>
        )

    const validator = (values) => {
        const errors = {}
        if (values.email.length == 0) {
            errors.email = "Это поле обязательно."
        } else if (!MyValidator.isEmail(values.email)) {
            errors.email = "Неккоректный email."
        } else if (values.password) {
            errors.password = "Это поле обязательно"
        }
        return errors
    }

    const handleFormSubmit = (values, helpers) => {
        console.log(values)
        setTimeout(() => {
            helpers.handleSubmitting(false)
        }, 1000)
    }

    return (
        <div style={{backgroundColor: '#777'}}>
            <Container maxWidth="md">
            <Grid className={classes.fromWrapper} container justify="center">
                <Grid item md={6} xs={12} sm={8}>
                    <Card>
                        <CardContent>
                            <Formik
                                initialValues={{ email: "", password: "" }}
                                validate={validator}
                                onSubmit={handleFormSubmit}
                            >
                                {LoginForm}
                            </Formik>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            </Container>
        </div>
    )
}

export default Login
