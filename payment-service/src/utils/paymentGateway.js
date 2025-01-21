const processPaymentGateway = async ({ userId, amount, method }) => {
    // Simulación de llamada a un servicio externo de pago
    if (amount <= 0) {
      throw new Error('Invalid payment amount');
    }
  
    return {
      status: 'success',
      transactionId: `TXN-${Date.now()}`,
    };
  };
  
  module.exports = { processPaymentGateway };
  