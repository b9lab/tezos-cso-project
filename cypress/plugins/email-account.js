const nodemailer = require('nodemailer');
const imaps = require('imap-simple');
const simpleParser = require('mailparser').simpleParser;

const makeEmailAccount = async () => {
  const testAccount = await nodemailer.createTestAccount();

  const emailConfig = {
    imap: {
      user: testAccount.user,
      password: testAccount.pass,
      host: 'imap.ethereal.email',
      port: 993,
      tls: true,
      authTimeout: 10000,
    },
  };
  
  return {
    email: testAccount.user,

    /**
     * Utility method for getting the last email
     * for the Ethereal email account created above.
     */
    async getLastEmail() {
      try {
        const connection = await imaps.connect(emailConfig);

        // grab up to 50 emails from the inbox
        await connection.openBox('INBOX');
        const searchCriteria = ['1:50'];
        const fetchOptions = {
          bodies: [''],
        }
        const messages = await connection.search(searchCriteria, fetchOptions);
        // and close the connection to avoid it hanging
        connection.end();

        console.log(messages);

        if (!messages.length) {
          return null;
        } else {
          // grab the last email
          const mail = await simpleParser(messages[messages.length - 1].parts[0].body);
          
          return {
            subject: mail.subject,
            text: mail.text,
            html: mail.html,
          }
        }
      } catch (e) {
        console.error(e);
        return null;
      }
    }
  }
}

module.exports = makeEmailAccount;
