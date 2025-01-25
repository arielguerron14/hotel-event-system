const processPayment = async (amount, method) => {
  console.log(`Processing payment of $${amount} using ${method}`);
  // Simulación de una pasarela de pago
  return { success: true, transactionId: `TXN${Date.now()}` };
};

module.exports = { processPayment };
