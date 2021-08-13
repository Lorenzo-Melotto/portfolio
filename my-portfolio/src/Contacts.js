import map from './img/map.png';

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="email-phone">
                <h1>Contacts</h1>
                <ul>
                    <li><p>Email: <a href="mailto:lorenzo.melotto99@gmail.com">lorenzo.melotto99@gmail.com</a></p></li>
                    <li><p>Phone: +39 345 7653556</p></li>
                    <li><p>Instagram: <a href="https://www.instagram.com/lorenzo_melotto/">Instagram</a></p></li>
                </ul>
            </div>
            <div className="map">
                <h1>My location</h1>
                <img src={map} alt="A dummy map" />
            </div>
        </div>
    );
}

export default Contacts;