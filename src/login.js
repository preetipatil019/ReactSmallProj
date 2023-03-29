const Login = () => {

    return (
        <div>
            {isUserLoggedin ? <AdminPanel /> : <LoginForm />}   
        </div>
    )
}

export default Login;