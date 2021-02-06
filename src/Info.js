
const Info = () => {

    const handleClick = async () => {
        const response = await fetch("https://api.randomuser.me/")
        const data = await response.json();
        const user = data.results[0];

        // write on dom
        const gender = document.querySelector("#gender");
        const name = document.querySelector("#name");
        const age = document.querySelector("#age");
        const phone = document.querySelector("#phone");
        const img = document.querySelector("#img");
        const info = document.querySelectorAll(".info");

        gender.innerHTML = `Gender : ${user.gender}`;
        name.innerHTML = `Name : ${user.name.title} ${user.name.first} ${user.name.last}`;
        age.innerHTML = `Age : ${user.dob.age}`;
        phone.innerHTML = `Phone no: ${user.phone}`
        img.classList.remove("hidden")
        img.src = `${user.picture.large}`
        info.forEach(e => { e.style.textAlign = "left"; e.style.width = "250px"; e.style.margin = "auto"; e.style.lineHeight = "2" })
    }

    const refreshPage = () => {
        window.location.reload();
    }

    // const clearBg = () => {
    //     document.querySelector("#canvas").remove();
    // }

    return (
        <div className="position-fixed top-50 start-50 translate-middle container">
            <button className="reload btn btn-info" onClick={refreshPage}>🗑</button>
            <h1>Random Person</h1>
            <p id="name" className="info"></p>
            <p id="gender" className="info"></p>
            <p id="age" className="info"></p>
            <p id="phone" className="info"></p>
            <img id="img" className="hidden info" src="" alt="person" />
            <button className="search btn btn-info" onClick={handleClick}>search</button>
            {/* <button className="clearBg btn btn-info" onClick={clearBg}>clear background</button> */}
        </div>
    );
}

export default Info;