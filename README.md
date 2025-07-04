<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Scroll Project - README</title>
<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f9f9fb;
    color: #222;
    line-height: 1.6;
    margin: 0;
    padding: 2rem;
  }

.container {
max-width: 800px;
margin: auto;
background: #fff;
padding: 2rem;
border-radius: 8px;
box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

h1 {
color: #49a6e9;
text-align: center;
margin-bottom: 0.5rem;
}

h2 {
color: #205375;
margin-top: 1.5rem;
border-bottom: 2px solid #49a6e9;
padding-bottom: 0.3rem;
}

ul {
list-style: none;
padding-left: 0;
}

li {
margin-bottom: 0.5rem;
position: relative;
padding-left: 1.5rem;
}

li::before {
content: "✅";
position: absolute;
left: 0;
color: #49a6e9;
}

.tech {
background: #f0f4f8;
padding: 1rem;
border-left: 4px solid #49a6e9;
margin-bottom: 1rem;
}

.section {
margin-bottom: 1rem;
}

code {
background: #eee;
padding: 0.2rem 0.4rem;
border-radius: 4px;
font-size: 0.95rem;
}
</style>

</head>
<body>
  <div class="container">
    <h1>Scroll Project</h1>
    <p>A responsive landing page with smooth scrolling, fixed navbar, and mobile menu toggle. Built with <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>.</p>

    <h2>🚀 Features</h2>
    <ul>
      <li>Smooth scroll navigation to sections</li>
      <li>Fixed navbar on scroll</li>
      <li>Mobile-friendly collapsible menu</li>
      <li>Back-to-top button</li>
      <li>Responsive design with clean typography and color</li>
    </ul>

    <h2>🧰 Technologies Used</h2>
    <div class="tech">
      <p><strong>HTML5</strong>: semantic markup</p>
      <p><strong>CSS3</strong>: variables, media queries, transitions, animations</p>
      <p><strong>Vanilla JavaScript</strong>: DOM manipulation, event listeners</p>
    </div>

    <h2>📖 How It Works</h2>
    <div class="section">
      <p>✅ Navbar is transparent on large screens and becomes fixed with a shadow when scrolling past the hero.</p>
      <p>✅ The menu button (<code>.nav-toggle</code>) shows or hides the links on smaller screens.</p>
      <p>✅ Clicking navigation links smoothly scrolls to the respective section.</p>
      <p>✅ A back-to-top button (<code>.top-link</code>) appears after scrolling down 500px.</p>
      <p>✅ Sections: Home, About, Services, Tours.</p>
    </div>

  </div>
</body>
</html>
