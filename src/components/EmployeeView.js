import SingleEmployeeView from "./SingleEmployeeView"

export default function EmployeeView({emp,setEmp})
{
    return(<>
        {emp.map((rec)=><SingleEmployeeView sEmp={rec} emp={emp} setEmp={setEmp}></SingleEmployeeView>)}
    </>)
}