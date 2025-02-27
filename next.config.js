/** @type {import('next').NextConfig} */

const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl();
