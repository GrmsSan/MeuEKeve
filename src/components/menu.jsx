import style from './menu.module.css';

export const Menu = (props) => {
    return(
    <>
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${style.navbar}`}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className={`navbar-nav ${style.navbarNav}`}>
            {props.option01}
            {props.option02}
            {props.option03}
            {props.option04}
            {props.option05}
          </div>
        </div>
      </div>
    </nav>
    </>
    )
}