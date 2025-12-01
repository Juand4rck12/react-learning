import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"

function UpdateComponent() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then(res => {
        setValues(res.data)
      })
      .catch(error => console.error(error));
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3000/users/${id}`, values)
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(error => console.error(error));
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Update a user</h1>
        <form onSubmit={handleUpdate}>
          <div className="row mb-2">
            <div className="col">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" className='form-control' placeholder='Enter name' required
                value={values.name} onChange={e => setValues({ ...values, name: e.target.value })} />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" className='form-control' placeholder='Enter email' required
                value={values.email} onChange={e => setValues({ ...values, email: e.target.value })} />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col">
              <label htmlFor="phone">Phone:</label>
              <input type="text" name="phone" id="phone" className='form-control' placeholder='Enter phone' required
                value={values.phone} onChange={e => setValues({ ...values, phone: e.target.value })} />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6">
              <button className="btn btn-success w-100">
                <i class="bi bi-floppy"></i> Update
              </button>
            </div>
            <div className="col-lg-6">
              <Link to={'/'} className="btn btn-secondary w-100">
                <i class="bi bi-arrow-return-left"></i> Back
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateComponent
