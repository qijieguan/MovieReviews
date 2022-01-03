import { AiOutlineHome, AiOutlineSave } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function SideBar() {

    const savedMovies = useSelector(state => state.saveList); 

    useEffect(() => {}, [savedMovies]);

    return (
        <nav className='side-bar'>
            <div id='home' style={Object.assign({borderRadius: '20px 0 0 0'}, boxStyle)}>
                <AiOutlineHome color='white' size={24}/>
            </div>
            <div id='save' style={Object.assign({borderRadius: '0 0 0 20px'}, boxStyle)}>
                <AiOutlineSave color='white' size={24}/>
                <div className="dot-icon"
                    style={{
                        position: 'absolute',
                        display: savedMovies.length > 0 ? '' : 'none',
                        right: savedMovies.length < 10 ? '20%' : '18%',
                        top: '32%',
                        textAlign: 'center',
                        minWidth: '18px',
                        color: 'white',
                        backgroundColor: 'red',
                        borderRadius: '10px'
                    }}
                >{savedMovies.length}</div>
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
