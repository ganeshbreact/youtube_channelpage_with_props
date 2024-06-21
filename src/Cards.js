function Cards({imgLink,p1,sp1}){
    return (
    <div style={{width:"250px",  margin:"6px"}}>

        
        <div className="img1" >
            <img style={{width:"250px", height:"150px",borderRadius:"15px"}} src={imgLink} alt="" />
        </div>

        <p style={{fontSize:"15px",textAlign:"start"}}>{p1}</p>

        <div >
        <span style={{fontSize:"12px"}}>{sp1}</span>
        </div>

        

    </div>
    );
}

export default Cards;