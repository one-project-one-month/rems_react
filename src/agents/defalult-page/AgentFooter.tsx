import React from 'react'

const AgentFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Company</h3>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a arcu sit amet eros vehicula fermentum.
        </p>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Services</h3>
        <ul className="text-sm space-y-2">
          <li><a href="#" className="hover:underline">Service 1</a></li>
          <li><a href="#" className="hover:underline">Service 2</a></li>
          <li><a href="#" className="hover:underline">Service 3</a></li>
          <li><a href="#" className="hover:underline">Service 4</a></li>
        </ul>
      </div>
  
      <div>
        <h3 className="text-lg font-semibold mb-4">About</h3>
        <ul className="text-sm space-y-2">
          <li><a href="#" className="hover:underline">Our Story</a></li>
          <li><a href="#" className="hover:underline">Team</a></li>
          <li><a href="#" className="hover:underline">Careers</a></li>
        </ul>
      </div>
    
      <div>
        <h3 className="text-lg font-semibold mb-4">Contact</h3>
        <ul className="text-sm space-y-2">
          <li><a href="#" className="hover:underline">Email</a></li>
          <li><a href="#" className="hover:underline">Phone</a></li>
          <li><a href="#" className="hover:underline">Address</a></li>
        </ul>
      </div>
    </div>
    <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
      <p>&copy; 2024 REMS Ko Sann Lynn Htun. All rights reserved.</p>
    </div>
  </div>
</footer>
  )
}

export default AgentFooter