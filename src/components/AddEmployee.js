import {v4 as uuidv4} from 'uuid'
import '../css/AddEmployee.css'
export default function AddEmployee({emp,setEmp})

{
    function newEmployee(e)
    {
        e.preventDefault()
        let fname=e.target.fnm.value
        let lname=e.target.lnm.value
        let email=e.target.eml.value
        let address=e.target.addr.value
        let contact=e.target.cno.value

        let custObj=
        {
            emp_id:uuidv4(),
            firstname:fname,
            lastname:lname,
            Email:email,
            Address:address,
            Contact:contact
        }
        alert('Employee Record Added Successfully...')
        setEmp((e)=>[...e,custObj])
        e.target.fnm.value=''
        e.target.lnm.value=''
        e.target.eml.value=''
        e.target.addr.value=''
        e.target.cno.value=''
    }






    return(<div>
        <form onSubmit={newEmployee}>
            First Name:<input type="text" name="fnm" ></input><br></br><br></br>
            Last Name:<input type="text" name="lnm" ></input><br></br><br></br>
            Email-Id:<input type="text" name="eml" ></input><br></br><br></br>
            Address:<input type="text" name="addr" ></input><br></br><br></br>
            Contact:<input type="text" name="cno" ></input><br></br><br></br>
            <input type="submit" value="ADD EMPLOYEE" />
        </form>
    </div>)
}