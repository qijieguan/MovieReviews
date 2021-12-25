import { BsSearch } from 'react-icons/bs'

export default function Header () {
    return (
        <header className="header">
            <div style={{display: 'inline-block', width: '30%'}}/>
            <div className="header-logo">MovieReviews</div>
            <div className="header-search" style={{display: 'inline-flex', width: '30%'}}>
                <input
                    placeholder='Search movie title'
                    style={inputStyle}
                />
                <div className='search-icon'>
                    <BsSearch color='grey'/>
                </div>
            </div>
        </header>
    );
}

const inputStyle = {
    textIndent: '20px',
    width: '50%', 
    border: '0', 
    borderRadius: '50px 0 0 50px',
}