const base = require('@playwright/test').test;

const test = base.extend({
  creds: async ({}, use) => {
    const username = 'standard_user';
    const password = 'secret_sauce';
    if (!username || !password) throw new Error('Missing USERNAME or PASSWORD');
    await use({ username, password });
  },
});

const { expect } = require('@playwright/test');

module.exports = { test, expect };
