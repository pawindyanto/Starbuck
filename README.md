<div align="center">
  <img src="Images/logo.png" alt="Starbucks Logo" width="80" />
  
  <h1>Starbucks Landing Page (Remastered)</h1>
  
  <p>
    <b>A trip down memory lane.</b><br>
    Revamping my old code from 6 years ago with modern CSS and Interactivity.
  </p>

  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</div>

<br />

## 📖 The Story: 6 Years Later

I originally created this project **6 years ago** when I was first starting my journey in web development. It was a simple static page back then.

Recently, I decided to dig up the old repository and **redesign it** using the knowledge I have now. The goal was to keep the original assets but completely overhaul the User Interface (UI) and User Experience (UX) to make it interactive, responsive, and modern.

## ✨ Key Features (The Upgrade)

Unlike the old static version, this remastered version includes:

* **🥤 Interactive Image Slider**: Clicking the drink thumbnails dynamically changes the main hero image without reloading the page.
* **🎨 Dynamic Theme Engine**: The entire color scheme (Background Circle, Text Highlights, Buttons) adapts automatically to match the flavor of the selected drink (Green, Pink, or Purple).
* **✨ Smooth Animations**: Added CSS transitions for hover effects and sliding elements.
* **📱 Clean Code Structure**: Refactored the messy legacy code into semantic HTML and organized CSS.

## 📸 Preview

<div align="center">
  <img src="https://github.com/pawindyanto/Starbuck/blob/main/starbucks.png" alt="Starbucks Redesign Preview" width="100%" style="border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.2);" />
</div>

## 🛠️ How It Works

The logic relies on Vanilla JavaScript to manipulate the DOM elements.

```javascript
// Example logic used in the project
function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color; // Changes the big circle background
}
