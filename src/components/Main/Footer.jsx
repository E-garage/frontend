import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className="bg-indigo-800 rounded-xl text-white px-4 pt-2 mt-20 lg:mt-60">
    <div className="lg:w-1/2 mx-auto text-center mt-5">
      <h1 className="text-5xl font-light">Do you need help?</h1>
      <p className="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis in quam
        eget quam ultricies id. Viverra tincidunt nulla egestas bibendum. Risus
        vitae vitae a nibh lacus elit. Dictum aliquam volutpat amet pulvinar
        fermentum eget.
      </p>
      <div className="w-80 flex justify-between mx-auto mt-5">
        <Link to="/" className="bg-white rounded-xl text-black py-1 px-3">
          <span className="mr-2">👀</span>Insights
        </Link>
        <Link to="/" className="bg-white rounded-xl text-black py-1 px-3">
          <span className="mr-2">👋</span>Contact
        </Link>
      </div>
    </div>
    <div className="w-4/5 h-px bg-gray-600 mt-5 mx-auto"></div>
    <p className="text-center mt-10 font-light">© 2021 E-garage company</p>
  </footer>
);

export default Footer;
