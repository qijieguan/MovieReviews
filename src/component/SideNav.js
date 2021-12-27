import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineSave } from 'react-icons/ai';
import { useSelector } from 'react-redux';

export default function SideBar() {

    const saveMovies = useSelector(state => state.saveList); 

    return (
        <nav className='side-bar'>
            <Link to='/' className='home' style={Object.assign({borderRadius: '20px 0 0 0'}, boxStyle)}>
                <AiOutlineHome color='white' size={24}/>
            </Link>
            <div className='save' style={Object.assign({borderRadius: '0 0 0 20px'}, boxStyle)}>
                <AiOutlineSave color='white' size={24}/>
                <div className="dot-icon" color='red' size={20} 
                    style={{
                        position: 'absolute',
                        display: saveMovies.length > 0 ? '' : 'none',
                        right: '21%',
                        top: '32%',
                        padding: '2px 5px',
                        color: 'white',
                        backgroundColor: 'red',
                        borderRadius: '10px'
                    }}
                >{saveMovies.length}</div>
            </div>     
        </nav>
    );
}

const boxStyle = {
    position: 'relative',
    display: 'flex', 
    height: '50%', 
    width: '100%'
}
