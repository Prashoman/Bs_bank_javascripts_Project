document.getElementById('deposit-btn').addEventListener('click', function(){
    const inputCurrentFelidValue = getInputId('deposit-input');
    //console.log(inputCurrentFelidValue);
     const elemetsPreveusFiledValue = getElementTextId('deposit-element');
     //console.log(elemetsPreveusFiledValue);

     const depositTotalValue = elemetsPreveusFiledValue + inputCurrentFelidValue;
     //console.log(depositTotalValue)
      setElementFiled('deposit-element',depositTotalValue)

      const balanceElemetValue = getElementTextId('blance-element');

      const balanceTotalValue = balanceElemetValue + inputCurrentFelidValue;
      setElementFiled('blance-element',balanceTotalValue)

})