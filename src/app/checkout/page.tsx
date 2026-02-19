'use client'
import {useCart} from '@/store/useCart';
import Link from 'next/link';

export default function CheckoutPage() {
    const {items, getTotalPrice, clearCart} = useCart();
    const totalPrice = getTotalPrice();
    
    const sendOrder = () => {
        const phone = '2348056077430';
        
        // Create a well-formatted message
        let message = `🍽️ *NEW ORDER FROM FOOD HUB* 🍽️\n\n`;
        message += `📋 *ORDER DETAILS:*\n`;
        message += `${'-'.repeat(30)}\n`;
        
        items.forEach((item, index) => {
            const itemTotal = (item.price * item.quantity) / 100;
            message += `${index + 1}. *${item.name}*\n`;
            message += `   Qty: ${item.quantity} × ₦${(item.price / 100).toFixed(2)}\n`;
            message += `   Subtotal: ₦${itemTotal.toFixed(2)}\n\n`;
        });
        
        message += `${'-'.repeat(30)}\n`;
        message += `💰 *TOTAL: ₦${(totalPrice / 100).toFixed(2)}*\n`;
        message += `${'-'.repeat(30)}\n\n`;
        message += `📞 Please confirm this order and let me know the delivery address.\n`;
        message += `🚚 Delivery is FREE!\n\n`;
        message += `Thank you for choosing Food Hub! 😊`;
        
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
        clearCart();
    };

    if (items.length === 0) { 
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-orange-50 to-red-50">
                <div className="text-center space-y-6">
                    <div className="text-8xl">🍽️</div>
                    <h2 className="text-3xl font-bold text-gray-800">Your bowl is empty!</h2>
                    <p className="text-gray-600 text-lg">Time to fill it with some delicious food</p>
                    <Link 
                        href="/" 
                        className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                        Browse Menu 🍛
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
            <main className="max-w-4xl mx-auto p-6">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Review Your Order</h1>
                    <p className="text-gray-600">Almost there! Check your items before placing the order</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Order Items */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Order Items</h2>
                            <div className="space-y-4">
                                {items.map((item) => (
                                    <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-800 text-lg">{item.name}</h3>
                                            <p className="text-gray-600">{item.description}</p>
                                            <div className="flex items-center mt-2">
                                                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                                                    Qty: {item.quantity}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-right ml-4">
                                            <p className="text-2xl font-bold text-gray-800">
                                                ₦{((item.price * item.quantity) / 100).toFixed(2)}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                ₦{(item.price / 100).toFixed(2)} each
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Order Summary</h2>
                            
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Items ({items.reduce((sum, item) => sum + item.quantity, 0)})</span>
                                    <span>₦{(totalPrice / 100).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Delivery</span>
                                    <span className="text-green-600 font-medium">Free</span>
                                </div>
                                <hr className="border-gray-200" />
                                <div className="flex justify-between text-xl font-bold text-gray-800">
                                    <span>Total</span>
                                    <span className="text-orange-600">₦{(totalPrice / 100).toFixed(2)}</span>
                                </div>
                            </div>

                            <button 
                                onClick={sendOrder}
                                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                            >
                                <span>Send Order via WhatsApp</span>
                                <span className="text-xl">📱</span>
                            </button>

                            <div className="mt-4 text-center">
                                <Link 
                                    href="/" 
                                    className="text-orange-600 hover:text-orange-700 font-medium transition-colors"
                                >
                                    ← Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}