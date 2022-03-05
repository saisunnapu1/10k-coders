// import axios from 'axios'
import { useSelector,useDispatch} from 'react-redux'
import FetchData from '../Redux-Components/ApiFire/ApiAction'

function ApiFetch(props) {
    const data=useSelector(state=>state.ApiData)
    const dispatch=useDispatch()
    // const[posts,setPosts]=useState([])

    // useEffect(
    //     ()=>{
    //         axios.get('https://gorest.co.in/public/v2/posts').
    //         then((res)=>{
    //             console.log(res.data);
    //             console.log(res.data[0]);
    //             setPosts(res.data)
    //         })
    //     },[]
    // )

  return (
    <div>
        {/* <FetchData/> */}
      {/* <h1>API fire</h1>
        <ul>
        {
            posts.map((posts,id)=>(<li key={id} >
                {posts.id}
            </li>))
        }
    </ul>  */}
     <h1>Api Fetching</h1>
     <h1>{data}</h1>
        
        <button onClick={
            ()=>dispatch(<FetchData/>)
        } > React redux hook fetch api</button>
      

    </div>
  )
}

export default ApiFetch
