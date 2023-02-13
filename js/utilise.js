function getInputId(inputId){
    const inputIdNumberValue =parseFloat(document.getElementById(inputId).value);
    document.getElementById(inputId).value = ''
    return inputIdNumberValue;
}
function getElementTextId(elementId){
    const elementIdNumberValue =parseFloat(document.getElementById(elementId).innerText);
    return elementIdNumberValue;
}

function setElementFiled(elemetSetId, depositTotalValue){
    const getElemetId = document.getElementById(elemetSetId);
    getElemetId.innerText = depositTotalValue;
}