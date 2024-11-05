import AddEmployee from "./AddEmployee"
import EmployeeView from "./EmployeeView"
import Header from "./Header"
import {useState} from "react"


export default function EmployeeApp({title})
{
    const [emp,setEmp]=useState([])

    return(<div>
        <Header t={title}></Header>
        <AddEmployee emp={emp} setEmp={setEmp}></AddEmployee>
        <EmployeeView emp={emp} setEmp={setEmp}></EmployeeView>
    </div>)
}