import logo from '../assets/vecteezy_note-3d-illustration_13391083.png';

export const Navbar = () => {
  return (
        <header className='flex w-full h-16  border-b-2 mt-2 border-gray-100 text-gray-900 '>
            <div className='w-12 h-12  pl-2 pt-2 '>
                <img src={logo} alt="Logo"  className="w-full h-full "/>
                
            </div>
            <h1 className='font-bold  text-3xl pt-3 '>NoteIt</h1>
        </header>
    );
}