import { useEffect } from 'react';
import Quoteform from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom';
import useHttp from '../components/hooks/use-http';
import { addQuote } from '../components/lib/api';

const NewQuotes = ()=>{
    const {sendRequest,status} = useHttp(addQuote);
    const history = useHistory();
    useEffect(()=>{
        if(status==='completed'){
            history.push('/quotes')
        }
    },[status,history]);
    const addQuoteHandler = quoteData=>{
        sendRequest(quoteData);
    };

    return(<Quoteform isLoading={status === 'pending'} onAddQuote={addQuoteHandler}/>);
}
export default NewQuotes;