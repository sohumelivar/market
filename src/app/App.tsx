import { Categories } from "@widgets/Categories"
import { ItemBlock } from "@widgets/ItemBlock"
import { Navbar } from "@widgets/Navbar";
import { SearchBar } from "@widgets/SearchBar"
import { useEffect, useState } from "react"

function App() {
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=50')
      .then(response => response.json())
      .then(json => setItem(json))
  }, [item])

  return (
    <div className={'wrapper'}>
      <div className={'header'}>
        <SearchBar />
      </div>
      <div className={'categories'}>
        <Categories />
      </div>
      <div className={'content'}>
        {item && item.map((el: any) => (
          <ItemBlock key={el.id} item={el} />
        ))}
      </div>
      <div className={'navbar'}>
        <Navbar />
      </div>
    </div>
  )
}

export default App
