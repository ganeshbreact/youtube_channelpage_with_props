function SideBar()
{
    return(
    <div className="sidebar"
    style={{textAlign:"left",position:"fixed",
        top:"0px",}}>

        <ul style={{lineHeight:"280%",listStyleType:"none",paddingLeft:"50px"}}>
            <li>Home</li>
            <li>Shorts</li>
            <li>Subscriptions</li>
        </ul>

        <hr style={{opacity:"40%"}}/>

        <b style={{marginLeft:"10px",fontSize:"15px",}}>You U+003E </b>

        <ul style={{lineHeight:"280%",listStyleType:"none",paddingLeft:"50px"}}>
            <li>History</li>
            <li>Playlists</li>
            <li>Watch later</li>
            <li>Liked Videos</li>
        </ul>

        <hr style={{opacity:"40%"}} />

        <b style={{marginLeft:"10px",fontSize:"15px",}}>Explore</b>

        

        <ul style={{lineHeight:"280%",listStyleType:"none",paddingLeft:"50px"}}>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Movies</li>
        </ul>
    </div>
    );
}

export default SideBar;