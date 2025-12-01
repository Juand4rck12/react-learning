import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function ReadComponent() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then(res => setData(res.data))
      .catch(error => console.error(error));
  }, [id])
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h3>Detail of user</h3>
        <div className="row mb-3">
          <div className="col-lg-12">
            <strong>Name: {data.name}</strong>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-12">
            <strong>Email: {data.email}</strong>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-12">
            <strong>Phone: {data.phone}</strong>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mt-2">
            <Link to={`/update/${id}`} className='btn btn-sm btn-warning w-100'>
              <i class="bi bi-pencil-square"></i> Edit
            </Link>
          </div>
          <div className="col-lg-6 mt-2">
            <Link to={'/'} className="btn btn-sm btn-secondary w-100">
              <i class="bi bi-arrow-return-left"></i> Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReadComponent
