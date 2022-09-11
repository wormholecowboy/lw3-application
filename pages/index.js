import SocialProfileWithImage from '../components/card';
import styled from '@emotion/styled';
import { providers } from 'ethers';
import { useEffect, useState, useRef } from 'react';
import { Web3Provider } from '@ethersproject/providers';

const web3ModalRef = useRef();

const getProvider = async () => {
  const provider = await web3ModalRef.current.connect();
  const web3Provider = new providers.Web3Provider(provider);
  const { chainId } = await Web3Provider.getNetwork();

  if (chainId != 1) {
    window.alert('Please select the Ethereum mainnet as your network');
    throw new Error('Please select the Ethereum mainnet as your network');
  }
  return web3Provider;
};

useEffect(() => {
  if (!walletConnected) {
    web3ModalRef.current = new Web3Modal({
      network: 'rinkeby', //TODO: change this to etherem
      providerOptions: {},
      disableInjectedProvider: false,
    });
    connectWallet();
  }
});

const color = 'white';

const Cssthing2 = styled.button`
  padding: 32px;
  color: black;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  &:hover {
    color: ${color};
  }
`;

const Header = styled.div`
  background-color: gray;
  height: 340px;
  display: flex;
  flex-direction: column;
`;

const NFTSection = styled.div`
  height: 500px;
  background-color: khaki;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const NFTCardContainer = styled.div`
  background-color: white;
  padding: 20px;
  height: 450px;
  width: 900px;
  border-radius: 2rem;
  align-self: center;
`;

const Footer = styled.div`
  background-color: black;
  height: 200px;
`;

export default function Home() {
  return (
    <>
      <Header>
        <SocialProfileWithImage />
      </Header>
      <NFTSection>
        <NFTCardContainer></NFTCardContainer>
      </NFTSection>
      <Footer />
    </>
  );
}
