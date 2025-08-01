import { useContext } from 'react'
import Chart from "../components/Chart"
import {AppContext} from "../context/AppContext"
    

const DashBoard = () => {

    const {IncomeData, ExpenseData}=useContext(AppContext)

    const totalIncome = IncomeData.reduce((sum,item)=> sum + parseFloat(item.amount),0)

    const totalExpense = ExpenseData.reduce((sum,item)=>sum + parseFloat(item.amount),0)

    const totalBalance= totalIncome-totalExpense

return (
    <>
    <Chart IncomeData={IncomeData} ExpenseData={ExpenseData} />

    <div className='flex felx-row overflow-auto '>
        <div className='m-4 justify-between flex flex-col p-3 w-1/2 h-20'>
        <h1 className='font-bold text-sm md:text-2xl'>Total Income</h1>
        <p className='text-xl text-green-500 font-bold md:mt-2'>{totalIncome.toFixed(2)}</p>
        </div>
        <div className='m-4 justify-between flex flex-col p-3 w-1/2 h-20'>
        <h1 className='font-bold text-sm md:text-2xl'>Total Expense</h1>
        <p className='text-xl text-green-500 font-bold md:mt-2'>{totalExpense.toFixed(2)}</p> 
        </div>

        <div className=' flex md:mt-10'>
            <div className='flex flex-col items-center justify-between md:h-full w-96'>
                <h1 className='font-bold text-lg md:text-3xl underline'>Total Balance</h1>
                <p className='font-medium text-3xl md:text-7xl style={{ color: totalBalance<0? "red" : "green"}}'>${totalBalance.toFixed(2)}
                </p>
            </div>
            </div>
    </div>
    </>
    )
}

export default DashBoard