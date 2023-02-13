document.getElementById('withdraw-btn').addEventListener('click', function(){
     const inputCurrentFelidValue = getInputId('withdraw-input');
   
      const elemetsPreveusFiledValue = getElementTextId('withdraw-element');
    //  //console.log(elemetsPreveusFiledValue);

      const depositTotalValue = elemetsPreveusFiledValue + inputCurrentFelidValue;
    //  //console.log(depositTotalValue)
       setElementFiled('withdraw-element',depositTotalValue);

       const balanceElemetValue = getElementTextId('blance-element');

       const balanceTotalValue = balanceElemetValue - inputCurrentFelidValue;
       setElementFiled('blance-element',balanceTotalValue)

})