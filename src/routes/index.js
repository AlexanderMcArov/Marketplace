import React, { Suspense } from 'react'
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom'
import Layout from '../components/layouts/Layout'

const getLoggedInUser = ()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    return user
}

const isUserAuth = ()=>{
    const user = getLoggedInUser()
    if(!user){
        return false
    }
    return true
}

const PrivateRoute = (props) =>{
    const {children, ...rest} = props
    return (
        <Route {...rest} render={props=>{
            return isUserAuth() ? (children) : (
                <Redirect to={{
                    pathname: "/auth/login",
                    state: {from: props.location}
                }}
                />
            )
        }}/>
    )
}

const Home = React.lazy(()=>import('./Home'))
const AboutUs = React.lazy(()=>import('./AboutUs'))
const Admin = React.lazy(()=>import('./Admin'))

const Login = React.lazy(()=>import('./auth/Login'))
const Logout = React.lazy(()=>import('./auth/Logout'))
const Register = React.lazy(()=>import('./auth/Register'))

const Routes = ()=> {
    return(
        <BrowserRouter>
            <Suspense fallback={<div>Loading</div>}>
                <Switch>

                    <PrivateRoute exact path="/">
                        <Layout>
                            <Home/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path="/about-us">
                        <Layout>
                            <AboutUs/>
                        </Layout>
                    </PrivateRoute>

                    <PrivateRoute exact path="/admin">
                        <Layout>
                            <Admin/>
                        </Layout>
                    </PrivateRoute>

                    <Route exact path="/auth/login">
                        <Login/>
                    </Route>

                    <Route exact path="/auth/register">
                        <Register/>
                    </Route>

                    <Route exact path="/auth/logout">
                        <Logout/>
                    </Route>

                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Routes;