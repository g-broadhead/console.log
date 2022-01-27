import RegisterForm from '../../components/RegisterForm'
import LoginForm from '../../components/LoginForm'

const Auth = () => {
  return (
    <>
      <div className='container'>
        <div className='row bg-light p-5 rounded-lg m-3'>
          <h1 className='display-4'>Song App</h1>
          <p className='lead'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex a inventore quis laboriosam, quae nihil. Veritatis, aut voluptatem! Minima consectetur, modi consequuntur qui neque expedita? Beatae omnis ipsa quos dolor.
            Corrupti dolor repellat non accusamus nostrum necessitatibus, dicta libero. Dolorum blanditiis incidunt similique nesciunt laudantium est maiores deleniti consequatur debitis ipsam, animi eligendi alias suscipit error, doloremque facilis! Quod, saepe?
          </p>
          <hr className='my-4' />
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <h5>Register A New Account</h5>
            <hr />
            <RegisterForm />
          </div>
          <div className='col-md-6'>
            <h5>Log In To Existing Account</h5>
            <hr />
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth
