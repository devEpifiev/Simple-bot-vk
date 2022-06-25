const { VK } = require('vk-io');
const vk = new VK({
	token: process.env.TOKEN
});

const { HearManager } = require('@vk-io/hear');
const hearManager = new HearManager();

vk.updates.on('message_new', hearManager.middleware);

hearManager.hear(/^hello$/, async (context) => {
	await context.send('Hello!');
});

vk.updates.start().catch(console.error);