const sendContactEmail = async (name, email, message) => {
    //Placeholder logic for sending email
    console.log('Sending email...', { name, email, message });

    //Replace w actual email service down the road eventually - for now, this is just a placeholder to help the code not break in the meantime. 
    return Promise.resolve();
};

module.exports = { sendContactEmail };