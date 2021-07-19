import './Header.scss'
// import '../App.scss'

function Header() {
    return(
        <div className="header-dark">
            {/* <nav className="navbar navbar-dark navbar-expand-lg navigation-clean-search">
                <div className="container"></div>
            </nav> */}
            <div className="container hero">
                <div>
                    <h1 className="heading-one text-color-white">Ecosystem Establishment and Storytelling</h1>
                    <p className="lead-one text-color-white">Kami membentuk ekosistem alternatif selain akademis dan organisasi</p>
                    <p className="lead-one text-color-white">Kami menceritakan perjalanan program secara menyeluruh</p>
                    <p className="lead-one text-color-white">Dari, oleh, dan untuk pemuda-pemudi Indonesia</p>
                </div>
            </div>
        </div>
    )
}

export default Header