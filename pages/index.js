import { useEffect, useState } from 'react';

const HomePage = () => {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };
// Olala c'est un trou noir
  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', 'dark');
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute('data-theme');
        window.localStorage.setItem('theme', 'light');
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === 'dark');
  }, []);

  return (
    <>
    <div class="container">
      <nav>
        <div class="siteName">Mon Site</div>
        <div>
          <form action="#">
            <label class="switch">
              <input type="checkbox" unchecked={darkTheme} onChange={handleToggle}/>
              <span class="slider"></span>
            </label>
          </form>
        </div>
      </nav>
      <section>
        <div class="presentation">
          <h1>Oh, Hi there ! 🌙</h1>
          <button class="primary-btn">Connect with me</button>
        </div>
      </section>
    </div>
    </>
  );
};
// Tentative sneaky de branche
// Quel petit malin !
export default HomePage;
