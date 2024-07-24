import "./Startup.css";

const Startup = () => {
    return (
        <div className="startup">
            <section className="logincont">
                <div><img src="logo.png" alt="Company Logo" /></div>
                <form action="submit">
                    <input type="email" placeholder="Email eg: abc@gmail.com" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit" className="loginbut">
                        <h3>Login</h3>
                    </button>
                </form>
            </section>
        </div>
    );
}

export default Startup;
