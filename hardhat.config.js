require("@nomiclabs/hardhat-waffle");
//require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/1Qv_a8p0XaZiINKSilNYWdS8IFgoi2y",
      accounts:
        "d2a0501608d2db47a88c9ebeeb5262eed0c5adc5e69a0a2794809636b9a2b92d",
    },
    etherscan: {
      // Your API key for Etherscan
      // Obtain one at https://etherscan.io/
      apiKey: "Q7ITVGN33CRT8R7EN7H1BPJMTMAK7B4FPM",
    },
  },
};
