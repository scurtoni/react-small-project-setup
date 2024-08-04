
import { Link } from "react-router-dom";


function Page1 () {
    return (<div> page 1 <Link to={`/page2`}>page 2</Link></div>)
}

export default Page1