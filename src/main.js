// Simple perfume website for Live Server
document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('root');
  
  const perfumes = [
    'Aventus',
    'Baccarat Rouge 540', 
    'Baltus',
    'Enigma',
    'Hermes',
    'Le Labo Santal 33',
    'Tom Ford'
  ];

  const html = `
    <div style="
      padding: 2rem; 
      text-align: center;
      font-family: 'Playfair Display', serif;
      background: #F4EBD4;
      min-height: 100vh;
    ">
      <header style="margin-bottom: 3rem;">
        <h1 style="
          color: #434038; 
          font-size: 3rem; 
          margin-bottom: 1rem;
          font-weight: 700;
        ">LUXE</h1>
        <p style="
          color: #666; 
          font-size: 1.2rem;
          font-family: 'Inter', sans-serif;
        ">Premium Perfumes</p>
      </header>
      
      <main>
        <section style="margin-bottom: 4rem;">
          <h2 style="
            font-size: 2.5rem; 
            color: #434038;
            margin-bottom: 1rem;
          ">Our Collection</h2>
          <p style="
            font-size: 1.1rem; 
            color: #666; 
            max-width: 600px; 
            margin: 0 auto 3rem auto;
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
          ">
            Discover the art of fragrance. Each scent tells a unique story, 
            crafted with the finest ingredients to create unforgettable moments.
          </p>
          
          <div style="
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
          ">
            ${perfumes.map((perfume, index) => `
              <div style="
                background: white;
                padding: 2rem;
                border-radius: 20px;
                box-shadow: 0 10px 30px rgba(67, 64, 56, 0.1);
                transition: transform 0.3s ease;
                cursor: pointer;
              " onmouseover="this.style.transform='translateY(-10px)'" 
                 onmouseout="this.style.transform='translateY(0)'">
                <div style="
                  width: 100px;
                  height: 200px;
                  background: linear-gradient(135deg, #8B7355 0%, #A08B6B 50%, #8B7355 100%);
                  border-radius: 50px 50px 25px 25px;
                  margin: 0 auto 1.5rem auto;
                  position: relative;
                ">
                  <div style="
                    position: absolute;
                    top: -15px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 60px;
                    height: 30px;
                    background: #434038;
                    border-radius: 30px 30px 0 0;
                  "></div>
                </div>
                <h3 style="
                  font-size: 1.5rem; 
                  color: #434038;
                  margin-bottom: 0.5rem;
                  font-weight: 600;
                ">${perfume}</h3>
                <p style="
                  color: #8B7355; 
                  font-weight: bold;
                  font-size: 1.2rem;
                  margin-bottom: 1rem;
                ">$${Math.floor(Math.random() * 200) + 250}</p>
                <button style="
                  background: #434038;
                  color: white;
                  border: none;
                  padding: 1rem 2rem;
                  border-radius: 50px;
                  cursor: pointer;
                  font-weight: 600;
                  font-family: 'Inter', sans-serif;
                  transition: all 0.3s ease;
                  width: 100%;
                " onmouseover="this.style.background='#8B7355'" 
                   onmouseout="this.style.background='#434038'">
                  Add to Cart
                </button>
              </div>
            `).join('')}
          </div>
        </section>
      </main>
      
      <footer style="
        background: #434038; 
        color: #F4EBD4; 
        padding: 2rem;
        margin-top: 4rem;
        border-radius: 20px 20px 0 0;
      ">
        <p style="margin: 0; font-family: 'Inter', sans-serif;">
          &copy; 2024 LUXE. All rights reserved.
        </p>
      </footer>
    </div>
  `;
  
  root.innerHTML = html;
}); 