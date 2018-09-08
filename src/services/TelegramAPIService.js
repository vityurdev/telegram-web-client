import MTProto from 'telegram-mtproto';
import Storage from 'mtproto-storage-browser';

const config = {
  api_id: 0,
  api_hash: ''
};

const api = {
  layer: 57,
  invokeWithLayer: 0xda9b0d0d,
  initConnection: 0x69796de9,
  api_id: config.id,
};

const server = {
  webogram: true,
  dev: false,
};

const app = {
  storage: new Storage()
};

class TelegramAPIService {
  constructor() {
    this.client = MTProto({server, api, app});
  };

  async sendAuthCode(phoneNumber) {
    const { phone_code_hash } = await this.client('auth.sendCode', {
      phone_number: phoneNumber,
      api_id: config.api_id,
      api_hash: config.api_hash
    });

    return phone_code_hash;
  };

  async signIn(phoneNumber, phoneCode, phoneCodeHash) {
    const { user } = await this.client('auth.signIn', {
      phone_number: phoneNumber,
      phone_code: phoneCode,
      phone_code_hash: phoneCodeHash
    });

    return user;
  }
};

const telegramAPIService = new TelegramAPIService();

export default telegramAPIService;