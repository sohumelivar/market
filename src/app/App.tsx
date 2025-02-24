import { Categories } from "@widgets/Categories"
import { SearchBar } from "@widgets/SearchBar"

function App() {

  return (
    <div className={'wrapper'}>
      <div className={'header'}>
        <SearchBar />
      </div>
      <div className={'categories'}>
        <Categories />
      </div>
    </div>
  )
}

export default App
