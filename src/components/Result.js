import resultone from './resultOne.jpg'

const Result = () => {
    return (
        <div className="container mt-5 w-70">
            <div className="result">
                
                <div className="bg-accent side-nav-container">
                <h2 className="result-title">You got Old Money</h2>
                    <img src={resultone} alt="quiz image" className="max-width result-img" />
                    <p>Chairman sir!!! Your money is long, you know billionaires personally. Now playing… of lay lay lay…. Of Lagos. Anything for the boys? We are loyal</p>
                    <button className="btn social facebook mb-4 p-3">Share on Facebook</button>
                    <button className="btn social twitter mb-4 p-3">Share on Twitter</button>
                    <button className="btn social whatsapp  mb-4 p-3">Share on WhatsApp</button>
                    <div className="utility-icons">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result
