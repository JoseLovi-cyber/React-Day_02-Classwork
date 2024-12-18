const h1Style = {
    fontFamily: "'Arial', sans-serif",

};

const pStyle = {
    fontFamily: "'Arial', sans-serif",
    fontSize: "20px",
    color: "grey"
};

const aStyle = {
    fontFamily: "'Arial', sans-serif",
    fontSize: "20px",
    color: "#3399ff"
};

const divStyle = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "50%",
    marginLeft: "30px"
};

const ThirdSection = () => {
    return(
        <div>
            <p style={pStyle}> If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.</p>
        </div>
    )
}


const SecondSection = () => {
    return(
        <div>
            <p style={pStyle}>The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from <a href="" style={aStyle}>the rest of MDN</a>, and other intermediate to advanced resources that assume a lot of previous knowledge.</p>
        </div>
    )
}


const FirstSection = () => {
    return(
        <div>
            <p style={pStyle}>Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.</p>
        </div>
    )
}

const ReactApp = () => {
    return(
        <div style={divStyle}>
            <hr />
            <h1 style={h1Style}>Learn web development</h1>
            <br />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
        </div>
    )
};

const rootDiv = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootDiv);

reactRoot.render(<ReactApp></ReactApp>);
