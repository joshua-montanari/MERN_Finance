import React, { useContext, useEffect } from 'react'
import { Transaction } from './Transaction'

import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {

    const { transactions, getTransactions } = useContext(GlobalContext)

    useEffect(() => {
        getTransactions();
    }, [])

    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))} 
                {/* for each transaction it creates a transaction component, passing in the transaction from the context as a prop */}
            </ul>
        </>
    )
}
