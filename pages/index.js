export default function Home() {
  return (
    <>
    <div className="container">
      <nav>
        <div className="mybrand">Mon Site</div>
        <div>
          <form action="#">
            <label className="switch">
              <input type="checkbox"/>
              <span className="slider"></span>
            </label>
          </form>
        </div>
      </nav>
      <section>
        <div className="heroSection">
          <h1>Oh, Hi there ! I'm Layla 🌒</h1>
          <button className="primary-btn">Connect with me</button>
        </div>
      </section>
    </div>
    </>
  )
}
