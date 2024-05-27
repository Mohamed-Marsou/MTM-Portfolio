import "../scss/Contact.scss";
import svg from "../assets/images/example-animate.svg";
const Contact = () => {
  return (
    <div id="contact-container">
      <h3>Reach out</h3>
      <div>
        <form>
          <input type="text" placeholder="Full name" />
          <input type="email" placeholder="Email" />

          <input type="text" placeholder="Subject" />

          <textarea placeholder="Message"></textarea>

          <button>SEND</button>
        </form>
        <div className="svg-container">
          <img src={svg} alt="svg" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
