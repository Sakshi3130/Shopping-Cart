const Footer = () => {
  return (
    <footer className="bg-black flex justify-center items-center text-white py-4 mt-10 h-25">
      <div className="text-sm">
        © {new Date().getFullYear()} ShoppingCart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
