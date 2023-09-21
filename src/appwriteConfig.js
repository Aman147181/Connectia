import { Client, Account } from "appwrite";
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6502f488bbf483e17071');

export default client;

export const account = new Account(client);
