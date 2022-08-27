import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <Card 
      img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
      title="HTML"
      description="The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript." />
      <Card 
      img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
      title="CSS"
      description="Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript." />
      <Card 
      img="https://global-uploads.webflow.com/6097e0eca1e875de53031ff6/61b813455c729b5a4574888b_js%20logo.png"
      title="JS"
      description="JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries." />
      
      
    </div>
  );
}

export default App;
