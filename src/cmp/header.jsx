import logo from '../assets/imgs/myteam.png'

export const Header = () => {
    return (
        <header className="header main-layout">
            <section className='header-container flex column'>
                <nav className="flex space-between align-center">
                    <ul className='nav-bar clean-list flex align-center'>
                        <li className="logo"><img src={logo} alt="" /></li>
                        <li>home</li>
                        <li>about</li>
                    </ul>
                    <div className='contact-us'>contact us</div>
                </nav>
                <div className='headline flex'>
                    <h1>
                        Find the {'\u00A0'} best <span>talent</span>
                    </h1>
                    <p>
                        Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.
                    </p>
                </div>
            </section>
        </header>
    )
}