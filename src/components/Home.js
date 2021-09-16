import React from 'react'
import "./Home.css"

const Home = () => {
    return (
        <div class="flex-container">

            <div class="flex-child">
             <img className="img-fluid" src={` ${process.env.PUBLIC_URL}/assets/images/jojo.jpeg`} alt="jojo" />
            </div>

            <div class="flex-child right">
                <h1 class="home-h1">Hi I am, <br />
                     Nyenpandi Josephine Bropleh Holder</h1>
                <p class="p1">I am a Full Stack JavaScript Developer.</p>
                <p>A warm Welcome to My Website.</p>
            </div>
            
        </div>
        
    )
}

export default Home
