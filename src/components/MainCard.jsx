export default function MainCard() {
    return(
        <header className="header">
            <div className="main-block">
                <div>
                    <h1>Vite</h1>
                    <p className="subtitle">Next Generation Frontend Tooling</p>
                    <p className="slogan">Get ready for a development enviroment that can finally catch up with you</p>
                </div>
                <div className="actions">
                    <div>
                        <a>Get started</a>     
                    </div>
                    <div>
                        <a>Why Vite?</a>
                    </div>
                    <div>
                        <a>View on Github</a>
                    </div>
                    <div>
                        <a>🎉ViteConf 23!</a>
                    </div>
                </div>
            </div>
            <div className="image-container" >
                <img className="logo" src="https://vitejs.dev/logo-with-shadow.png" alt="Vite"/>
            </div>
        </header>
    )
}