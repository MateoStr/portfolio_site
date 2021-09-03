import React from "react"


const bioStyle = {
    textAlign: "center"
}

const Bio = () => {
    return(<>
        <div style = {bioStyle}>
            <h1>Who am I?</h1>
            <p>
                My name is Mateo Strasdas. 
                I am a 2021 graduate of Camosun College's Information and Computer Systems Program.<br></br>
                Like many of my colleagues, my interest in cmputer software was kickstarted by a desire to make games.<br></br>
                This led me to hone my programming skills by whatever means were available to me at the age of 15 (youtube, mostly)<br></br>
                I maintained this autodidactic methodology of acquiring programming skills until I graduated high school.<br></br>
                From there, I immediately enrolled in Computer Science at UVIC. <br></br>
                After 2 years, I found that the content available to me at UVIC was too theoretical for my liking, and transferred to Camosun for their more hands-on approach to learning.<br></br>
                Now that I have finished post secondary education in the information techology sector, I look forward to applying my skills to further theadvancement of technology.
            </p>
                <br></br>
                <h2>What do I do now?</h2>
                <p>
                    Having just graduated, I am now looking to apply my skills through whatever opportunities are available.<br></br>
                    Have a website that needs a booking system? I'll gladly take on the challenge.<br></br>
                    Need an extra set of hands on a project with a bigger team of developers? I can be there to help lighten the laod.<br></br>
                    My interests now lie mainly in DevOps, back-end web development, and database administration.<br></br>
                    Although these are my interests and strengths, I am always looking for ways to expand my repertoire of skills.<br></br>
                    Now that you have an idea of who I am and what I bring to the table, why not get in touch with me?
                    [call to action here]
                </p>

        </div>    
    </>)
}

export default Bio;