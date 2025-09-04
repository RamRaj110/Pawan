import React from 'react'

function Footer() {
  return (
    <div>
      <footer>
          <div className="text-center text-gray-400 py-4">
            &copy; {new Date().getFullYear()} Mr.Pawan. All rights reserved.
          </div>
        </footer>
    </div>
  )
}

export default Footer
