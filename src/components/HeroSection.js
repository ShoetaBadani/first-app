import profile from '../assets/images/me.jfif';
export const HeroSection = () => {
    return(
        <>
            <div className="container hero-section">
              <div className= "row">
                <div className="col col-sm-12 col-md-6 col-lg-6">
                   <h1 className="title-section">Hi, Shoeta Here!</h1>
                   <h3 className= "subheading">Software Engineer</h3>
                </div>

                <div className="col col-sm-12 col-md-6 col-lg-6">
                   {/* <img src={profile} alt = "profile"></img> */}
                </div>
              </div>
            </div>
        </>
    )
}

{/* <route path = "/projects" exact component={Projects} /> */}