export const openWhatsApp = () => {
    const phoneNumber = "7488736844";
    const message = `Hello Sweet Trip,

        I'm interested in booking a trip with Sweet Trip.
        
        Could you please help me with:
        - My preferred destination
        - Travel dates
        - Any special requirements (e.g., hotels, cars, boats etc.)

        Looking forward to hearing from you! 😊
        
        `;

    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };