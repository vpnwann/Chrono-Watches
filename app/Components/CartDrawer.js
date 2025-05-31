export default function CartDrawer({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-500">
            ✕
          </button>
        </div>

        <div className="p-4">
          <p>Your cart is empty.</p>
        </div>

        <div className="absolute bottom-0 w-full p-4 border-t">
          <button className="w-full bg-green-600 text-white py-2 rounded">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
