 import './Header.css' 
const Header = () => {
  return (
    <>
      <section className="headercontainer">
        <div className="logo">
          <img src="logo.jpg" alt="" />
        </div>
        <div className="title"> <span>C</span>hatogram</div>
        <div className="headermenu">
          <div class="navbar">
            <div class="dropdown">
              <button class="dropbtn">
                <img src="setting.png" alt="" />
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">Settings</a>
                 
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
