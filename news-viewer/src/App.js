import React, { useState, useCallback } from 'react';
import {Route} from 'react-router-dom'
import NewsPage from "./pages/NewsPage";
import axios from 'axios';
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

const App = () =>  {
    return <Route path="/:category?" component={NewsPage}/>;
}
//     const [category, setCategory] = useState('all');
//     const onSelect = useCallback(category => setCategory(category),[]);
//
//     return (
//         <>
//             <Categories category={category} onSelect={onSelect}/>
//             <NewsList category={category}/>;
//         </>
//     );
//     const api = 'd2a4471b049a490e9fb6d76c184cbffe'
//     const [data, setData] = useState(null);
//     const onClick = async() => {
//         try {
//             const response = await axios.get(
//                 'https://newsapi.org/v2/top-headlines?country=kr&apiKey=d2a4471b049a490e9fb6d76c184cbffe',
//             )
//             setData(response.data)
//
//         } catch (e){
//             console.log(e);
//         }
//     };
//     return(
//         <div>
//             <div>
//                 <button onClick={onClick}>불러오기</button>
//             </div>
//             {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/> }
//         </div>
//     );
// }

export default App;