import {Link, NavLink} from 'react-router-dom';
import {IoHome, IoTrashBin} from 'react-icons/io5'
import {MdLabelImportant,MdOutlineArchive} from 'react-icons/md'
export const Sidebar = () => {
    const getStyles = ({ isActive }) => {
        const stableStyles = 'flex items-center space-x-2 text-gray-800';
        return isActive ? ` text-white bg-indigo-600 rounded-md px-2 py-1 ${stableStyles}` 
        : ` hover:text-blue-600 ${stableStyles}`;
    }

    return (
        <aside className='flex flex-col gap-4 p-4 border-r-2 border-gray-100 h-screen w-[300px] text-gray-900 font-semibold text-lg'>
            <NavLink to='/' className={getStyles}>
                <IoHome className='text-xl'/>
                <span>Home</span>
            </NavLink>
            <NavLink to='/important' className={getStyles}>
                <MdLabelImportant className='text-xl' />
                <span>Important</span>
            </NavLink>
            <NavLink to='/archive' className={getStyles}>
                <MdOutlineArchive className='text-xl'/>
                <span>Archive</span>
            </NavLink>
            <NavLink to='/bin' className={getStyles}>
                <IoTrashBin className='text-xl'/>
                <span>Bin</span>
            </NavLink>
        </aside>
    )
}
