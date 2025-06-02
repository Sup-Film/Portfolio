const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white p-8">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Sup.dev. All rights reserved.
        </p>
        <p className="text-md">
          Made with <span className="text-red-500">❤</span> Sup.dev
        </p>
        {/* <div className="flex flex-row gap-x-4">
          <a href="">asd</a>
          <a href="">asd</a>
          <a href="">asd</a>
        </div> */}
      </div>
    </footer>
  )
}
export default Footer