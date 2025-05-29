

function Footer() {
  return (
    <div>
      <div>
        <footer className="bg-gray-200 p-6 mt-10">
          <div className="container mx-auto text-center text-black">
            <p>&copy; 2025 MyLogo. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <p className="hover:text-gray-800">
                Privacy Policy
              </p>
              <p className="hover:text-gray-800">
                Terms of Service
              </p>
              <p className="hover:text-gray-800">
                Contact Us
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
