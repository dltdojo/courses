package org.dltdojo.foo;

import java.util.concurrent.ExecutionException;

import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.methods.response.Web3ClientVersion;
import org.web3j.protocol.infura.InfuraHttpService;

public class Application {

	public static void main(String[] args) throws InterruptedException, ExecutionException {
		Web3j web3 = Web3j.build(new InfuraHttpService("https://rinkeby.infura.io/"));
		Web3ClientVersion web3ClientVersion = web3.web3ClientVersion().sendAsync().get();
		String clientVersion = web3ClientVersion.getWeb3ClientVersion();
		System.out.println(clientVersion);
	}

}
