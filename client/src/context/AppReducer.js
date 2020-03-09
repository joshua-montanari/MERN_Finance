//reducer specifies the application state changes based off actions 
export default (state, action) => {
    switch(action.type){

        case 'GET_TRANSACTIONS':
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
                //filters out any transaciton that has the id that was delete was cliked on
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [...state.transactions, action.payload]
                //the spread grabs all the exsisting transactions, the action.payload us the one being added
            }
            case 'TRANSACTION_ERROR':
                return{
                    ...state,
                    error: action.payload
                }
        default: 
            return state
    }
}