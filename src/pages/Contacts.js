function Contacts() {

    return (
        <div className="Contacts">
            <main className="section">
                <div className="container">
                    <h1 className="title-1">Contacts</h1>

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Location</h2>
                            <p>Большая Аря</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Telegram / WhatsApp</h2>
                            <p><a href="tel:+79043965713">+7 (904) 396-57-13</a></p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Email</h2>
                            <p><a href="mailto:webdev@protonmail.com">webdev@protonmail.com</a></p>
                        </li>
                    </ul>

                </div>
            </main>
        </div>
    )
}
export default Contacts