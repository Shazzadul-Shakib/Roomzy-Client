const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      {/* SVG Logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 md:h-8 md:w-8 text-blue-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12c0 3.87 2.94 7.12 6.76 7.93v1.42c0 .83.67 1.5 1.5 1.5h3.48c.83 0 1.5-.67 1.5-1.5v-1.42C19.06 19.12 22 15.87 22 12c0-5.52-4.48-10-10-10zm1.5 18h-3v-1.5h3V20zm4.24-4.59c-.39.39-1.02.39-1.41 0l-2.83-2.83a.996.996 0 010-1.41L16.34 9.5a.996.996 0 111.41 1.41l-1.59 1.59 2.83 2.83c.39.39.39 1.02 0 1.41zM7.66 9.5a.996.996 0 00-1.41 0L4.66 11.1a.996.996 0 101.41 1.41l1.59-1.59c.39-.39.39-1.02 0-1.41z" />
      </svg>

      {/* Hotel Name */}
      <span className="text-md md:text-2xl font-bold text-white">Roomzy</span>
    </div>
  );
};

export default Logo;
