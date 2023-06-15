import './index.css'
export default function Header(){
  return(
    <div>
      <nav className="nav bg-light position-fixed top-0 right-0 left-0 justify-content-lg-between"  >
        <img className="img-fluid rounded" src={require("./profile.png")} alt="pic"></img>
        
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#/">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#/">Disabled</a>
          </li>
        
      </nav>
    </div>
  )
}