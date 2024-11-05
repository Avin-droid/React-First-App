import '../css/SingleEmployeeView.css'
export default function SingleEmployeeView({sEmp,emp,setEmp})
{
    function DeleteEmp(id)
    {
        setEmp((rec)=>rec.filter((temp)=>temp.emp_id !==id))
        alert('Employee Record Deleted Successfully...')
    }

    function UpdateEmp(id)
    {
        
    }
    return(<>
      <h2>Employee Database</h2>
      <table align="center" key={sEmp.emp_id}>
        <tr>
            <th>Employee-ID</th>
            <th>First-Name</th>
            <th>Last-Name</th>
            <th>Email-Id</th>
            <th>Address</th>
            <th>Contact</th>
            <th>DELETE</th>
            <th>UPDATE</th>
        </tr>

        <tr>
            <td>{sEmp.emp_id}</td>
            <td>{sEmp.firstname}</td>
            <td>{sEmp.lastname}</td>
            <td>{sEmp.Email}</td>
            <td>{sEmp.Address}</td>
            <td>{sEmp.Contact}</td>
            <td><button key={sEmp.firstname} onClick={()=>DeleteEmp(sEmp.emp_id)} className="delete-btn">DELETE</button></td>
            <td><button className="update-btn">UPDATE</button></td>

        </tr>
        <br></br><br></br>

      </table>
        
        
    </>)
}