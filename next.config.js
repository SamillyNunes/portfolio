const { webpack } = require("next/dist/compiled/webpack/webpack");

module.exports = {
    webpack: (config) => {
        config.resolve.fallback = {
            fs: false,
            path: false,
        };

        return config;
    }
}