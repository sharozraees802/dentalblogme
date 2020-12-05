const SibApiV3Sdk = require("sib-api-v3-sdk");
const defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey =
  "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";

var apiInstance = new SibApiV3Sdk.SMTPApi();

const sendinblue = (sendSmtpEmail) => {
  apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data) {
      return true;
    },
    function (error) {
      console.error(error);
      return false;
    }
  );
};

module.exports = sendinblue;
