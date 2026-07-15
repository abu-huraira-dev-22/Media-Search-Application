
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
          <div className="px-10 py-6 bg-(--c2) flex justify-between items-center">
        <h2 className="font-semibold text-2xl">MediaSearch</h2>
        <div className="flex gap-5 text-xl items-center">
            <Link to='/' className="text-base font-medium bg-(--c4) text-(--c1) rounded px-4 py-2">Search</Link>
            <Link to='/collection' className="text-base font-medium bg-(--c4) text-(--c1) rounded px-4 py-2">Collection</Link>
        </div>
      </div>
  )
}

export default Navbar
