const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const keyChar = key[keyIndex % key.length];

      if (alphabet.includes(message[i])) {
        const messageCharIndex = alphabet.indexOf(message[i]);
        const keyCharIndex = alphabet.indexOf(keyChar);

        const encryptedCharIndex = (messageCharIndex + keyCharIndex) % 26;
        encryptedMessage += alphabet[encryptedCharIndex];

        keyIndex++;
      } else {
        encryptedMessage += message[i];
      }
    }

    return this.isDirect ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let decryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const keyChar = key[keyIndex % key.length];

      if (alphabet.includes(encryptedMessage[i])) {
        const encryptedCharIndex = alphabet.indexOf(encryptedMessage[i]);
        const keyCharIndex = alphabet.indexOf(keyChar);

        const decryptedCharIndex = (encryptedCharIndex - keyCharIndex + 26) % 26;
        decryptedMessage += alphabet[decryptedCharIndex];

        keyIndex++;
      } else {
        decryptedMessage += encryptedMessage[i];
      }
    }

    return this.isDirect ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
