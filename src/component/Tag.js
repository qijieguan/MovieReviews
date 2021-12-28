
const Tag = ({ toggleTag, resetTag }) => { 

    const genre = 
        [
            {id:28,name:"Action"},
            {id:12,name:"Adventure"},
            {id:16,name:"Animation"},
            {id:35,name:"Comedy"},
            {id:80,name:"Crime"},
            {id:99,name:"Documentary"},
            {id:18,name:"Drama"},
            {id:10751,name:"Family"},
            {id:14,name:"Fantasy"},
            {id:36,name:"History"},
            {id:27,name:"Horror"},
            {id:10402,name:"Music"},
            {id:9648,name:"Mystery"},
            {id:10749,name:"Romance"},
            {id:878,name:"Science Fiction"},
            {id:10770,name:"TV Movie"},
            {id:53,name:"Thriller"},
            {id:10752,name:"War"},
            {id:37,name:"Western"}
        ];

    return (
        <div className="tag-container">
            {genre.map(tag => {
                return(<div key={tag.id} id={tag.id} onClick={() => toggleTag(tag.id)} className="tag">{tag.name}</div>);
            })}
            <div onClick={() => resetTag()} className="reset-tag" style={resetStyle}>Reset</div>
        </div>        
    );
}

const resetStyle = {
    backgroundColor: 'red'
}

export default Tag;
