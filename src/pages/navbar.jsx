import {House, SquareMenu, ShoppingCart} from 'lucide-react'

function Navbar() {
  return (
    <div className="fixed bottom-0 w-screen h-20 rounded-t-4xl bg-white flex justify-center items-center shadow-custom">
      <ul className="flex gap-10">
        <a href=""><li> <House size={50} color="#504B38" strokeWidth={1.5} /></li></a>
        <a href=""><li> <SquareMenu size={50} color="#504B38" strokeWidth={1.5} /></li></a>
        <a href=""><li> <ShoppingCart size={50} color="#504B38" strokeWidth={1.5} /></li></a>
      </ul>
    </div>
  )
}

export default Navbar