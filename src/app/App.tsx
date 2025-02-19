import { useEffect } from "react"
import { $api } from "../shared/api/api";

function App() {

  useEffect(()=> {
    const test = $api.get('/testApi');
    test.then((response)=> console.log('response --- >>> ', response));
  }, []);

  return (
    <div>
        App
    </div>
  )
}

export default App
