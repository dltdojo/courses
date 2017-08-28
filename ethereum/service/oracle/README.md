* Oracle - Bitcoin Wiki  https://en.bitcoin.it/wiki/Oracle
* Oracle PublicKey Using external state  https://en.bitcoin.it/wiki/Contract#Example_4:_Using_external_state
* Reality Keys - Facts about the future, cryptographic proof when they come true https://www.realitykeys.com/

## Cases

### TokenCard

* Found a major TokenCard ICO token distribution bug：ethereum  https://www.reddit.com/r/ethereum/comments/68xwkc/found_a_major_tokencard_ico_token_distribution_bug/
* MonolithDAO/token https://github.com/MonolithDAO/token
* https://github.com/MonolithDAO/token/blob/master/src/ICO.sol#L182

```
function depositTokens(address _for, address _token, 
                           uint _ethValue, uint _depositedTokens, 
                           bytes32 _reference) 
    notAllStopped onlyOwner {
        if (getCurrSale() > 0) throw; //only first sale allows this
        if (mintRefs[_reference]) throw; //already minted for this reference
        mintRefs[_reference] = true;
        raisedFromToken[_token] = safeAdd(raisedFromToken[_token], _ethValue);

        //tokens do not count toward price changes and limits
        //we have to look up pricing, and do our own mint()
        uint tokensPerEth = sales[0].tokensPerEth();
        uint tkn = safeMul(_ethValue, tokensPerEth) / weiPerEth();
        token.mint(_for, tkn);
        
        logPurchaseViaToken(_for, _token, _depositedTokens, _ethValue, _reference);
    }
```

### Mayweather vs McGregor 

* Ethereum Account 0x7a2770fc68c659b0255d6d80bed82c7b0f163d6b Info https://etherscan.io/address/0x7a2770fc68c659b0255d6d80bed82c7b0f163d6b#code
* IMPORTANT UPDATE: Mayweather/McGregor Smart Contract：ethtrader https://www.reddit.com/r/ethtrader/comments/6w5wcn/important_update_mayweathermcgregor_smart_contract/
* BoxRec: Floyd Mayweather Jr http://boxrec.com/en/boxer/352

```
function checkResult() external payable requireState(State.PreResolution) {
    require(msg.value >= oraclize_getPrice("URL")); // 0.01 ether should be fine
    bytes32 queryId = oraclize_query("URL", "html(http://boxrec.com/en/boxer/352).xpath(//*[@id='2169292']//div[contains(@class, 'boutResult')]/text())");
    CheckResultCalled(queryId, msg.sender);
    validQueryIds[queryId] = true;
  }
```

[@id='2169292']

```
<div class="boutResult bgW" style="float:left;width:25px;">W</div>
```