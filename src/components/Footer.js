import { FaLinkedin, FaInstagram, FaFacebook, FaPinterest, FaTwitter } from 'react-icons/fa';
import DineDash from "../utils/DineDash.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-zinc-50 text-gray-700 py-10 px-6 md:px-20 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        
        {/* Logo and Copyright */}
        <div className="space-y-2">
          <Link className="flex items-center" to="/"><img className="logo h-16 pr-4" src={DineDash}/>
          <p>© 2025 DineDash Limited</p></Link>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>DineDash Corporate</li>
            <li>Careers</li>
            <li>Team</li>
            <li>DineDash One</li>
            <li>DineDash Instamart</li>
            <li>DineDash Dineout</li>
            <li>DineDash Genie</li>
            <li>Minis</li>
            <li>Pyng</li>
          </ul>
        </div>

        {/* Contact Links */}
        <div>
          <h4 className="font-semibold mb-2">Contact us</h4>
          <ul className="space-y-1">
            <li>Help & Support</li>
            <li>Partner With Us</li>
            <li>Ride With Us</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">Legal</h4>
          <ul className="space-y-1">
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Available In */}
        <div>
          <h4 className="font-semibold mb-2">Available in:</h4>
          <ul className="space-y-1">
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>
        </div>

        {/* Life at Swiggy & Social */}
        <div>
          <h4 className="font-semibold mb-2">Life at DineDash</h4>
          <ul className="space-y-1 mb-4">
            <li>Explore With DineDash</li>
            <li>DineDash News</li>
            <li>Snackables</li>
          </ul>

          <h4 className="font-semibold mb-2">Social Links</h4>
          <div className="flex gap-3 text-xl">
            <FaLinkedin />
            <FaInstagram />
            <FaFacebook />
            <FaPinterest />
            <FaTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
