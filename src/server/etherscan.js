/**
 * Created by michbil on 15.10.16.
 */

import nconf from './wrio_nconf';
import request from 'superagent';

const sendRawTX = async (rawTx) => {
    const apiKey = nconf.get("payment:etherscan.io");
    const api_request = `https://api.etherscan.io/api?module=proxy&action=eth_sendRawTransaction&hex=${{rawTx}}&apikey=${{apiKey}}`;
    const result = await request.get(api_request);
    return result;
}
