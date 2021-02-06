const Info = () => {
    return (
        <div className="position-fixed top-50 start-50 translate-middle container">
            <button className="reload btn btn-info">🗑</button>
            <h1>Random Person</h1>
            <p id="name" className="info"></p>
            <p id="gender" className="info"></p>
            <p id="age" className="info"></p>
            <p id="phone" className="info"></p>
            <img id="img" className="hidden info" src="" alt="person" />
            <button className="search btn btn-info">search</button>
            <button className="clearBg btn btn-info">clear background</button>
        </div>
    );
}

export default Info;