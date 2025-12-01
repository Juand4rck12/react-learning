import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function HomeComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(res => setData(res.data))
      .catch(error => console.error(error));
  }, [])

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>List of users</h1>
      <div className='w-75 rounded bg-white border shadow p-4'>
        <div className="d-flex justify-content-end">
          <Link to={'/create'} className='btn btn-sm btn-secondary mb-2'>
            <i class="bi bi-plus-circle"></i> Add
          </Link>
        </div>
        <table className='table table-bordered table-striped table-hover'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((data, index) => (
                <tr key={index}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td className="text-center">
                    <button className='btn btn-sm btn-info me-2'>
                      <i class="bi bi-eye"></i> Read
                    </button>
                    <button className='btn btn-sm btn-primary me-2'>
                      <i class="bi bi-pencil-square"></i> Edit
                    </button>
                    <button className='btn btn-sm btn-danger'>
                      <i class="bi bi-trash"></i> Delete
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HomeComponent
