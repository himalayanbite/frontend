const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 ">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Himalayan Bite</h2>
          <p className="text-sm leading-6">
            We provide high quality products with the best customer experience.
            Shop with confidence and enjoy secure payments.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Shipping Policy</li>
            <li className="hover:text-white cursor-pointer">Return Policy</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm">Savonlinna, Finland</p>
          <p className="text-sm">Email: bitehimalayan@gmail.com</p>
          <p className="text-sm">Phone: +358 413254900</p>
        </div>

      </div>

      <div className="border-t border-gray-800 py-4 text-center text-sm">
        © {new Date().getFullYear()} Himalayan Bite. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer