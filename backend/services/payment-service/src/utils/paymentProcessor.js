const processPayment = async ({ userId, amount, method }) => {
  console.log(`Processing payment for user ${userId}: $${amount} using ${method}`);

  // Simulación de procesamiento de pago
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 'success' });
    }, 2000); // Simula un retraso en el procesamiento
  });
};

module.exports = { processPayment };
