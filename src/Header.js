function Header(){

    return(
        <div className="header"
        style={{display:"flex",
            flexDirection:"rows"
        }}
        >
            <div>
            <img style={{borderRadius:"50%",marginTop:"15px" }} src="https://yt3.googleusercontent.com/ytc/AIdro_kNaumymcxYzV7_n7_VRbQ2TRlIbU2w5csOMN0cH8jiED8=s160-c-k-c0x00ffffff-no-rj" alt="Image not found" />
            </div>

            <div style={{textAlign:"left",marginLeft:"15px"}}>
            <h1 style={{marginTop:"0px"}}>CodeWithHarry</h1>

            <p>@CodeWithHarry • 6.18M subscribers • 2.3K videos</p>

            <p>Code With Harry is my attempt to teach basics and those coding techniques to people</p>

            <button style={{backgroundColor:"black",color:"white",fontSize:"14px",padding:"10px 20px",borderRadius:"22px",fontWeight:"500",}}><b>Subscribe</b></button>

            <button style={{color:"black",padding:"10px 20px",backgroundColor:"white",borderRadius:"20px",border:"1px solid hwb(0 34% 65%)",fontSize:"16px",fontWeight:"500", marginLeft:"15px"}}>Join</button>
            </div>
            

        </div>
    );
}

export default Header;