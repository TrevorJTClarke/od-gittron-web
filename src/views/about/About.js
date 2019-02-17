import React from 'react';
import './About.scss';

function About() {
  return (
    <div className="Page About">
      <div className="PageHeader">
        <div className="PageHeader__Contents">
          <h1>
            In the year 3369, the people of Earth built a decentralized
            autonomous bot factory called Gittron and sent it out to explore the
            vastness of space. To expand its reach into the farthest edge of the
            cosmos, it builds self-replicating Prime Bots capable of cloning
            themselves as Buidl and Support Bots. Together, they buidl the crap
            out of the universe!
          </h1>
        </div>
      </div>
      <div className="Block Border-Bottom">
        <div className="Block__Contents Contain">
          <h2>
            Deploy an autonomous fundraising bot for your open-source project.
          </h2>
          <p>
            Register your repo to add passive income to your project. Just come
            back later and withdraw.
          </p>
        </div>
      </div>
      <div className="Block Columns Contain">
        <div className="Columns__Column--33">
          <h2>Support Open Source</h2>
          <p>
            Support any open source project (Prime Bot) on Gittron and get a
            Support Bot NFT as thank you.
          </p>
        </div>
        <div className="Columns__Column--33">
          <h2>Bots are NFTs</h2>
          <p>
            All Bots are unique collectible digital assets known as ERC-721
            non-fungible tokens (NFTs).
          </p>
        </div>
        <div className="Columns__Column--33">
          <h2>Bot DNA is based on Code.</h2>
          <p>
            When a bot is generated, your codebase is used to generate its DNA.
          </p>
        </div>
      </div>
      <div className="Block Black">
        <div className="Block__Contents Contain">
          <h2>Prime Bots</h2>
          <p>
            Managers of an open-source repo can generate a unique Prime Bot. The
            DNA of the Prime Bot is based on the repo's codebase.
          </p>
          <p>
            With a Prime Bot generated, it can be cloned as Buidl Bots and
            Support Bots.
          </p>
        </div>
      </div>
      <div className="Block Border-Bottom">
        <div className="Block__Contents Contain">
          <h2>Buidl Bots</h2>
          <p>
            Buidl Bots are special rare clones of the Prime Bot that can be
            generated by the owner and distributed to contributors on their repo
            for free.
          </p>
        </div>
      </div>
      <div className="Block Border-Bottom">
        <div className="Block__Contents Contain">
          <h2>Support Bots</h2>
          <p>
            Supporters of an open source project can clone a Prime Bot as a
            Support Bot. The DNA of the Support Bot is a direct clone of the
            Prime Bot, including any rare elements, but upon generation will
            also receive some unique traits such as colors.
          </p>
        </div>
      </div>
      <div className="Block">
        <div className="Block__Contents Contain">
          <h2>FAQs</h2>
          <p>
            <strong>What is this?</strong>
          </p>
          <p>
            <a
              href="https://odyssy.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Odyssy
            </a>{' '}
            built Gittron during Buidl Week leading up to ETHDenver 2019 as a
            DApp that hackers and attendees could play with during the event. It
            is an experiment and we appreciate any feedback or ideas for
            improvement! Give us your feedback in the{' '}
            <a
              href="https://discordapp.com/channels/546089230133362698/546089230133362700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gittron Discord Chat
            </a>
            !
          </p>
          <p>
            The main purpose of Gittron is a gamified funding mechanism that
            adds passive income to support the further development of
            open-source projects. By supporting a verified Prime Bot on Gittron,
            you're sending funds directly to the project and receiving a Support
            Bot NFT as a thank you. The Gittron framework and its gamified
            funding mechanism could be applied to other kinds of impact
            projects. We do think taking a repo of code and generating
            programatic dna off of that is pretty cool though. Any data source
            could be used though.
          </p>
          <p>Of course we also just love collectible digital assets!</p>
          <p>
            The Gittron framework and its gamified funding mechanism could be
            applied to other kinds of impact projects. We do think taking a repo
            of code and generating programatic dna off of that is pretty cool
            though.
          </p>
          <p>
            <strong>What's the Contract Address?</strong>
          </p>
          <p>
            Rinkeby:{' '}
            <a
              href={`https://rinkeby.etherscan.io/address/${
                process.env.REACT_APP_CONTRACT_ADDRESS
              }`}
            >
              {process.env.REACT_APP_CONTRACT_ADDRESS}
            </a>
          </p>
          <p>
            Mainnet:{' '}
            <a
              href={`https://etherscan.io/address/${
                process.env.REACT_APP_MAIN_CONTRACT_ADDRESS
              }`}
            >
              {process.env.REACT_APP_MAIN_CONTRACT_ADDRESS}
            </a>
          </p>
          <p>
            <strong>What is an NFT?</strong>
          </p>
          <p>
            An NFT is a collectible non-fungible token, meaning it is the only
            token and cannot be broken down into smaller parts. Our NFTs follow
            the{' '}
            <a
              href="http://erc721.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ERC-721 standard
            </a>
            .
          </p>
          <p>
            <strong>Can I buy or sell Bots?</strong>
          </p>
          <p>
            Of course! You can buy <i>and</i> sell Bots on{' '}
            <a
              href="https://opensea.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenSea
            </a>
            .
          </p>
          <p>
            <strong>How do I generate a Prime Bot?</strong>
          </p>
          <p>
            Authenticate with a Web3 Wallet and go to Dashboard. In your
            Dashboard, you can register a new repo which will generate a Prime
            Bot. The repo must be set to public (no centralized repos allowed!).
            Set a price for how much you want to accept per 'Support' and a
            Wallet Address to receive the funds. Supporters will get a clone of
            your Prime Bot with some unique modifications.
          </p>
          <p>
            <strong>My Prime Bot has Supports. How do I withdraw?</strong>
          </p>
          <p>
            Go to your Prime Bot's page, and at the bottom click the 'Withdraw'
            button. All funds in the Bot Bank will go to the address you set
            during generation of your Prime Bot. 20% will go to Gittron to
            support further development of the framework. This is also to
            disincentivize Prime Bots from supporting themselves, as they won't
            be able to get all the funds.
          </p>
          <p>
            <strong>How do I get a Buidl Bot?</strong>
          </p>
          <p>
            The owner of a Prime Bot can gift you a Buidl Bot if they haven't
            used them all.
          </p>
          <p>
            <strong>How do I get a Support Bot?</strong>
          </p>
          <p>
            Click on a Prime Bot and on its page, you'll be able to 'Support'
            the Prime Bot with some ETH. When the transaction completes, you'll
            get a unique Support Bot.
          </p>
          <p>
            <strong>
              My Prime Bot ran out of Buidl Bots. How do I get more?
            </strong>
          </p>
          <p>
            Once a Prime Bot has cloned enough Support bots, you'll gain access
            to the 'Metamorph' function in your Prime Bot.
          </p>
          <p>
            <strong>How does the Metamorph work?</strong>
          </p>
          <p>
            Once a Prime Bot has been supported a sufficient number of times,
            the owner of the Prime Bot will be granted the 'Metamorph' function.
            A Metamorph will create a new generation of the Prime Bot (ex. Gen 0
            will become Gen 1). Metamorphing a Prime Bot will grant it another
            chance at picking up another rare mutation (previous rares carry on
            to the next generation). Once a Prime Bot has metamorphed, all new
            Buidl and Support Bot clones will be based on the new generation,
            and no more clones of the previous generation can be generated.
          </p>
          <p>
            <strong>Who built this crazy thing?</strong>
          </p>
          <p>
            Odyssy is a decentralized collective sending design and development
            to the blockchain and beyond. Connect with us at{' '}
            <a
              href="https://odyssy.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              odyssy.io
            </a>
            .
          </p>
          <p>
            All Artwork was created by Ven Gist of Odyssy during Buidl Week.
          </p>
          <p>
            Contract audit provided by twitter:{' '}
            <a
              href="https://twitter.com/RedragonX"
              target="_blank"
              rel="noopener noreferrer"
            >
              @redragonx
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
